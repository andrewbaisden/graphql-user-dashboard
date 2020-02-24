# GraphQL User Dashboard App

## Prerequisite

You need to setup a MongoDB Database otherwise this App wont work and you will get a crash error in your Terminal window. Either create a local database or create/use an account on [MondoDB Atlas](https://www.mongodb.com/cloud/atlas) or [mlab](https://mlab.com/home)

Then add the database mongoLab URI to server/server.js. Make sure that you create a user and a password for the login.

Example code in server.js file below:

```javacript
// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://<dbuser>:<dbpassword>@ds11111.mlab.com:11111/databasename';
```

[mlab connect string](http://docs.mlab.com/connecting/#connect-string)

## Install and Setup

Run the command below in the root and client folder to install node

```javascript
npm install
```

Run the command below in the root folder, to start the app

```javascript
npm run dev
```

The App is running at [http://localhost:4000/#/](http://localhost:4000/#/)
