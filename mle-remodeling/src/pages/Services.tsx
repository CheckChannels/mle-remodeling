import { Link } from 'react-router-dom';
import { Layers, Bath, Gem, Building2, Hammer, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Services() {
  const headerSection = useIntersectionObserver();
  const servicesSection = useIntersectionObserver();
  const ctaSection = useIntersectionObserver();

  const services = [
    {
      icon: Layers,
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations including custom cabinetry, countertop installation, backsplash tile, flooring, and fixture upgrades. We handle everything from demo to final walkthrough."
    },
    {
      icon: Bath,
      title: "Bathroom Remodeling",
      description: "Full bathroom renovations — walk-in showers, tub surrounds, tile work, vanities, lighting, and plumbing updates. Both master baths and secondary bathrooms."
    },
    {
      icon: Gem,
      title: "Granite & Countertops",
      description: "Granite, quartz, and stone countertop fabrication and installation. Visit our showroom to select from a wide range of slabs and edge profiles that match your style."
    },
    {
      icon: Building2,
      title: "Commercial Remodeling",
      description: "Office kitchens, commercial bathrooms, and tenant improvement projects. We work efficiently to minimize downtime for your business."
    },
    {
      icon: Hammer,
      title: "Tile & Flooring",
      description: "Tile installation for floors, walls, showers, and backsplashes. Precision layout and grouting for a result that looks great and lasts."
    },
    {
      icon: Sparkles,
      title: "Custom Cabinetry",
      description: "Cabinet installation and refacing for kitchens, bathrooms, and storage areas. We source quality materials and install with care and attention to detail."
    }
  ];

  return (
    <div>
      <section className="py-20 bg-white" ref={headerSection.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${headerSection.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h1 className={`text-4xl sm:text-5xl font-bold text-black mb-6 ${headerSection.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>Our Services</h1>
          <p className={`text-xl text-black mb-12 leading-relaxed max-w-3xl ${headerSection.isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            MLE Remodeling offers full-service kitchen and bath remodeling for residential and commercial properties throughout the Houston area. Every project is handled with quality materials, skilled tradespeople, and clear communication from start to finish.
          </p>

          <div className="grid md:grid-cols-2 gap-10" ref={servicesSection.ref}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`border-l-4 border-[#F07B20] pl-6 transition-all duration-300 hover:pl-8 hover:shadow-md hover:-translate-y-1 ${servicesSection.isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-[#F07B20] mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <h2 className="text-2xl font-semibold text-black">{service.title}</h2>
                  </div>
                  <p className="text-black leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200" ref={ctaSection.ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold text-black mb-6 ${ctaSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Ready to Transform Your Space?</h2>
          <p className={`text-lg text-black mb-8 ${ctaSection.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Schedule a free in-home consultation or visit our showroom at 26326 N Fwy Service Rd, Oak Ridge North, TX.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaSection.isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <a href="tel:9362075767" className="bg-[#F07B20] text-white px-8 py-4 text-lg font-medium hover:bg-[#d96a10] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block">
              Call (936) 207-5767
            </a>
            <Link to="/contact" className="bg-white border-2 border-[#F07B20] text-[#F07B20] px-8 py-4 text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
