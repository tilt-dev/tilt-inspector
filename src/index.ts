const client = require("./client").newTiltClient();
client.listSession().then((res) => {
  console.log(JSON.stringify(res.body.items, null, "  "));
});
