const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

router.post('/', async (req, res) => {
  const { name, review, rating } = req.body;
  const newTestimonial = new Testimonial({ name, review, rating });
  await newTestimonial.save();
  res.status(201).send(newTestimonial);
});

router.get('/', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.status(200).send(testimonials);
});

module.exports = router;
