# Lab: Advanced Express
## Overview
In this lab we are going to further develop our Express skills by practicing three different techniques:

- Separating our routes in to different files to organize our server code
- Using Express middleware to do intermediate processing on incoming requests
- Using Express.static middleware to serve static files from a folder

## Directions
### Create a Basic Server
1. Create a new folder called `express_2_lab` to hold all the code for this server
2. `cd` into your folder and use `npm init` to initialize your project (you can use `npm init -y` to automatically init your project with default values)
3. Create a new JavaScript file called `server.js` in the root of your directory
4. In your `server.js` file, write the code to create a basic Express server, and also start it listening on port 8080
5. Use the `node` command to run your program in the terminal

### Organizing Our Routes into Modules
Here we will practice moving our routes into separate files to keep our server code modular and organized. To do this we will be using Express's modular router.

#### Your tasks:

6. Create a new folder named `routes`. This is where we will keep the files that hold our routes
7. In your routes directory, create a new file called `foodRoutes.js`. This is where we will declare our routes
8. In foodRoutes.js, use `express.Router()` to create a modular router. Use that router to declare two routes:
  - A GET route at /soups that returns an array of strings that are soup names
  - A GET route at /salads that returns an array of strings that are the names of salads
9. At the bottom of your foodRoutes.js file use `export default` to export your modular router
10. In your server.js file:
    - Import the modular router that you exported from foodRoutes.js
    - Use `app.use()` to mount your food router on to the path `/foods`

### Testing Your Routes
Using Postman, send GET requests to your two routes that you declared in the modular router

_What is the path that you have to send your requests to in order to access your `/soups` and `/salads` routes inside the modular route?_

### Using Express Middleware
In this section we are going to create a middleware that logs the time and target URL for all incoming requests.

#### Your tasks:

11. Visit the Express documentation on middleware to take a look at what parameters a middleware function takes (_Hint: They all take the same parameters_)
12. Create a middleware function in your server.js file that logs the path that the request is targeting, and also logs the time that the request was received
13. Use `app.use()` in your server.js file to register your middleware to run for all incoming requests (_Hint: Put it just under the `app = express()` line_)
14. Start your server and send some test requests. Look in the terminal to confirm that your logging middleware is running and printing logs to the terminal
15. **Bonus**: How could you change your code so that the logger only runs on one specific route?

### Serving Static Files
In this part of the lab, we will set up our Express server to serve static files.  

There are two broad steps to setting this up in Express:
- We create a folder and put all of our static files there
- We tell Express "if any request is asking for a static file, serve it out of this folder"

This can be accomplished by following these instructions:

16. In the root of your Express project, create a new folder called `public` to store all of our static files. These could be HTML pages, JPG images, or any other type of file.
17. Put some static files into your new `public` folder. For now, let's serve a web page by creating a basic `index.html` file in this folder.
18. In your Express code in your server.js file, just below the line that says `app = express()` add the following code:
```
app.use(express.static('public'))
```

### Test Your Static File Setup  
To confirm that your static files are being served correctly, start your server in the terminal with the `node` command, and visit `localhost:8080`. You should be able to see your HTML page displayed in the browser!  

As a bonus, try adding some more files to your `public` folder. How do you access these files in your web browser? Note that you could serve an entire website this way!
