var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("*", function (req, res) {
    res.render("branch_timeline.ejs");
});

app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});