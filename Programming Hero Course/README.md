
# Node & MongoDB Config #
Create a simple server using Node & MongoDB. Doc MongoDB: https://docs.mongodb.com/

- Initialize node:
```
npm init
```
- Install Express:
```
npm install express --save
```
- Install nodemon:
```
npm install -g nodemon
```
- Set "start" point in packeg.json:
```
 Inside script write: "start": "nodemon index"
```
- Install cors:
```
npm install cors
```
- Install body purser:
```
npm install body-parser
```
- Install mongodb:
```
npm isntall mongodb --save
```
- Install dotenv node:
```
npm isntall dotenv
```

# Add Stripe Payment #
Way to add stripe on react project. Stripe official doc: https://stripe.com/docs/stripe-js/react, Stripe github: https://github.com/stripe/react-stripe-js

- Initialize stripe js:
```
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
# Deploy DB to Heroku server #
Getting start with heroku with nodejs. Install heroku cli on you local mechine. Follow the doc: https://devcenter.heroku.com/articles/getting-started-with-nodejs

- Make sure your have heroku, node, npm & git already installed:
```
heroku --version, node --version, npm --version, git --version
```
- Heroku login:
```
heroku login
```
- Heroku create:
```
heroku create "optional_name"
```
- Deploy code to heroku:
```
git push heroku master
```
- Set env variable inside app configuration:
```
get the variables from .env file
```

- Resolve application error:
```
npm install nodemon --save, git add ., git commit -m "Nodemon added", git push heroku master
```
