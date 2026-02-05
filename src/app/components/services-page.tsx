import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Pill, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-cta mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for strength, security, and longevity
          </p>
        </div>
      </section>

      {/* Personal Protection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Personal Protection
                </h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Confidence Through Capability
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gain the peace of mind that comes from knowing you can protect yourself. Our personal protection training goes beyond physical techniques—we build awareness, confidence, and the mental resilience to navigate any situation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Situational Awareness
                    </h4>
                    <p className="text-gray-700">
                      Learn to read environments, recognize threats, and make smart decisions before conflict arises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Functional Self-Defense
                    </h4>
                    <p className="text-gray-700">
                      Master practical Krav Maga and F.A.S.T. Defense techniques designed for real-world scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Empowerment for All Ages
                    </h4>
                    <p className="text-gray-700">
                      Training tailored for adults of all fitness levels, with special focus on maturing bodies.
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "Gain the peace of mind that comes from knowing you can protect yourself."
                </p>
              </blockquote>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/1000004241.jpg"
                alt="Personal Protection Training"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Supplementation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/1000004369.jpg"
                  alt="Targeted Supplementation"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cta p-3 rounded-lg">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Targeted Supplementation
                </h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-cta mb-4">
                Fueling the Warrior Within
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not all supplements are created equal. We provide curated, evidence-based recommendations designed to support recovery, optimize metabolism, and enhance your body's natural resilience.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cta p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Recovery & Repair
                    </h4>
                    <p className="text-gray-700">
                      Joint health, tissue recovery, and inflammation management for optimal performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cta p-2 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Metabolic Optimization
                    </h4>
                    <p className="text-gray-700">
                      Support healthy hormone balance, energy production, and body composition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cta p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Quality First Approach
                    </h4>
                    <p className="text-gray-700">
                      Only third-party tested, research-backed products from trusted manufacturers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-xl">
                <h4 className="font-semibold text-xl mb-3">Our Philosophy</h4>
                <p className="leading-relaxed">
                  Supplements should enhance—not replace—a solid foundation of nutrition and training. We help you identify what your body actually needs, without the marketing hype or unnecessary stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Strategy Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Combined Strategy
            </h2>
            <div className="w-24 h-1 bg-cta mx-auto mb-8" />
            <p className="text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Rich Clarke leads our nutrition and fitness programming, ensuring your body has the fuel and functional strength it needs. Christina Archuleta oversees personal protection and mobility training, building your confidence and capability. Together, they create a unified approach that transforms lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Rich Clarke Leads:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Functional Strength Training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Metabolic Nutrition Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Longevity & Performance Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Supplement Guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Christina Archuleta Leads:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Personal Protection Training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Functional Mobility Work</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Rock Steady Boxing Programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Situational Awareness Training</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">
              Ready to experience the complete Warrior Wellness approach?
            </p>
            <button className="bg-cta text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Schedule Your Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
