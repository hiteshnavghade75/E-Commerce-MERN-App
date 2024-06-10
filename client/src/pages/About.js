import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to <strong>E-Commerce Website</strong>
        </p>
        <p className="text-lg">
          At E-Commerce, we are passionate about bringing you the fresh vegetables and healthy and tasty food items. Our mission is to provide high-quality vegetables and food items at competitive prices, ensuring a seamless and enjoyable food experience for all our customers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg">
          Founded in 2020, E-Commerce started as a small home-based business with a vision to revolutionize the way people search for fresh vegetables and food. Over the years, we have grown into a trusted online store, serving thousands of satisfied customers worldwide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li><strong>Quality</strong>: We are committed to offering products that meet the highest standards of quality and durability.</li>
          <li><strong>Customer Satisfaction</strong>: Your satisfaction is our top priority. We strive to provide exceptional customer service and support.</li>
          <li><strong>Innovation</strong>: We continuously update our product range to bring you the latest and most innovative items on the market.</li>
          <li><strong>Sustainability</strong>: We are dedicated to promoting sustainable practices and offering eco-friendly products whenever possible.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg">
          <li><strong>Wide Range of Food Products</strong>: Discover an extensive selection of vegetables and food items to suit all your needs.</li>
          <li><strong>Secure Shopping</strong>: Shop with confidence knowing that your personal and payment information is protected.</li>
          <li><strong>Fast Shipping</strong>: Enjoy quick and reliable delivery services to get your purchases to you as soon as possible.</li>
          <li><strong>Easy Returns</strong>: Hassle-free returns policy to ensure you are completely satisfied with your purchase.</li>
          <li><strong>Customer Support</strong>: Our friendly customer support team is always ready to assist you with any questions or concerns.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Jane Doe – Founder & CEO</h3>
            <p className="text-lg">With a passion for E-Commerse, Jane leads our team with a focus on innovation and customer satisfaction.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">John Smith – Head of Marketing</h3>
            <p className="text-lg">John brings over 10 years of experience in marketing and is dedicated to spreading the word about our amazing products.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="text-lg italic">
          "Excellent products and top-notch customer service! I love shopping at E-Commerce because I always find what I need." – Sarah L.
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          We love hearing from our customers! If you have any questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <ul className="text-lg">
          <li><strong>Email</strong>: johndoe@gmail.com</li>
          <li><strong>Phone</strong>: +91 1234567890</li>
          <li><strong>Address</strong>: Near Nandanwan Police station, Nandanwan, Nagpur, pin-444406</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
        <p className="text-lg">
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

export default About;
