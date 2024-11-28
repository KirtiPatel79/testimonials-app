const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require("dotenv")
env.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.mongouri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const Testimonial = require('./models/Testimonial');

app.post('/api/testimonials', async (req, res) => {
  const { name, review, rating } = req.body;
  const newTestimonial = new Testimonial({ name, review, rating });
  await newTestimonial.save();
  res.status(201).send(newTestimonial);
});

app.get('/api/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.status(200).send(testimonials);
});

app.get('/testimonials.js', (req, res) => {
  const script = `
    document.addEventListener('DOMContentLoaded', function() {
      fetch('http://localhost:5000/api/testimonials')
        .then(response => response.json())
        .then(testimonials => {
          const testimonialsDiv = document.getElementById('testimonials');
          testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.innerHTML = \`
              <h3>\${testimonial.name}</h3>
              <p>\${testimonial.review}</p>
              <p>Rating: \${testimonial.rating}</p>
            \`;
            testimonialsDiv.appendChild(testimonialElement);
          });
        });
    });
  `;
  res.setHeader('Content-Type', 'application/javascript');
  res.send(script);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
