(function (root) {
  "use strict";

  const TIME_ZONE = (Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago");

  function stationParts(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date);
    return Object.fromEntries(
      parts.filter(part => part.type !== "literal").map(part => [part.type, Number(part.value)])
    );
  }

  function zonedToUtc(year, month, day, hour = 0, minute = 0, second = 0) {
    const target = Date.UTC(year, month - 1, day, hour, minute, second);
    let guess = target;
    for (let i = 0; i < 4; i += 1) {
      const parts = stationParts(new Date(guess));
      const represented = Date.UTC(
        parts.year,
        parts.month - 1,
        parts.day,
        parts.hour,
        parts.minute,
        parts.second
      );
      guess += target - represented;
    }
    return guess;
  }

  function dateKey(nowMs) {
    const parts = stationParts(new Date(nowMs));
    return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
  }

  function hash(text) {
    let value = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      value = Math.imul(value ^ text.charCodeAt(i), 16777619);
    }
    return value >>> 0;
  }

  function pickChoice(choices, key, index) {
    if (!choices.length) return null;
    const dateParts = String(key).split("-").map(Number);
    const dayNumber = Math.floor(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]) / 86400000);
    return choices[((dayNumber + index) % choices.length + choices.length) % choices.length];
  }

  function createDaySchedule(nowMs, programs, template) {
    const parts = stationParts(new Date(nowMs));
    const midnightMs = zonedToUtc(parts.year, parts.month, parts.day);
    const key = dateKey(nowMs);
    return template.map((slot, index) => {
      const programKey = pickChoice(slot.choices, key, index);
      const program = programs[programKey];
      const blockSeconds = slot.duration * 60;
      return {
        id: `${key}-${String(index).padStart(2, "0")}`,
        movie: program,
        startsAtMs: midnightMs + slot.minute * 60000,
        endsAtMs: midnightMs + (slot.minute + slot.duration) * 60000,
        blockSeconds
      };
    });
  }

  function createSegments(block) {
    const runtime = Math.min(block.movie.runtimeSeconds || block.blockSeconds, block.blockSeconds);
    const segments = [];
    if (block.movie.videoId && block.movie.cleared) {
      segments.push({
        kind: "program",
        title: block.movie.title,
        videoId: block.movie.videoId,
        cleared: true,
        sourceStart: 0,
        stationStart: 0,
        duration: runtime
      });
    } else {
      segments.push({
        kind: "station",
        title: block.movie.title,
        videoId: "",
        cleared: false,
        sourceStart: 0,
        stationStart: 0,
        duration: Math.min(runtime, block.blockSeconds)
      });
    }
    if (runtime < block.blockSeconds) {
      segments.push({
        kind: "station",
        title: "Station break — next program starts on schedule",
        videoId: "",
        cleared: true,
        sourceStart: 0,
        stationStart: runtime,
        duration: block.blockSeconds - runtime
      });
    }
    return segments;
  }

  function resolve(nowMs, schedule) {
    let block = schedule.find(item => nowMs >= item.startsAtMs && nowMs < item.endsAtMs);
    if (!block) block = nowMs < schedule[0].startsAtMs ? schedule[0] : schedule[schedule.length - 1];
    const blockElapsed = Math.max(
      0,
      Math.min(block.blockSeconds - 1, Math.floor((nowMs - block.startsAtMs) / 1000))
    );
    const segments = createSegments(block);
    const segment = segments.find(
      item => blockElapsed >= item.stationStart && blockElapsed < item.stationStart + item.duration
    ) || segments[segments.length - 1];
    const segmentElapsed = Math.max(0, blockElapsed - segment.stationStart);
    return {
      block,
      segment,
      segmentElapsed,
      blockElapsed,
      mediaSeconds: segment.sourceStart + segmentElapsed,
      segmentRemaining: Math.max(0, segment.duration - segmentElapsed),
      blockRemaining: Math.max(0, block.blockSeconds - blockElapsed)
    };
  }

  root.WGNEngine = {
    TIME_ZONE,
    stationParts,
    zonedToUtc,
    dateKey,
    createDaySchedule,
    createSegments,
    resolve
  };
})(window);
