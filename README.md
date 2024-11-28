# MERN Testimonials App

This is a MERN stack application for collecting and displaying testimonials. The app consists of a form page where users can submit their testimonials, which are then stored in a MongoDB database. The testimonials can be displayed on a client's website using a simple HTML script tag.

## Features

- Submit testimonials with name, review, and rating
- Store testimonials in a MongoDB database
- Display testimonials on a client's website using a script tag
- No need for the client to style or code anything

## Technologies Used

- MongoDB
- Express
- React
- Node.js

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install server dependencies:
   ```
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   cd ..
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Running the Server and Client

- To start the server only:
  ```
  npm run server
  ```

- To start the client only:
  ```
  npm run client
  ```

- To start both the server and client concurrently:
  ```
  npm run dev
  ```

## Adding the Script Tag to Client's Website

To display the testimonials on your website, add the following script tag to your HTML file:

```html
<script src="http://your-server-url/testimonials.js"></script>
<div id="testimonials"></div>
```

Replace `http://your-server-url` with the actual URL of your server. The testimonials will be automatically fetched and displayed in the `#testimonials` div.

## New Feature: Generating the Script Tag

With the new feature, you can now generate the script tag directly from the client application. Follow these steps:

1. Open the client application in your browser.
2. Click the "Generate Script Tag" button.
3. The script tag will be generated and copied to your clipboard.
4. Paste the script tag into your HTML file where you want the testimonials to appear.

The generated script tag will look like this:

```html
<script src="http://localhost:5000/testimonials.js"></script>
<div id="testimonials"></div>
```

Replace `http://localhost:5000` with the actual URL of your server if it's different.

## New Feature: Generating the Iframe Tag

With the new feature, you can now generate the iframe tag directly from the client application. Follow these steps:

1. Open the client application in your browser.
2. Click the "Generate Iframe Tag" button.
3. The iframe tag will be generated and copied to your clipboard.
4. Paste the iframe tag into your HTML file where you want the testimonials to appear.

The generated iframe tag will look like this:

```html
<iframe src="http://localhost:5000/testimonials-iframe" width="100%" height="400px" frameborder="0"></iframe>
```

Replace `http://localhost:5000` with the actual URL of your server if it's different.
