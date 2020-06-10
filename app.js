var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post('/civilrequest', function (req, res) {
    console.log(req.body);
    res.redirect("/civil");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "CIVIL SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
app.post('/cserequest', function (req, res) {
    console.log(req.body);
    res.redirect("/cse");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "CSE SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
app.post('/ecerequest', function (req, res) {
    console.log(req.body);
    res.redirect("/ece");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "ECE SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
app.post('/eeerequest', function (req, res) {
    console.log(req.body);
    res.redirect("/eee");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "EEE SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
app.post('/itrequest', function (req, res) {
    console.log(req.body);
    res.redirect("/it");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "IT SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
app.post('/mechrequest', function (req, res) {
    console.log(req.body);
    res.redirect("/mech");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'morningrobot@gmail.com',
            pass: 'ggggffff'
        }
    });


    var mailOptions = {
        from: 'wimpywarlord@gmail.com',
        to: "greetyourgirlfriend@gmail.com",
        subject: "MECH SUGGESTION",
        text: JSON.stringify(req.body),
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

app.get("/", function (req, res) {
    res.render("landing_page.ejs", {
        "title_logo": "/assets/coach.png",
        "facebook": "/assets/facebook.png",
        "github": "/assets/github.png",
        "instagram": "/assets/instagram.png"
    });
});

app.get("/it", function (req, res) {
    res.render("it_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
});

app.get("/cse", function (req, res) {
    res.render("cse_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
});

app.get("/ece", function (req, res) {
    res.render("ece_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
});

app.get("/eee", function (req, res) {
    res.render("eee_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
});

app.get("/civil", function (req, res) {
    res.render("civil_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
    //   let transporter = nodemailer.createTransport({
    //     service: "gmail", 
    //     auth: {
    //       user: "miniorganisation@gmail.com",
    //       pass: "sankarvishnu23",
    //     },
    //   });
    //   let info = await transporter.sendMail({
    //     from: `Subjects-List <minioraganisation@gmail.com>`,
    //     to: "kvs.sankar001@gmail.com",
    //     subject: `${req.title}`,
    //     text: "Suggestion for subjects",
    //     html: `<h1>${req.title}</h1><br>${req.matter}<p></>`,
    //   });

    //   console.log("Message sent: %s", info.messageId);
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

app.get("/mech", function (req, res) {
    res.render("mech_timeline.ejs", {
        "title_logo": "/assets/coach.png"
    });
});

app.get('*', function (req, res) {
    res.render("not_found.ejs", {
        "notFound": "/assets/pageNotFound.png",
        "title_logo": "/assets/coach.png"
    })
});






app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});