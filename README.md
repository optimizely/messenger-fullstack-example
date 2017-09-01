# Facebook Messenger Full Stack Demo

---

A Facebook messenger bot that uses Full Stack to test responses and interactions with users.

# Local Environment Setup

---
Accout Setup
1. Create an Optimizely Full Stack project
2. Access a Facebook Developer account, and create a new app for Messenger [](https://developers.facebook.com/docs/messenger-platform/guides/quick-start)
3. Create a Verify Token for authentication with Facebook (select messages & messaging_postbacks for your Subscription fields)

Developer Setup
1. Clone the repo
2. Run ```npm install```
3. Create a .env file ```touch .env```
4. Enter your Optimizely Full Stack project in the .env file as ```PROJECT_ID={your project id}```
5. Enter your Facebook API token in the .env file as ```FACEBOOK_TOKEN={your token}```
6. Enter your verify token in the .env file as ```VERIFY_TOKEN={your token}```
6. To start the app after setup, ```npm start```

Note: You will also need to have a publicly accessible url to receive POSTs from Facebook for authentication and to receive incoming messages. One recommended approach to do this locally is to use [Ngrok](https://www.npmjs.com/package/ngrok) or deploy the sample app to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
