![section-author-feed](https://socialify.git.ci/louisefindlay23/section-author-feed/image?description=1&descriptionEditable=Generating%20author%20feeds%20for%20Section%27s%20Engineering%20Education%20Blog.%20&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10540200%3Fs%3D200%26v%3D4&owner=1&theme=Dark)

<div align="center">
<img src="https://forthebadge.com/images/badges/built-by-developers.svg">
<img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
</div>

# 📚 Table of Contents

- [👁 Overview](#-overview)
- [🎯 Features](#-features)
- [⚙ Usage](#-usage)
- [👀 Demo](#-demo)
- [💡 Why I Built Section Author Feed](#-why-i-built-section-author-feed)
- [💻 Technologies](#-technologies)
  - [Server Technologies](#server-technologies)
  - [Action Technologies](#action-technologies)

# 👁 Overview

Looking to generate an author feed for your Section.io Engineering Education articles to showcase your amazing technical articles? Use the Node.js web app to create your unique author feed URL and embed in your GitHub Profile Readme using the GitHub Action.

# 🎯 Features

- **Web App** - Looking for an easy way to create your own author feed? Use the [web app](https://section-author-feeds.louisefindlay.com/) and enter your name to discover your URL and JSON file containing all the articles you've written.

- **API** - Desire programmability and prefer the command line? Just call the API: `https://section-author-feeds.louisefindlay.com/feed/author/[author-name]`. It will update every time an article has been published on the EngEd website.

- **GitHub Action** - Use the [GitHub Action](https://github.com/louisefindlay23/section-author-feed/blob/master/.github/workflows/fetchjson.yml) to embed the feed in your GitHub Readme. Updates hourly.

# ⚙ Usage

- Head to the [website](https://section-author-feeds.louisefindlay.com) and enter your name (used in your Section Author Profile) to generate your feed.

- You can use that unique URL, `https://section-author-feeds.louisefindlay.com/feed/author/[author-name]` wherever you want to retrieve the JSON feed.

- To embed in your GitHub Profile Readme, copy the [GitHub Action file](https://github.com/louisefindlay23/section-author-feed/blob/docs/.github/workflows/fetchjson.yml) to `.github/workflows/fetchjson.yml` and insert `<!--START_SECTION:data-section-->` and `<!--START_SECTION:data-section-->` to your Readme where you would like the data to be added. 

# 💡 Why I Built Section Author Feed

I built Section Author Feed so I could embed a list of articles I'd written for the EngEd blog on my GitHub Profile Readme to showcase my technical writing. Currently, the RSS feed available can't be filtered by author and I wanted the control of using JSON in being able to format and style the article list in my readme more flexibly. Thus Section Author Feed was born.

# 💻 Technologies

See below for the range of technologies used to build both the web app and GitHub Action.

## Server Technologies

- **[Node.js](https://nodejs.org/en/)** - Server-side JavaScript
- **[DigitalOcean](https://www.digitalocean.com/)** - Cloud hosting for the Node.js server
- **[Express](https://expressjs.com)** - Web Server for the Web App
- **[Axios](https://axios-http.com/)** - To fetch existing Section RSS Feed
- **[FS](https://nodejs.dev/learn/the-nodejs-fs-module)** - To save JSON file created on the server
- **[XML2JS](https://github.com/Leonidas-from-XIV/node-xml2js)** - To parse and convert the XML RSS feed to JSON for easier manipulation

## Action Technologies

Here is the list of GitHub Actions I adapted in order to create Fetch JSON to call the API and embed the following data in a Readme.

- **[Upload Artifact](https://github.com/actions/upload-artifact)** - Uploads the JSON File which has been fetched from the API as an artifact
- **[JSON2Table](https://github.com/EddieHubCommunity/gh-actions-html-table-generator)** - Reads the JSON file, parses it and then formats the data into a HTML table which can be embedded into a GitHub readme using tags.

# 👀 Demo

<div align="center">
  <a href="https://section-author-feeds.louisefindlay.com">
    <img src="https://user-images.githubusercontent.com/26024131/132042263-3abc447c-21d1-4362-b710-7c6cb5e8f528.png" alt="Section Author Feed Web App Screenshot">
  </a>
</div>

<!--START_SECTION:data-section-->
<table width="100%"><tr><td align="center"><p><a href="https://www.section.io/engineering-education/simple-guide-to-using-apis-part2/"><img src="https://www.section.io/engineering-education/simple-guide-to-using-apis-part2/hero.png" alt="Getting to Grips with APIs - Authentication"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/encrypting-gdrive-using-rclone/"><img src="https://www.section.io/engineering-education/encrypting-gdrive-using-rclone/hero.png" alt="How to Encrypt Google Drive using Rclone"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/working-with-databases-part2/"><img src="https://www.section.io/engineering-education/working-with-databases-part2/hero.jpg" alt="Develop Your First Data-Driven Node.js Web App"></a></p></td></tr><tr><td align="center"><p><a href="https://www.section.io/engineering-education/simple-guide-to-using-apis-nodejs/"><img src="https://www.section.io/engineering-education/simple-guide-to-using-apis-nodejs/hero.jpg" alt="Getting to Grips with APIs - Using Node.js and EJS"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/templating-your-static-site/"><img src="https://www.section.io/engineering-education/templating-your-static-site/hero.jpg" alt="Templating Your Static Site (Converting a Static Site to a Static Site Generator)"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/deploying-nodejs-web-app/"><img src="https://www.section.io/engineering-education/deploying-nodejs-web-app/hero.jpeg" alt="Deploying Your First Node.js Web App"></a></p></td></tr><tr><td align="center"><p><a href="https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/"><img src="https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/hero.png" alt="Converting A Static Site to A Dynamic Node.js Web App"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/creating-professional-email/"><img src="https://www.section.io/engineering-education/creating-professional-email/hero.png" alt="How to Create a Professional Email - Setting up GSuite"></a></p></td><td align="center"><p><a href="https://www.section.io/engineering-education/google-search-console-introduction/"><img src="https://www.section.io/engineering-education/google-search-console-introduction/hero.png" alt="Google Search Console - An Introduction"></a></p></td></tr><tr><td align="center"><p><a href="https://www.section.io/engineering-education/working-with-databases-part1/"><img src="https://www.section.io/engineering-education/working-with-databases-part1/hero.jpg" alt="Getting to Grips with Databases - Part 1"></a></p></td><td></td><td></td></tr></table>
<!--END_SECTION:data-section-->
