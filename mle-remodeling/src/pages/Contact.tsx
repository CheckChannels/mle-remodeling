import { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const contactSection = useIntersectionObserver();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly to schedule your free consultation.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div>
      <section className="py-20 bg-white" ref={contactSection.ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${contactSection.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h1 className={`text-4xl sm:text-5xl font-bold text-black mb-8 ${contactSection.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>Get in Touch</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${contactSection.isVisible ? 'animate-fade-in-left stagger-2' : 'opacity-0'}`}>
              <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a href="tel:9362075767" className="flex items-center text-2xl font-semibold text-[#F07B20] hover:underline transition-all duration-300 hover:translate-x-2">
                  <Phone className="w-6 h-6 mr-3" />
                  (936) 207-5767
                </a>
                <a href="mailto:info@mlegranite.com" className="flex items-center text-lg font-medium text-[#F07B20] hover:underline transition-all duration-300 hover:translate-x-2">
                  <Mail className="w-6 h-6 mr-3" />
                  info@mlegranite.com
                </a>
                <div className="flex items-start text-black">
                  <MapPin className="w-6 h-6 mr-3 mt-1 text-[#F07B20] flex-shrink-0" />
                  <div>
                    <p className="font-medium">26326 N Fwy Service Rd</p>
                    <p>Oak Ridge North, TX 77386</p>
                    <p className="text-sm text-gray-500 mt-1">Visit our showroom — call ahead to schedule</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#F07B20] transition-all duration-300 hover:shadow-md">
                <h3 className="font-semibold text-black mb-2">When requesting a quote, it helps to know:</h3>
                <ul className="space-y-2 text-black">
                  <li>• Kitchen, bathroom, or other space</li>
                  <li>• Approximate scope (full remodel vs. countertops only, etc.)</li>
                  <li>• Your location / city</li>
                  <li>• Best time to reach you</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#F07B20] text-white">
                <p className="font-semibold">🇺🇸 Veteran Owned — Military & First Responder Discounts Available</p>
              </div>
            </div>
            <div className={`${contactSection.isVisible ? 'animate-fade-in-right stagger-3' : 'opacity-0'}`}>
              <h2 className="text-2xl font-semibold text-black mb-6">Request a Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black focus:outline-none focus:border-[#F07B20] transition-all duration-300 focus:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black focus:outline-none focus:border-[#F07B20] transition-all duration-300 focus:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 text-black focus:outline-none focus:border-[#F07B20] transition-all duration-300 focus:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2">Tell us about your project</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 text-black focus:outline-none focus:border-[#F07B20] transition-all duration-300 focus:shadow-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F07B20] text-white px-8 py-4 text-lg font-medium hover:bg-[#d96a10] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
