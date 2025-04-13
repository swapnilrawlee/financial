import React from "react";
import CardList from "./CardList";

const App = () => {
  
  return (
    <div className="w-screen h-screen overflow-x-hidden">
<header className="bg-gray-900 text-white py-5 shadow-md">
  <div className="container mx-auto px-6 flex items-center justify-between">
    {/* Logo / Title */}
    <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
      <span className="text-yellow-400">⚡</span>
      <h1>Kwiss</h1>
    </div>

    {/* Navigation */}
    <nav>
      <ul className="flex gap-6 text-lg font-medium">
        <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">Blog</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">About</li>
      </ul>
    </nav>

    {/* CTA Button */}
    <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
      Join Now
    </button>
  </div>
</header>


      <section className="relative">
        <div className="relative w-screen h-[80vh]">
          <img
            src="https://images.pexels.com/photos/5716008/pexels-photo-5716008.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl capitalize font-bold mb-6">
              financial focus and learning
            </h1>
            <h2 className="text-white text-lg md:text-xl max-w-2xl mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam facere tenetur, beatae nihil deserunt non recusandae
              enim asperiores voluptatum veritatis minus.
            </h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                Learn More
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-6 max-w-6xl mx-auto -mt-24 shadow-lg relative z-10">
  <CardList />
</section>
<section className="mt-32 md:ml-[10%] px-6 md:px-16  flex items-center justify-evenly ">
  <div className="text-center mb-10 ">
    <h2 className="text-4xl font-bold mb-4">About Our Company</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      At Kwiss, we are dedicated to helping individuals understand and grow their financial knowledge. With engaging content and expert-backed advice, we bring financial clarity to your life.
    </p>
  </div>

  <div className="relative w-full max-w-xl mx-auto group mt-16 h-[300px]">
    {/* Back Images */}
    <img
      src="https://images.pexels.com/photos/5922203/pexels-photo-5922203.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="tilted 1"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl transform -rotate-6 scale-95 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-500 z-0"
    />
    <img
      src="https://images.pexels.com/photos/5922203/pexels-photo-5922203.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="tilted 2"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl transform rotate-6 scale-95 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-500 z-10"
    />
    
    {/* Main Image */}
    <img
      src="https://images.pexels.com/photos/5922203/pexels-photo-5922203.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="main"
      className="relative w-full h-full object-cover rounded-xl shadow-2xl z-20 transition-all duration-500"
    />
  </div>
</section>
<section className="py-20 bg-gray-100 mt-22">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      We offer a variety of services to help you manage your finances. Explore our expertise in investment, tax planning, budgeting, and more.
    </p>
  </div>

  {/* Service Cards */}
  <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-white p-8 rounded-lg shadow-lg w-72 hover:shadow-2xl transition-all duration-300">
      <div className="text-4xl mb-4 text-yellow-400">💰</div>
      <h3 className="text-xl font-semibold mb-3">Investment Advice</h3>
      <p className="text-gray-600">
        Grow your wealth with expert advice on investments and portfolio management.
      </p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>

    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg w-72 hover:shadow-2xl transition-all duration-300">
      <div className="text-4xl mb-4 text-green-400">🧾</div>
      <h3 className="text-xl font-semibold mb-3">Tax Planning</h3>
      <p className="text-gray-600">
        Maximize your tax savings with tailored tax planning strategies.
      </p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>

    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg w-72 hover:shadow-2xl transition-all duration-300">
      <div className="text-4xl mb-4 text-blue-400">📊</div>
      <h3 className="text-xl font-semibold mb-3">Budgeting</h3>
      <p className="text-gray-600">
        Take control of your finances with effective budgeting strategies.
      </p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>

    </div>

    {/* Optional: Add another card */}
    <div className="bg-white p-8 rounded-lg shadow-lg w-72 hover:shadow-2xl transition-all duration-300">
      <div className="text-4xl mb-4 text-red-400">🔒</div>
      <h3 className="text-xl font-semibold mb-3">Financial Security</h3>
      <p className="text-gray-600">
        Protect your future with solid financial planning and security.
      </p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>

    </div>
  </div>
</section>
<section className="py-12 bg-gradient-to-r from-blue-400 to-teal-500">
  <div className="text-center mb-6">
    <h2 className="text-3xl font-semibold text-white mb-2">Refer and Earn</h2>
    <p className="text-lg text-white max-w-lg mx-auto">
      Invite friends, earn rewards for every successful sign-up and purchase. Start referring today!
    </p>
  </div>

  {/* Single Call to Action Box */}
  <div className="text-center w-full bg-white rounded-lg p-6 shadow-lg mx-auto max-w-sm">
    <div className="text-4xl mb-4 text-green-500">
      <i className="fas fa-gift"></i> {/* Font Awesome Gift Icon */}
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Share your referral link with friends. When they sign up and buy, you earn a reward!
    </p>
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300">
      Refer Now
    </button>
  </div>
</section>
<section className="py-20 bg-gray-100">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Latest Blog Posts</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Get insights and updates from our team of experts. Check out the latest posts from our owners.
    </p>
  </div>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
    {/* Owner Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/4673860/pexels-photo-4673860.jpeg" 
        alt="Owner" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h3>
        <h4 className="text-xl text-gray-600 mb-4">The Future of Finance</h4>
        <p className="text-gray-500 mb-6">
          A deep dive into the future of financial systems and how technology is reshaping the industry.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition duration-300">
          Read More
        </button>
      </div>
    </div>

    {/* Owner Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg" 
        alt="Owner" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
        <h4 className="text-xl text-gray-600 mb-4">Maximizing Investments</h4>
        <p className="text-gray-500 mb-6">
          Explore effective investment strategies that yield higher returns in today’s market.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition duration-300">
          Read More
        </button>
      </div>
    </div>

    {/* Owner Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/6691673/pexels-photo-6691673.jpeg" 
        alt="Owner" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Michael Lee</h3>
        <h4 className="text-xl text-gray-600 mb-4">Tax Planning Tips</h4>
        <p className="text-gray-500 mb-6">
          Learn how to plan for taxes more effectively to save and invest wisely for the future.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Have Any Questions?</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      We are here to help! Fill out the form below to send us your inquiry, and we’ll get back to you soon.
    </p>
  </div>

  {/* Inquiry Form */}
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Your Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Enter your message"
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-400 transition duration-300"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  </div>
</section>
<footer className="bg-gray-800 text-white py-12">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Column 1: Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul>
          <li><a href="/" className="hover:text-blue-400 transition duration-300">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400 transition duration-300">About</a></li>
          <li><a href="/blog" className="hover:text-blue-400 transition duration-300">Blog</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Column 2: Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p className="mb-2">Email: info@example.com</p>
        <p className="mb-2">Phone: +1 (234) 567-890</p>
        <p className="mb-2">Address: 123 Main Street, City, Country</p>
      </div>

      {/* Column 3: Social Media */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex gap-6">
          <a href="https://facebook.com" className="text-white hover:text-blue-500 transition duration-300">
            <i className="fab fa-facebook-square text-3xl"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-twitter-square text-3xl"></i>
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-700 transition duration-300">
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500 transition duration-300">
            <i className="fab fa-instagram text-3xl"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-400">© 2025 YourCompany. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
