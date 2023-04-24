# Repo Goal 
### The goal of this repo is to keep all of the code for our project. 

# Tech Stack 
### React, nginx, DynamoDB, ec2

# Deploy Instructions
### The appliction should be built on your desktop, and your desktop needs to have nodejs installed, perferably the most up to date version
1. `add your public key off of your desktop into .ssh/authorized keys` ***to do this you just need to copy it from your desktop and paste into the authorized keys file. This will allow you to move back and forth with out needing to referecne the servers public key***
1. On your desktop in the repo file do the following
1. `cd react_app` 
1. `npm run build` 
1. ` scp -r ./build/* ubuntu@ec2-3-145-218-234.us-east-2.compute.amazonaws.com:~/` ***This copys the files to the server at the home directory***
1. `ssh into the server, and move all the files into /var/www/html/`
1. The files should now be able to be found at the public ip for our instance `hhttp://3.145.218.234` ***make sure you are using http not https (I need to fix this at some point)***

# Instructions for buildiing locally 
***These instructions assume you have pulled the repo down to your local machine***
1. `cd (path to the repo on your machine)\react_app`
1. `npm start`
1. ***Open a new termainal*** 
1. `cd (path to the repo on your machine)\backend`
1. `node index.js`
