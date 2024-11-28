import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css"

const App = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [scriptTag, setScriptTag] = useState('');
  const [iframeTag, setIframeTag] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const response = await axios.get('http://localhost:5000/api/testimonials');
    setTestimonials(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = { name, review, rating };
    await axios.post('http://localhost:5000/api/testimonials', newTestimonial);
    fetchTestimonials();
    setName('');
    setReview('');
    setRating(1);
  };

  const generateScriptTag = () => {
    const script = `<script src="http://localhost:5000/testimonials.js"></script><div id="testimonials"></div>`;
    setScriptTag(script);
    navigator.clipboard.writeText(script);
  };

  const generateIframeTag = () => {
    const iframe = `<iframe src="http://localhost:5000/testimonials-iframe" width="100%" height="400px" frameborder="0"></iframe>`;
    setIframeTag(iframe);
    navigator.clipboard.writeText(iframe);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push('⭐');
    }
    return stars.join(' ');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit a Testimonial</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <ul className="space-y-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
            <div className="text-sm">{testimonial.review}</div>
            <div className="text-lg font-medium mt-2">{testimonial.name}</div>
            <div className="text-sm mt-2">{renderStars(testimonial.rating)}</div>
          </li>
        ))}
      </ul>
      <button
        onClick={generateScriptTag}
        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Script Tag
      </button>
      {scriptTag && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md shadow-sm">
          <h2 className="text-lg font-medium">Generated Script Tag:</h2>
          <pre className="text-sm">{scriptTag}</pre>
        </div>
      )}
      <button
        onClick={generateIframeTag}
        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Iframe Tag
      </button>
      {iframeTag && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md shadow-sm">
          <h2 className="text-lg font-medium">Generated Iframe Tag:</h2>
          <pre className="text-sm">{iframeTag}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
