import React from 'react';
import toast from 'react-hot-toast';
const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent")
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div className="container mx-auto p-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          We love hearing from our customers! If you have any questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <p className="text-lg mb-8">
          Our team is dedicated to providing you with the best service possible. We will get back to you as soon as we can.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Contact Information</h2>
        <ul className="text-lg space-y-4">
          <li><strong>Email</strong>: ecommerse@gmail.com</li>
          <li><strong>Phone</strong>: +91 1234567890</li>
          <li><strong>Address</strong>: Near Nandanwan Police station, Nandanwan, Nagpur, pin-444406</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
        <p className="text-lg mb-4">
          Follow us on social media to stay updated on our latest products, promotions, and news:
        </p>
        <ul className="text-lg flex space-x-4">
          <li><a href="#" className="text-blue-500 hover:underline">Facebook</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Instagram</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Twitter</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
