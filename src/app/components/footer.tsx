import { Shield, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold tracking-tight">
                  Warrior Wellness
                </span>
                <span className="text-xs text-accent uppercase tracking-wider">
                  Colorado
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-2 text-center md:text-left">
              Strength. Security. Longevity.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p>coach@warriorwellnessco.com</p>
              <p>Rich: 970-691-6722</p>
              <p>Christina: 970-791-1782</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-cta transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-cta transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-cta transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Warrior Wellness Colorado. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
