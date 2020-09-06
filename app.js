const app = require("express")();
const PORT = process.env.PORT || 8000;
const expressIp = require("express-ip");
const path = require("path");

//app.set(PORT);

app.use(expressIp().getIpInfoMiddleware);

app.get("/", (req, res) => {
  const ipInfo = req.ipInfo;
  console.log(ipInfo);
  let message = `Request is sent from ${ipInfo.ip}`;
  let location = `Location is country: ${ipInfo.country}, state:${ipInfo.region}, city: ${ipInfo.city}`;
  return res.json({
    Message: message,
    "Location Details": location,
  });
});

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
