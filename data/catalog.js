// WGN Classic TV schedule catalog.
// Official/licensed YouTube uploads are connected where verified.
// Guide-only entries intentionally do not pretend an unofficial upload is cleared.
window.WGN_PROGRAMS = {
  matlock: { id:"WGN-MATLOCK", title:"Matlock", year:1986, collection:"Courtroom Classic", runtimeSeconds:3600, videoId:"", cleared:false },
  perry: { id:"WGN-PERRY", title:"Perry Mason", year:1957, collection:"Courtroom Classic", runtimeSeconds:3600, videoId:"", cleared:false },
  er: { id:"WGN-ER", title:"ER", year:1994, collection:"Chicago Medical Drama", runtimeSeconds:3600, videoId:"", cleared:false },
  chicagoHope: { id:"WGN-CH", title:"Chicago Hope", year:1994, collection:"Chicago Medical Drama", runtimeSeconds:3600, videoId:"", cleared:false },
  svuA: { id:"WGN-SVU-A", title:"Law & Order: SVU — Family Cases", year:1999, collection:"Crime & Court", runtimeSeconds:1796, videoId:"YeGdOnuirig", cleared:true },
  svuB: { id:"WGN-SVU-B", title:"Law & Order: SVU — Intense Cases", year:1999, collection:"Crime & Court", runtimeSeconds:1783, videoId:"5GWC2V2tgyU", cleared:true },
  nightCourt: { id:"WGN-NC", title:"Night Court", year:1984, collection:"Courtroom Comedy", runtimeSeconds:1800, videoId:"", cleared:false },
  barney: { id:"WGN-BM", title:"Barney Miller", year:1975, collection:"Classic Comedy", runtimeSeconds:1800, videoId:"", cleared:false },
  bozo79: { id:"WGN-BOZO79", title:"Bozo's Circus — WGN 9/10/1979", year:1979, collection:"WGN Chicago Archive", runtimeSeconds:3600, videoId:"An8d4gfxXfU", cleared:true },
  bozo78: { id:"WGN-BOZO78", title:"Bozo's Circus — WGN 6/15/1978", year:1978, collection:"WGN Chicago Archive", runtimeSeconds:3600, videoId:"Fgfp9HOvkqI", cleared:true },
  dickVanDyke: { id:"WGN-DVD", title:"The Dick Van Dyke Show", year:1961, collection:"Classic Comedy", runtimeSeconds:1800, videoId:"", cleared:false },
  addams: { id:"WGN-ADDAMS", title:"The Addams Family", year:1964, collection:"Classic Comedy", runtimeSeconds:1800, videoId:"", cleared:false },
  starsky: { id:"WGN-SH", title:"Starsky & Hutch", year:1975, collection:"Classic Crime", runtimeSeconds:3600, videoId:"", cleared:false },
  fortyEight: { id:"WGN-48", title:"48 Hours — Classic Case", year:1988, collection:"True Crime", runtimeSeconds:3600, videoId:"", cleared:false },
  inHeat: { id:"WGN-IHN", title:"In the Heat of the Night", year:1988, collection:"Crime Drama", runtimeSeconds:3600, videoId:"", cleared:false },

  movieJustice: { id:"WGN-MOV-01", title:"Color of Justice", year:1997, collection:"6 PM Courtroom Movie", runtimeSeconds:5700, videoId:"JJdB9gp4pnA", cleared:true },
  movieTrial: { id:"WGN-MOV-02", title:"The Trial", year:2010, collection:"8 PM Legal Drama", runtimeSeconds:6048, videoId:"KSoHhMbdppw", cleared:true },
  movieVanished: { id:"WGN-MOV-03", title:"Vanished Without a Trace", year:1993, collection:"10 PM Crime Movie", runtimeSeconds:5340, videoId:"6R_kihZCChM", cleared:true }
};

window.WGN_DAY_TEMPLATE = [
  { minute:0, duration:60, choices:["inHeat","matlock"] },
  { minute:60, duration:60, choices:["perry","matlock"] },
  { minute:120, duration:60, choices:["er","chicagoHope"] },
  { minute:180, duration:60, choices:["chicagoHope","er"] },
  { minute:240, duration:60, choices:["starsky","inHeat"] },
  { minute:300, duration:60, choices:["perry","matlock"] },
  { minute:360, duration:60, choices:["matlock","perry"] },
  { minute:420, duration:60, choices:["perry","inHeat"] },
  { minute:480, duration:60, choices:["er","chicagoHope"] },
  { minute:540, duration:60, choices:["chicagoHope","er"] },
  { minute:600, duration:30, choices:["svuA","svuB"] },
  { minute:630, duration:30, choices:["svuB","svuA"] },
  { minute:660, duration:30, choices:["nightCourt","barney"] },
  { minute:690, duration:30, choices:["barney","nightCourt"] },
  { minute:720, duration:60, choices:["bozo79","bozo78"] },
  { minute:780, duration:30, choices:["dickVanDyke","addams"] },
  { minute:810, duration:30, choices:["addams","dickVanDyke"] },
  { minute:840, duration:60, choices:["starsky","inHeat"] },
  { minute:900, duration:60, choices:["fortyEight","perry"] },
  { minute:960, duration:60, choices:["er","chicagoHope"] },
  { minute:1020, duration:30, choices:["svuA","svuB"] },
  { minute:1050, duration:30, choices:["svuB","svuA"] },
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
  reset:"12:00 AM viewer local time",
  movieTimes:["6:00 PM","8:00 PM","10:00 PM"]
};
