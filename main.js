// Node Modules

const axios = require("axios");
const url = "https://www.section.io/engineering-education/index.xml";
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

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
                const posts = feed[0].item;
                console.info(posts);
            } else {
                console.error(err);
            }
        });
    });
