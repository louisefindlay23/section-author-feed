const axios = require("axios");
const url = "https://www.section.io/engineering-education/index.xml";
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

axios
    .get(url)
    .then((res) => res.data)
    .catch(function (err) {
        console.error(err);
    })
    .then(function (res) {
        res = new window.DOMParser().parseFromString(res, "text/xml");
        console.log(res);
        const titles = res.querySelectorAll("title").forEach((title) => {
            console.log(title);
        });
    });
