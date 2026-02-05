import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, CheckCircle, Shield, Dumbbell, Apple, Brain, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real application, this would trigger the download and save the email
      setTimeout(() => {
        alert('Thank you! Your guide has been sent to your email.');
      }, 500);
    }
  };

  const pillars = [
    {
      icon: Dumbbell,
      title: 'Functional Strength',
      description: 'Build power that translates to real-world movement and independence.',
    },
    {
      icon: Apple,
      title: 'Metabolic Nutrition',
      description: 'Fuel your body for optimal energy, recovery, and longevity.',
    },
    {
      icon: Shield,
      title: 'Tactical Awareness',
      description: 'Develop situational awareness and confidence in any environment.',
    },
    {
      icon: TrendingUp,
      title: 'Intelligent Recovery',
      description: 'Master rest, sleep, and recovery strategies for sustainable performance.',
    },
    {
      icon: Brain,
      title: 'Targeted Supplementation',
      description: 'Strategic support for joints, hormones, and cellular health.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Free Resources
          </h1>
          <div className="w-24 h-1 bg-cta mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Your guide to aging with strength, security, and vitality
          </p>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Guide Image/Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cta/20 rounded-2xl blur-xl" />
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-lg shadow-xl">
                    <div className="text-center text-white mb-6">
                      <Shield className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">
                        The Modern Warrior's Guide
                      </h3>
                      <p className="text-lg font-light">to Aging</p>
                    </div>
                    <div className="border-t border-white/30 pt-6 space-y-3">
                      <p className="text-white text-sm font-semibold">
                        5 Pillars of Strength & Independence
                      </p>
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <CheckCircle className="w-4 h-4" />
                        <span>By Rich Clarke & Christina Archuleta</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-cta text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    FREE DOWNLOAD
                  </div>
                </div>
              </div>
            </div>

            {/* Download Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The Modern Warrior's Guide to Aging
              </h2>
              <h3 className="text-2xl font-semibold text-accent mb-6">
                5 Pillars of Strength and Independence
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discover the proven strategies that help modern adults stay strong, capable, and protected as they age. This comprehensive guide covers everything you need to build a foundation for lifelong vitality.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-lg text-primary mb-4">
                  Inside This Guide You'll Learn:
                </h4>
                <ul className="space-y-3">
                  {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-primary p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-primary">
                            {pillar.title}:
                          </span>{' '}
                          <span className="text-gray-700">{pillar.description}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Enter your email to download the guide
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Free Guide
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    No spam. Just practical strategies for living powerfully.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg text-green-900 mb-2">
                    Success! Check Your Email
                  </h4>
                  <p className="text-green-700">
                    Your guide has been sent to <strong>{email}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Value Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why This Guide Matters
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                Evidence-Based
              </h3>
              <p className="text-gray-700">
                Backed by decades of research and real-world results with thousands of clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                Comprehensive
              </h3>
              <p className="text-gray-700">
                Covers fitness, nutrition, protection, and recovery in one unified system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cta" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                Actionable
              </h3>
              <p className="text-gray-700">
                Practical strategies you can implement immediately to see results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Schedule your free Warrior Readiness Assessment and discover your personalized path forward.
          </p>
          <button className="bg-cta text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Schedule Your Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
