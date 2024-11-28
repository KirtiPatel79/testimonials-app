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
