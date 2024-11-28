const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://KirtiPatel21:Kp202021@cluster0.unom2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
