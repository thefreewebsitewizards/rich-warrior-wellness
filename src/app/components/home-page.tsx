import { ImageWithFallback } from './figma/ImageWithFallback';
import { Apple, Dumbbell, Shield, Pill } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Apple,
      title: 'Nutrition',
      description: 'Science-backed fueling strategies designed to optimize your metabolism and support longevity.',
      image: '/IMG_5542.jpeg',
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Functional strength and mobility training tailored for the maturing body.',
      image: '/1000002957.jpg',
    },
    {
      icon: Shield,
      title: 'Personal Protection',
      description: 'Develop the skills and confidence you need to stay safe in any situation.',
      image: '/1000004241.jpg',
    },
    {
      icon: Pill,
      title: 'Supplements',
      description: 'Curated, high-quality supplement recommendations to support recovery and performance.',
      image: '/1000004369.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/1000002957.jpg"
        >
          <source src="/IMG_5684.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Strength. Security. Longevity.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            A holistic health and safety platform for the modern adult who refuses to slow down.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-cta text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Transformation
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              The Mission
            </h2>
            <div className="w-24 h-1 bg-cta mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We don't just help you live longer; we help you live <span className="font-semibold text-primary">stronger</span> and <span className="font-semibold text-primary">better protected</span>. A four-pillar approach to aging with excellence founded by 35-year fitness veteran Rich Clarke and self-defense expert Christina Archuleta.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - 4 Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to living your best life at any age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="bg-cta p-3 rounded-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Take the first step toward strength, security, and longevity.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-cta text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get Your Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
