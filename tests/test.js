const index = require("../index.js");
const client = new index();

client.entry("selectthegang").then((info) => {
	console.log(info);
});