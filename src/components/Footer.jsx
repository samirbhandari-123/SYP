
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#125561] text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Montesori Details */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Hamro Montesori</h3>
          <p className="mb-4">Want to know what we're up to? Sign up for the Hamro Montesori and join our tribe.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white px-4 py-2 rounded-md text-[#076475] w-full focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#0abfdf] px-5 py-2 rounded-md font-semibold hover:bg-[#385c62] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Schedule & Address */}
        <div>
          <h4 className="text-xl font-bold mb-3">Schedule</h4>
          <p className="mb-1"><strong>Sunday - Saturday</strong></p>
          <p className="mb-1"><strong>Start time:</strong> 10:00 am</p>
          <p className="mb-4"><strong>End time:</strong> 5:00 am</p>

          <h4 className="text-xl font-bold mb-2">Address</h4>
          <p>Sundarharaincha-5, Morang<br />56613</p>
        </div>

        {/* Follow Us & Contact */}
        <div>
          <h4 className="text-xl font-bold mb-3">Follow us</h4>
          <ul className="space-y-2 mb-5">
            <li><a href="#" className="hover:text-yellow-300 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Instagram</a></li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Contact</h4>
          <p className="mb-1">Tell No: <a href="Phone no: 9814363662" className="hover:text-yellow-300 transition">+40 756 353 956</a></p>
          <p>Email: <a href="montesori@gmail.com" className="hover:text-yellow-300 transition">montesori@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
