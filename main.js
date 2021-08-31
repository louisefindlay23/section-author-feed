// Node Modules
const axios = require("axios");
const url = "https://www.section.io/engineering-education/index.xml";
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const port = 4020;

// Initialise Express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.listen(port);
console.info("Listening on " + port);

// Index
app.get("/", function (req, res) {
    res.render("../pages/index");
});

// Section Feed
app.get("/feed/all", function (req, res) {
    // Get Section RSS Feed
    axios
        .get(url)
        .then((res) => res.data)
        .catch(function (err) {
            console.error(err);
        })
        .then(function (result) {
            // Parse XML
            parser.parseString(result, function (err, result) {
                if (!err) {
                    // Convert to JSON
                    let feed = JSON.stringify(result.rss.channel);
                    feed = JSON.parse(feed);
                    let posts = feed[0].item;
                    res.json(posts);
                    //console.info(posts);
                    posts = JSON.stringify(posts);
                    fs.writeFile("data/all.json", posts, function (err) {
                        if (err) return console.error(err);
                        console.info("Saved Section EngEd Feed");
                    });
                } else {
                    console.error(err);
                }
            });
        });
});

// Get Author Name and Redirect to Author Feed
app.post("/feed/author", function (req, res) {
    let author = req.body.author;
    if (!author) {
        res.redirect("/");
    }
    author = author.replace(/\s+/g, "-").toLowerCase();
    res.redirect("/feed/author/" + author);
});

// Get Feed and Generate Author Feed
app.get("/feed/author/:author", function (req, res) {
    res.send(req.params.author);
});

// 404 Route
app.use(function (req, res) {
    res.redirect("/");
});
