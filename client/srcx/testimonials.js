import axios from 'axios';

const loadTestimonials = async () => {
  const response = await axios.get('/api/testimonials');
  return response.data;
};

const displayTestimonials = (testimonials) => {
  const testimonialsContainer = document.getElementById('testimonials');
  testimonialsContainer.innerHTML = '';

  testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    const nameElement = document.createElement('h3');
    nameElement.textContent = testimonial.name;
    testimonialElement.appendChild(nameElement);

    const reviewElement = document.createElement('p');
    reviewElement.textContent = testimonial.review;
    testimonialElement.appendChild(reviewElement);

    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Rating: ${testimonial.rating}`;
    testimonialElement.appendChild(ratingElement);

    testimonialsContainer.appendChild(testimonialElement);
  });
};

const initTestimonials = async () => {
  const testimonials = await loadTestimonials();
  displayTestimonials(testimonials);
};

document.addEventListener('DOMContentLoaded', initTestimonials);
