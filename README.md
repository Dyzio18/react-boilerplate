# react - boilerplate
Simple react starter-kit with client & server side.
Technology stack:
* JavaScript (ES6+)
* React
* Webpack2
* ESlint
* Node.js  (with Express)

## Get started
You need install [node.js](https://nodejs.org/en/) with NPM (node package menager)
Copy this repository:  ``` git clone https://github.com/Dyzio18/react-boilerplate.git```
Then go to repo catalog: ``` cd react-boilerplate ```
Now you must install dependencies: ```npm i``` or ``` npm install```
It may take a few minutes...

Okay! Now you should have new catalog  ```node_modules``` with all dependencies. Let's go next!

## Node Scripts
In ```package.json``` you have list of command to run/build/lint your app.
I separate client and server side, to use it singly.

```
  "scripts": {
    "start": "node dist/server/server.bundle.js",
    "lint-client": "./node_modules/.bin/eslint ./src/client/**/*.js --fix --cache",
    "lint-server": "./node_modules/.bin/eslint ./src/server/**/*.js --fix --cache ",
    "build": "npm run build-client && npm run build-server",
    "build-client": "webpack --config webpack.client.config.js",
    "build-server": "webpack --config webpack.server.config.js",
    "build-server:watch": ".\\node_modules\\.bin\\webpack --config webpack.server.config.js --watch",
    "build-client:watch": ".\\node_modules\\.bin\\webpack --config webpack.client.config.js --watch"
  },
  ```

  ### Run App
  In console type the ``` npm run build ``` wait until Webpack finished work.
  Then run server ``` npm start ```.
  Open browser on ```localhost:3000```. And you should see:

![N|Solid](https://cldup.com/RM_CcuWlr3-3000x3000.png)

### Webpack - watch
To use webpack watch mod use:
Client: ```npm run build-client:watch```
Server: ```npm run build-server:watch```
_The best way is open different consoles to watch both side._

### Linter
Client: ```npm run lint-client```
Server: ```npm run lint-server```

## Note

It's simple starter pack to use in future projects. I have plan to build more boilerplates (e.g React+Redux) on other branches.
**TODO :**
[ ] Add Redux
[ ] Production mode: minify and uglify bundle files
---
##### Thanks for watching and feel free to use this in your project!

