# SamCart Cars API 
This is my version of the SamCart Cars API Coding Challenge. I have built a simple webpage to display some of the data from the requests, and have outlined how to get started below. 

## Getting Started

### Viewing the Full Application
1. Clone the repo to your local machine, and cd into the folder
2. Type `npm install` in your terminal to install node packages
3. Type `npm run start` to spin up the first server file
4. Open a second terminal window/tab, cd back into the cloned repo, and run `node server2.js` to start the second server
5. If node did not load a webpage for you at http://localhost:3000 on step 3, open a browser and enter the URL
6. You should see a simple webpage that allows you to click to see all cars (displays the dummy data provided in server2), or search for a specific car if you know the Id
7. To run the test suite, stop your initial server, and type `npm run test` in your terminal

### Checking the API Requests Only
To simply check if the API requests for `/cars` and `/cars/:id` are working, follow steps 1-4 from above, and type either http://localhost:3000/api/cars or http://localhost:3000/api/cars/{id} in your URL bar, or in a popular API client like Postman!