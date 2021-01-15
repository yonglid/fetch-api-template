# Getting started
1. Clone the repository using Git client or commandline ```git clone ...```
2. Navigate into repository folder ```cd fetch_api_template```
3. run ```npm install``` in directory where package.json is (in our case, just in the root folder aka where you just navigated into)
4. Open package.json and you'll see a script command ```node fetch_api.js``` connected to easy script: ```npm fetch```. You can change the script call and the file path (i.e. if fetch_api.js is in a folder called 'src', then the command is: ```node src/fetch_api.js```)
5. If you haven't already, run ```npm run fetch```, you should get a json back. 

# Editing fetch_api.js
1. There is a `url` variable that you can replace the endpoint with your endpoint choice
