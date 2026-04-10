import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

export default function Home() {
  const whyChooseUs = useIntersectionObserver();
  const statsSection = useIntersectionObserver();
  const projectsSection = useIntersectionObserver();
  const testimonialsSection = useIntersectionObserver();

  const projectsCount = useCountUp(200, 2000, statsSection.isVisible);
  const clientsCount = useCountUp(180, 2000, statsSection.isVisible);
  const experienceCount = useCountUp(10, 2000, statsSection.isVisible);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Beautiful kitchen remodel"
            className="w-full h-full object-cover animate-[scaleIn_1.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-55"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Kitchen & Bath Remodeling
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 font-medium animate-fade-in-up stagger-2">
            Commercial and Residential remodeling, granite countertops, and home transformations in the Houston area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <a href="tel:9362075767" className="bg-[#F07B20] text-white px-8 py-4 text-lg font-medium hover:bg-[#d96a10] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block">
              Call (936) 207-5767
            </a>
            <Link to="/contact" className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Free In-Home Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Veteran badge strip */}
      <section className="bg-[#F07B20] py-3">
        <p className="text-center text-white font-medium text-sm tracking-wider">
          🇺🇸 VETERAN OWNED (USMC) &nbsp;·&nbsp; FULLY INSURED &nbsp;·&nbsp; MILITARY & FIRST RESPONDER DISCOUNTS
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" ref={whyChooseUs.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${whyChooseUs.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-black mb-12 ${whyChooseUs.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Why Choose MLE Remodeling</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`text-center ${whyChooseUs.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
              <CheckCircle className="w-12 h-12 text-[#F07B20] mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-black mb-3">Quality Craftsmanship</h3>
              <p className="text-black">Skilled tradespeople who take pride in every tile, countertop, and cabinet installed</p>
            </div>
            <div className={`text-center ${whyChooseUs.isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
              <CheckCircle className="w-12 h-12 text-[#F07B20] mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-black mb-3">Showroom Experience</h3>
              <p className="text-black">Visit our showroom to see materials and finishes in person before you commit</p>
            </div>
            <div className={`text-center ${whyChooseUs.isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
              <CheckCircle className="w-12 h-12 text-[#F07B20] mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-black mb-3">Free Consultations</h3>
              <p className="text-black">We come to you — free in-home consultations to assess your space and your vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50" ref={statsSection.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${statsSection.isVisible ? 'animate-scale-in stagger-1' : 'opacity-0'}`}>
              <div className="text-5xl sm:text-6xl font-bold text-black mb-2">{projectsCount}+</div>
              <div className="text-lg">
                <span className="text-black font-medium">PROJECTS </span>
                <span className="text-[#F07B20] font-medium">COMPLETED</span>
              </div>
            </div>
            <div className={`text-center p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${statsSection.isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
              <div className="text-5xl sm:text-6xl font-bold text-black mb-2">{clientsCount}+</div>
              <div className="text-lg">
                <span className="text-black font-medium">HAPPY </span>
                <span className="text-[#F07B20] font-medium">CLIENTS</span>
              </div>
            </div>
            <div className={`text-center p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${statsSection.isVisible ? 'animate-scale-in stagger-3' : 'opacity-0'}`}>
              <div className="text-5xl sm:text-6xl font-bold text-black mb-2">{experienceCount}+</div>
              <div className="text-lg">
                <span className="text-black font-medium">YEARS </span>
                <span className="text-[#F07B20] font-medium">EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white" ref={projectsSection.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl sm:text-5xl font-bold text-black text-center mb-16 ${projectsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`group ${projectsSection.isVisible ? 'animate-fade-in-left stagger-1' : 'opacity-0'}`}>
              <div className="overflow-hidden mb-6 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern kitchen remodel with granite countertops"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-8">
                <div className="text-[#F07B20] font-semibold text-sm tracking-wider mb-3">KITCHEN REMODEL</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Full Kitchen Transformation — The Woodlands</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete kitchen overhaul including custom cabinetry, granite countertops, backsplash tile, and new fixtures. From concept to completion, delivered on time and on budget.
                </p>
              </div>
            </div>
            <div className={`group ${projectsSection.isVisible ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
              <div className="overflow-hidden mb-6 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury bathroom remodel"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-8">
                <div className="text-[#F07B20] font-semibold text-sm tracking-wider mb-3">BATHROOM REMODEL</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Master Bath Renovation — Conroe</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Full master bathroom remodel with walk-in tile shower, new vanity, and premium fixtures. Transformed an outdated bathroom into a spa-like retreat.
                </p>
              </div>
            </div>
          </div>
          <div className={`text-center ${projectsSection.isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            <Link to="/our-work" className="inline-block bg-[#F07B20] text-white px-10 py-4 text-lg font-medium hover:bg-[#d96a10] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View More of Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-gray-200" ref={testimonialsSection.ref}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${testimonialsSection.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-black mb-12 ${testimonialsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>What Homeowners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "My kitchen looks completely brand new",
              "Professional from start to finish",
              "Love our new granite countertops",
              "Fair pricing, beautiful results",
              "They respected our home throughout",
              "Best remodeling experience we've had"
            ].map((testimonial, index) => (
              <div key={index} className={`border-l-4 border-[#F07B20] pl-6 transition-all duration-300 hover:pl-8 ${testimonialsSection.isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}>
                <p className="text-lg text-black italic leading-relaxed">
                  "{testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
