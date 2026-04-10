import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function OurWork() {
  const headerSection = useIntersectionObserver();
  const projectsSection = useIntersectionObserver();
  const testimonialsSection = useIntersectionObserver();
  const whySectionRef = useIntersectionObserver();

  const projects = [
    {
      title: 'Kitchen Remodel',
      description: 'Custom cabinetry, granite countertops, and full kitchen transformation',
      image: 'https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Master Bathroom',
      description: 'Walk-in tile shower, new vanity, and luxury fixtures',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Granite Countertops',
      description: 'Custom granite fabrication and installation throughout the home',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bathroom Tile Work',
      description: 'Full floor-to-ceiling tile installation in a guest bath',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Commercial Kitchen',
      description: 'Office break room remodel with new cabinetry and countertops',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Kitchen Backsplash',
      description: 'Custom tile backsplash and countertop refresh',
      image: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div>
      <section className="py-20 bg-white border-t border-gray-200" ref={whySectionRef.ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${whySectionRef.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-black mb-8 ${whySectionRef.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>What Sets Our Work Apart</h2>
          <div className="space-y-6 text-lg text-black leading-relaxed">
            <p className={`${whySectionRef.isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
              We treat every home like it's our own. Whether it's a full kitchen renovation or a single bathroom update, our team brings the same level of care, precision, and professionalism to every job.
            </p>
            <p className={`${whySectionRef.isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
              We're veteran-owned and operate with the discipline and attention to detail that comes with that background. Our showroom lets you see and touch materials before you decide — no guesswork, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={headerSection.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-t-4 border-[#F07B20] w-20 mb-8 ${headerSection.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}></div>
          <h1 className={`text-4xl sm:text-5xl font-bold text-black mb-6 ${headerSection.isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>Our Work</h1>
          <p className={`text-xl text-black leading-relaxed max-w-3xl mb-12 ${headerSection.isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            From kitchen transformations to custom granite installations, every project reflects our commitment to craftsmanship and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsSection.ref}>
            {projects.map((project, index) => (
              <div key={index} className={`group ${projectsSection.isVisible ? `animate-scale-in stagger-${(index % 3) + 1}` : 'opacity-0'}`}>
                <div className="relative overflow-hidden mb-4 aspect-[4/3] shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-[#F07B20]">{project.title}</h3>
                <p className="text-black leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
