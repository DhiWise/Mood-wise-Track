# Mood Wise Tracks
When listing to music people often face confusion about what song should they listen to. Mood-Wise Tracks allows you to help discover the perfect track to play at the moment. With Mood-Wise Tracks, you can get the tracks by choosing the emotion you are in and letting Spotify suggest the perfect track to fit your mood. Whether you are feeling adventurous or relaxed, Mood-Wise Tracks has the perfect track for you.

Mood Wise tracks also show user’s top 5 songs from the last six to one month, allowing them to play their most frequently played tune

## Table of Contents
- [Features](#features)
- [Design System](#design-system)
- [Version of Technologies](#version-of-technologies)
- [Setup](#setup)
- [Running the storybook](#running-the-storybook)
- [Folder Structure](#folder-structure)
- [Libraries used](#libraries-used-in-this-repository)
- [License](#license)
- [Community](#community)

# Features
 - Track by emoji mood/emotions
 - Top 5 song of user from six to one month.
 <img width="1216" alt="Frame 4" src="https://user-images.githubusercontent.com/53862415/187128248-fdc6e16d-e8fe-43f8-af31-311377dbed2c.png">

 
# Design System
All the design has been generated with [tailwindcss](https://tailwindcss.com/).
Find all the theme related configuration inside tailwind.config.js

<div>
  <h1 align="center">Getting Started with React Figma Web 🚀 </h1>
  <strong>
    Generated with ❤️ from Dhiwise
  </strong>
  <p>
    This is the documentation of React Figma Web.
    It holds all the info you need to get started with
    and make changes to your App
  </p>
</div>


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is integrated with a [Tailwind CSS](https://tailwindcss.com/) setup, a new utility-first css framework, in an CRA environment. You can read more over on [Getting Started with Tailwind](https://tailwindcss.com/docs/installation).
 

## Version of Technologies
- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater



## Setup
Setup you project by running the following commands.
### Clone the repo
```sh
$ git clone https://github.com/DhiWise/mood-wise-tracks

$ cd Mood-wise-tracks/
``` 
### Instruction to run the application in your machine 
- Add your refresh token and base64(clientId:secretId) in token api.

 ```
    npm install
    npm start
```      
# Running the storybook
We have detected common components and have generated possible variants of it. To check the documentation of generated common components by integrating the storybook, Please follow the below steps.
## Install and Initializes
     npx storybook init
## Run the Storybook
      npm run storybook

## Folder Structure

After creation, your project should look like this:
```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts ---------- Project fonts
│   │   └── images --------- All Project Images
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.js
│   ├── pages -------------- All route pages
│   ├── Routes.js ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

 
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries used in this repository
1. @tailwindcss/forms - `0.4.0`
2. @testing-library/jest-dom - `^5.15.1`
3. @testing-library/react - `^11.2.7`
4. @testing-library/user-event - `^12.8.3`
5. react - `17.0.2`
6. react-datepicker - `^4.5.0`
7. react-dom - `17.0.2`
8. react-router-dom - `6.0.2`
9. react-router-hash-link - `^2.4.3`
10. react-scripts - `5.0.0`
11. web-vitals - `^2.1.0`
12. axios - `^0.27.2`
13. react-toastify - `^9.0.1`
14. autoprefixer - `10.4.2`
15. postcss - `8.4.6`
16. tailwindcss - `3.0.18`

## License
MIT License
Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60" alt="DhiWise Twitter"></a>

<a href="https://www.youtube.com/c/DhiWise"><img src="https://cdn.vox-cdn.com/thumbor/0kpe316UpZWk53iw3bOLoJfF6hI=/0x0:1680x1050/1400x1400/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif" width="60" alt="DhiWise YouTube"></a>

<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60" alt="DhiWise Discord"></a>

<a href="https://docs.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60" alt="DhiWise Documentation"></a>
