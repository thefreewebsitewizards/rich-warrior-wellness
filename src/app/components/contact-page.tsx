import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    goal: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Functional Fitness & Strength',
    'Nutrition & Supplement Strategy',
    'Personal Protection & Self-Defense',
    'Mobility / Rock Steady Boxing',
  ];

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // In a real application, this would send data to a backend
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: [],
      goal: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Warrior Readiness Assessment
          </h1>
          <div className="w-24 h-1 bg-cta mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Take the first step toward strength, security, and longevity
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl shadow-xl sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:coach@warriorwellnessco.com"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        coach@warriorwellnessco.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Phone</p>
                      <div className="space-y-1 text-gray-200">
                        <p>
                          <span className="font-medium text-white">Rich:</span>{' '}
                          <a href="tel:970-691-6722" className="hover:text-white transition-colors">
                            970-691-6722
                          </a>
                        </p>
                        <p>
                          <span className="font-medium text-white">Christina:</span>{' '}
                          <a href="tel:970-791-1782" className="hover:text-white transition-colors">
                            970-791-1782
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-200">Colorado</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    We typically respond within 24 hours. Your information is kept confidential and will never be shared.
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment Form */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Complete Your Assessment
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Help us understand your goals and challenges so we can create a personalized plan for your success. This assessment takes less than 3 minutes.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="(970) 123-4567"
                      />
                    </div>

                    {/* Interests Checkboxes */}
                    <div>
                      <label className="block font-semibold text-gray-700 mb-3">
                        I am most interested in: *
                      </label>
                      <div className="space-y-3">
                        {interestOptions.map((interest) => (
                          <label
                            key={interest}
                            className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleCheckboxChange(interest)}
                              className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary cursor-pointer"
                            />
                            <span className="text-gray-700 flex-1">{interest}</span>
                          </label>
                        ))}
                      </div>
                      {formData.interests.length === 0 && (
                        <p className="text-sm text-gray-500 mt-2">
                          Please select at least one area of interest
                        </p>
                      )}
                    </div>

                    {/* Goal Text Area */}
                    <div>
                      <label htmlFor="goal" className="block font-semibold text-gray-700 mb-2">
                        What is your #1 goal for the next 90 days? *
                      </label>
                      <textarea
                        id="goal"
                        value={formData.goal}
                        onChange={(e) =>
                          setFormData({ ...formData, goal: e.target.value })
                        }
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your primary goal... (e.g., 'I want to build functional strength so I can hike with confidence' or 'I want to learn self-defense skills to feel safer')"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Be as specific as possible—this helps us personalize your program.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formData.interests.length === 0}
                      className="w-full bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <Send className="w-5 h-5" />
                      Submit My Goal
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 p-12 rounded-2xl text-center">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-green-900 mb-4">
                    Assessment Submitted!
                  </h2>
                  <p className="text-lg text-green-700 mb-6 max-w-2xl mx-auto">
                    Thank you, <strong>{formData.name}</strong>! We've received your Warrior Readiness Assessment and will reach out within 24 hours to discuss your personalized strategy.
                  </p>
                  <div className="bg-white p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
                    <h3 className="font-semibold text-lg text-primary mb-3">
                      What Happens Next?
                    </h3>
                    <ol className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <span>
                          We'll review your goals and selected areas of interest
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <span>
                          Rich or Christina will contact you to schedule a consultation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <span>
                          Together, we'll create your personalized Warrior Wellness plan
                        </span>
                      </li>
                    </ol>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Submit Another Assessment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What to Expect From Your Assessment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                Personalized Strategy
              </h3>
              <p className="text-gray-700">
                No cookie-cutter programs. Every plan is tailored to your unique goals and capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-700">
                Direct access to Rich and Christina—no middlemen, just experienced professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-cta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cta" />
              </div>
              <h3 className="font-semibold text-xl text-primary mb-3">
                No Pressure
              </h3>
              <p className="text-gray-700">
                This is a conversation, not a sales pitch. We're here to help, not push.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
