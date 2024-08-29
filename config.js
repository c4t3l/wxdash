const topBarCenterText = `WX - DASHBOARD`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  [
    "2196F3",
    "⚡ OUTAGES",
    "https://tracker.centerpointenergy.com/map/?_ga=2.252619849.1966996515.1724901712-568936517.1724901710",
    "1",
  ],
  [
    "2196F3",
    "TRANSTAR",
    "http://traffic.houstontranstar.org/layers/",
    "1",
  ],
  [
    "2196F3",
    "FLOOD MAP",
    "https://www.harriscountyfws.org/",
    "1",
  ],
  [
    "0a6ebd",
    "📷 HOU FEED",
    "https://www.youtube.com/embed/wUQc3RoLAPs",
    "1",
  ],
  [
    "0a6ebd",
    "📷 GV FEED",
    "https://www.youtube.com/embed/loADg1ptgjA",
    "1",
  ],
  [
    "0a6ebd",
    "📷 CON FEED",
    "https://www.youtube.com/embed/TBqgCHRnTy4",
    "1",
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-97.04,31.59,3142",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KHGX_loop.gif",
  ],
  [
    "SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "LOCAL SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GM/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
  ],
  [
    "TROPICAL OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",	  
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  [
    "AVG FUEL COST",
    "https://charts.gasbuddy.com/ch.gaschart?Country=USA&Crude=f&Period=1&Areas=USA%20Average%2CHouston%2CDallas&Unit=US%20%24%2FG",
  ],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
