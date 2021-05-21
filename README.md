# Technical Challenge

1. Build a serverless full stack application using the frameworks with which you feel best.
2. MVP (Minimum Viable Product)
   - Run in AWS
   - Add User Registration Enable users for registration, authentication, and authorization for weather-app visitors to like and adopt, enabled through AWS API Gateway and its integration with Amazon Cognito.
   - Application must capture client location
   - Using weather API once the client has been registered or login successfully, it shows the weather based its location.
   
   - Application must store in a cloud database Outsource all weather-app data and preserve it with a managed NoSQL database provided by Amazon DynamoDB.
   - Unique User id
   - User PII form (First_Name/Last_Name/email)
   - Location
   - Timestamp
   Application must be responsive
   
   You will create and implement changes to this application completely programmatically. You will use the AWS command line interface to run commands that create the necessary infrastructure components, including a fully managed CI / CD stack through the use of AWS CodeCommit, CodeBuild, and CodePipeline. Finally, you will complete all the necessary development tasks within your own browser by using the cloud-based IDE, AWS Cloud9.

## Deploy with the AWS Amplify Console

The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more](https://console.amplify.aws). Deploy this app to your AWS account with a single click:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/create-react-app-auth-amplify)

The Amplify Console will fork this repo in your GitHub account, and then build and deploy your backend and frontend in a single workflow. Your app will be available at `https://master.appid.amplifyapp.com`.

## Run locally 
1. Clone the repo 

```
git clone https://github.com/FlippahOrtega/weather-app.git

 cd weather-app && npm i
```

2. Import the backend environment deployed by the Amplify Console to your repo (the `amplify/team-provider.json` file contains information on all backend environments in your AWS account). The GIF below shows how you to copy the `amplify env import` command from the Amplify Console.

<img src="https://github.com/aws-samples/create-react-app-auth-amplify/blob/master/src/images/import-backend.gif" width="800"/>

3. Paste this command into your terminal at the root of your repo. You should see the `amplify/team-provider.json` updated with a backend named `amplify`.

```
amplify pull
```

![img](src/images/amplify-pull.mov)

4. Run locally

```
npm start
```

Checkout Nader Dabit's [Complete Guide to User Authentication](https://dev.to/dabit3/the-complete-guide-to-user-authentication-with-the-amplify-framework-2inh).
