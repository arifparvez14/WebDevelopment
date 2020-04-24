
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

# Add Stripe Payment #
Way to add stripe on react project. Stripe official doc: https://stripe.com/docs/stripe-js/react, Stripe github: https://github.com/stripe/react-stripe-js

- Initialize stripe js:
```
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
# Deploy app using firebase #
Checkout firebase documentation (https://firebase.google.com/docs/web/setup?gclid=Cj0KCQjwyur0BRDcARIsAEt86IAMpgs0funm3yteEHZJ10oDKj6cVCDfmPXM6Cz2cpex7p3K7nM0EM0aAvKGEALw_wcB) 

- Install Firebase CLI:
```
npm install -g firebase-tools
```
- Sign in to Gppgle:
```
firebase login
```
- Initialize project:
```
firebase init
```
- Follow thos instructions to initialize & complete setup:
```
Select Hosting, use your existing project, * use build as public directory, y for singleview app, n for index.htmloverride
```
- Build after every changes:
```
npm run build
```
- Deploy to firebase:
```
firebase deploy
```
# Deploy react app using netlify #
Follow thos steps to deploy to your project using netlify. Check this out: https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/

- Create a build folder:
```
npm run build
```
- Drag and drop build folder to deploy in netlify or:
```
npm install netlify-cli -g
```
- Drag and drop build folder to deploy in netlify or:
```
npm install netlify-cli -g
```
- Show your build directory as:
```
./build
```

