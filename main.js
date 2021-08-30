const axios = require("axios");
const url = "https://www.section.io/engineering-education/index.xml";

axios
    .get(url)
    .then(function (response) {
        response = response.text();
        console.info(response);
    })
    .catch(function (err) {
        console.error(err);
    })
    .then(function () {
        console.log("Works");
    });
