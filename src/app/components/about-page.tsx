import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, Shield, Heart } from 'lucide-react';

export function AboutPage() {
  const richCertifications = [
    'NSCA-CSCS (Certified Strength & Conditioning Specialist)',
    'NASM Certified Personal Trainer',
    'NESTA Specialist in Fitness Nutrition',
    '35+ Years Professional Experience',
  ];

  const christinaCertifications = [
    'Level 4 Krav Maga Instructor',
    '2nd Degree Black Belt',
    'Civilian & Law Enforcement Training',
    'F.A.S.T. Defense Certified',
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Your Guides
          </h1>
          <div className="w-24 h-1 bg-cta mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Experience. Authority. Results. Two experts dedicated to your transformation.
          </p>
        </div>
      </section>

      {/* Rich Clarke Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Rich Clarke
                  </h2>
                  <p className="text-lg text-accent">Longevity & Fitness Expert</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over 35 years of experience in the fitness industry, Rich Clarke is a specialist in human longevity and performance optimization. His mission is simple: equip every client with the <span className="font-semibold text-primary">"Warrior" mindset</span> needed to thrive at any age.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rich's approach combines cutting-edge science with time-tested principles, focusing on functional strength, metabolic health, and sustainable nutrition strategies that fuel the body for life's demands.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Certifications & Expertise
                </h3>
                <ul className="space-y-2">
                  {richCertifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "I don't train people to look good. I train them to live powerfully, move confidently, and age without limits."
                </p>
                <p className="text-primary font-semibold mt-2">— Rich Clarke</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/Rich-Clarke.jpg"
                  alt="Rich Clarke - Fitness Expert"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Christina Archuleta Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/Christina-Archuleta.JPG"
                  alt="Christina Archuleta - Self-Defense Expert"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Christina Archuleta
                  </h2>
                  <p className="text-lg text-accent">Personal Protection Specialist</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Christina Archuleta is a Level 4 Krav Maga Instructor and 2nd Degree Black Belt who specializes in empowering civilians and law enforcement professionals with practical, effective self-defense skills. Her philosophy: <span className="font-semibold text-primary">"Confidence Through Capability."</span>
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Christina's training approach focuses on real-world situational awareness, functional defensive techniques, and building the mental resilience needed to navigate any threat with composure and control.
              </p>

              <div className="bg-white p-6 rounded-xl mb-6 shadow-md">
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Certifications & Expertise
                </h3>
                <ul className="space-y-2">
                  {christinaCertifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "True safety isn't about avoiding danger—it's about knowing you have the skills and confidence to handle whatever comes your way."
                </p>
                <p className="text-accent font-semibold mt-2">— Christina Archuleta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Approach Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Unified Approach to Excellence
            </h2>
            <div className="w-24 h-1 bg-cta mx-auto mb-8" />
            <p className="text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Together, Rich and Christina offer a comprehensive system that addresses every aspect of living powerfully: from building physical strength and optimizing nutrition to developing personal safety skills and cultivating an unshakeable mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Proven Methods</h3>
              <p className="text-gray-200">
                Decades of combined experience refined into actionable strategies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Holistic Focus</h3>
              <p className="text-gray-200">
                Mind, body, and safety working together for total wellness
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Warrior Mindset</h3>
              <p className="text-gray-200">
                Building resilience, capability, and confidence at every level
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing import for Dumbbell icon
import { Dumbbell } from 'lucide-react';
