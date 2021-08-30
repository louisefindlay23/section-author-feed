// Node Modules
const axios = require("axios");
const url = "https://www.section.io/engineering-education/index.xml";
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

// Initialise Express
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(port);
console.info("Listening on " + port);

// Pages
app.get("/", function (req, res) {
    res.render("pages/index");
});

// Function getFeed

// Get Section RSS Feed
axios
    .get(url)
    .then((res) => res.data)
    .catch(function (err) {
        console.error(err);
    })
    .then(function (res) {
        // Parse XML
        parser.parseString(res, function (err, result) {
            if (!err) {
                // Convert to JSON
                let feed = JSON.stringify(result.rss.channel);
                feed = JSON.parse(feed);
                let posts = feed[0].item;
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
