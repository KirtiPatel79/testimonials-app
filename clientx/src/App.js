import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const response = await axios.get('/api/testimonials');
    setTestimonials(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = { name, review, rating };
    await axios.post('/api/testimonials', newTestimonial);
    fetchTestimonials();
    setName('');
    setReview('');
    setRating(1);
  };

  return (
    <div>
      <h1>Submit a Testimonial</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>Testimonials</h1>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial._id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <p>Rating: {testimonial.rating}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
