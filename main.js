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
                const feed = result.rss.channel;
                // Convert to JSON
                JSON.stringify(feed);
                console.info(feed[0].item);
            } else {
                console.error(err);
            }
        });
    });
