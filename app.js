var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/home", function (req, res) {
    res.render("landing_page.ejs");
});

app.get("/it", function (req, res) {
    res.render("it_timeline.ejs");
});

app.get("/cse", function (req, res) {
    res.render("cse_timeline.ejs");
});

app.get("/ece", function (req, res) {
    res.render("ece_timeline.ejs");
});

app.get("/eee", function (req, res) {
    res.render("eee_timeline.ejs");
});

app.get("/civil", function (req, res) {
    res.render("civil_timeline.ejs");
});

app.get("/mech", function (req, res) {
    res.render("mech_timeline.ejs");
});

app.get('*', function (req, res) {
    res.render("not_found.ejs", {
        "notFound": "/assets/pageNotFound.png"
    })
});

app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});