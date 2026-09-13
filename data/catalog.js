// WGN Classic TV schedule catalog.
// Live entries are genuine full episodes or full movies. Requested shows that do
// not yet have a verified full embeddable source stay in the library but are not
// placed into the synchronized live schedule.
window.WGN_PROGRAMS = {
  matlock: { id:"WGN-MATLOCK", title:"Matlock", year:1986, collection:"Courtroom Classic · source needed", runtimeSeconds:3600, videoId:"", cleared:false },
  perry: { id:"WGN-PERRY", title:"Perry Mason", year:1957, collection:"Courtroom Classic · source needed", runtimeSeconds:3600, videoId:"", cleared:false },
  er: { id:"WGN-ER", title:"ER", year:1994, collection:"Chicago Medical Drama · source needed", runtimeSeconds:3600, videoId:"", cleared:false },
  chicagoHope: { id:"WGN-CH", title:"Chicago Hope", year:1994, collection:"Chicago Medical Drama · source needed", runtimeSeconds:3600, videoId:"", cleared:false },
  nightCourt: { id:"WGN-NC", title:"Night Court", year:1984, collection:"Courtroom Comedy · source needed", runtimeSeconds:1800, videoId:"", cleared:false },
  barney: { id:"WGN-BM", title:"Barney Miller", year:1975, collection:"Classic Comedy · source needed", runtimeSeconds:1800, videoId:"", cleared:false },
  inHeat: { id:"WGN-IHN", title:"In the Heat of the Night", year:1988, collection:"Crime Drama · source needed", runtimeSeconds:3600, videoId:"", cleared:false },

  starsky1: { id:"WGN-SH-01", title:"Starsky & Hutch — Savage Sunday", year:1975, collection:"Classic Crime · Full Episode", runtimeSeconds:3000, videoId:"dejmQukKMIc", cleared:true },
  starsky2: { id:"WGN-SH-02", title:"Starsky & Hutch — Starsky and Hutch Are Guilty", year:1977, collection:"Classic Crime · Full Episode", runtimeSeconds:3000, videoId:"lva3MqSCWcQ", cleared:true },
  fortyEight1: { id:"WGN-48-01", title:"48 Hours — True-Crime Stories", year:1988, collection:"True Crime · Full Episode", runtimeSeconds:2640, videoId:"3spyJUFAh_M", cleared:true },
  fortyEight2: { id:"WGN-48-02", title:"48 Hours — Decades of Deceit", year:1988, collection:"True Crime · Full Episode", runtimeSeconds:2640, videoId:"pbu2rq9YZGQ", cleared:true },
  untoldER: { id:"WGN-UER-01", title:"Untold Stories of the ER — Minutes to Live", year:2010, collection:"Medical Drama · Full Episode", runtimeSeconds:2580, videoId:"e9vR9fnDf-0", cleared:true },

  bozo79: { id:"WGN-BOZO79", title:"Bozo's Circus — WGN 9/10/1979", year:1979, collection:"WGN Chicago Archive · Full Broadcast", runtimeSeconds:3600, videoId:"An8d4gfxXfU", cleared:true },
  bozo78: { id:"WGN-BOZO78", title:"Bozo's Circus — WGN 6/15/1978", year:1978, collection:"WGN Chicago Archive · Full Broadcast", runtimeSeconds:3600, videoId:"Fgfp9HOvkqI", cleared:true },

  dickVanDyke1: { id:"WGN-DVD-01", title:"The Dick Van Dyke Show — The Sick Boy and the Sitter", year:1961, collection:"Classic Comedy · Full Episode", runtimeSeconds:1560, videoId:"XHXG25zKhCI", cleared:true },
  addamsSchool: { id:"WGN-ADDAMS-01", title:"The Addams Family — Goes to School", year:1964, collection:"Classic Comedy · Full Episode", runtimeSeconds:1500, videoId:"HQlB4jSy-3Q", cleared:true },
  addamsVIP: { id:"WGN-ADDAMS-02", title:"The Addams Family — Meet the VIPs", year:1964, collection:"Classic Comedy · Full Episode", runtimeSeconds:1500, videoId:"TEaT0z5kUo4", cleared:true },
  addamsTree: { id:"WGN-ADDAMS-03", title:"The Addams Family — Family Tree", year:1964, collection:"Classic Comedy · Full Episode", runtimeSeconds:1500, videoId:"8jf3NUmvOfw", cleared:true },
  addamsHalloween: { id:"WGN-ADDAMS-04", title:"The Addams Family — Halloween", year:1964, collection:"Classic Comedy · Full Episode", runtimeSeconds:1500, videoId:"LavY2K3-Vhs", cleared:true },
  addamsNeighbors: { id:"WGN-ADDAMS-05", title:"The Addams Family — New Neighbors", year:1964, collection:"Classic Comedy · Full Episode", runtimeSeconds:1500, videoId:"NCeu5Wy-oVI", cleared:true },
  rifleman: { id:"WGN-RIFLEMAN-01", title:"The Rifleman — Full Episode", year:1958, collection:"Classic Action · Full Episode", runtimeSeconds:1560, videoId:"SIOt0AuP474", cleared:true },
  dannyThomas: { id:"WGN-DANNY-01", title:"The Danny Thomas Show — Danny and the Actor's School", year:1960, collection:"Classic Comedy · Full Episode", runtimeSeconds:1560, videoId:"KAAUP2X2aIo", cleared:true },

  // These are retained as library references only. They are compilation/program
  // blocks, not verified full SVU episodes, so they are not eligible for live TV.
  svuA: { id:"WGN-SVU-A", title:"Law & Order: SVU — Family Cases compilation", year:1999, collection:"Compilation · not scheduled", runtimeSeconds:1796, videoId:"YeGdOnuirig", cleared:false },
  svuB: { id:"WGN-SVU-B", title:"Law & Order: SVU — Intense Cases compilation", year:1999, collection:"Compilation · not scheduled", runtimeSeconds:1783, videoId:"5GWC2V2tgyU", cleared:false },

  movieJustice: { id:"WGN-MOV-01", title:"Color of Justice", year:1997, collection:"6 PM Courtroom Movie · Full Movie", runtimeSeconds:5700, videoId:"JJdB9gp4pnA", cleared:true },
  movieTrial: { id:"WGN-MOV-02", title:"The Trial", year:2010, collection:"8 PM Legal Drama · Full Movie", runtimeSeconds:6048, videoId:"KSoHhMbdppw", cleared:true },
  movieVanished: { id:"WGN-MOV-03", title:"Vanished Without a Trace", year:1993, collection:"10 PM Crime Movie · Full Movie", runtimeSeconds:5340, videoId:"6R_kihZCChM", cleared:true }
};

// One Central broadcast day is shared worldwide. Hour-long dramas keep 60-minute
// network slots, half-hour sitcoms keep 30-minute slots, and nightly movies own
// exact two-hour slots at 6 PM, 8 PM and 10 PM Central.
window.WGN_DAY_TEMPLATE = [
  { minute:0, duration:60, choices:["fortyEight1","fortyEight2","starsky1"] },
  { minute:60, duration:60, choices:["starsky1","starsky2","fortyEight1"] },
  { minute:120, duration:60, choices:["untoldER","fortyEight2"] },
  { minute:180, duration:60, choices:["fortyEight1","starsky2"] },
  { minute:240, duration:60, choices:["starsky1","starsky2"] },
  { minute:300, duration:60, choices:["bozo79","bozo78"] },
  { minute:360, duration:60, choices:["fortyEight2","fortyEight1"] },
  { minute:420, duration:60, choices:["starsky2","starsky1"] },
  { minute:480, duration:60, choices:["untoldER","fortyEight1"] },
  { minute:540, duration:60, choices:["bozo78","bozo79"] },

  { minute:600, duration:30, choices:["dickVanDyke1","addamsSchool","dannyThomas"] },
  { minute:630, duration:30, choices:["addamsVIP","addamsTree","rifleman"] },
  { minute:660, duration:30, choices:["addamsHalloween","dickVanDyke1","dannyThomas"] },
  { minute:690, duration:30, choices:["addamsNeighbors","addamsSchool","rifleman"] },
  { minute:720, duration:30, choices:["addamsHalloween","dickVanDyke1","dannyThomas"] },
  { minute:750, duration:30, choices:["addamsNeighbors","addamsSchool","rifleman"] },
  { minute:780, duration:30, choices:["dickVanDyke1","addamsVIP","dannyThomas"] },
  { minute:810, duration:30, choices:["addamsTree","addamsHalloween","rifleman"] },
  { minute:840, duration:60, choices:["starsky1","starsky2","fortyEight2"] },
  { minute:900, duration:60, choices:["fortyEight1","fortyEight2","untoldER"] },
  { minute:960, duration:30, choices:["addamsVIP","dickVanDyke1","rifleman"] },
  { minute:990, duration:30, choices:["addamsSchool","addamsNeighbors","dannyThomas"] },
  { minute:1020, duration:30, choices:["addamsSchool","addamsNeighbors","dickVanDyke1"] },
  { minute:1050, duration:30, choices:["addamsVIP","addamsTree","dannyThomas"] },

  { minute:1080, duration:120, choices:["movieJustice"] },
  { minute:1200, duration:120, choices:["movieTrial"] },
  { minute:1320, duration:120, choices:["movieVanished"] }
];

window.WGN_COMMERCIALS = [
  { id:"WGN-ID-1", title:"WGN Chicago station break", durationSeconds:60, videoId:"", cleared:true },
  { id:"WGN-ID-2", title:"Tonight: movies at 6, 8 and 10", durationSeconds:60, videoId:"", cleared:true }
];

window.INFINITY_CHANNEL = {
  id:"WGN",
  era:"Classic TV + nightly movies",
  reset:"12:00 AM Central broadcast time",
  broadcastTimeZone:"America/Chicago",
  movieTimes:["6:00 PM","8:00 PM","10:00 PM"],
  sourcePolicy:"Only verified full episodes, full broadcasts, and full movies are eligible for the live schedule."
};
