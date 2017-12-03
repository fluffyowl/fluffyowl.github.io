var cal = new CalHeatMap();
cal.init({
  start: new Date(2015, 0),
  domain: "year",
  subDomain: "day",
  data: "./test/nebukuro09.json"
});
