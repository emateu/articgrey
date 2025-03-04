import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

function Footer2() {
  const footerLinks = {
    aboutUs: [
      { title: 'Blog', href: '#' },
      { title: 'Product Reviews', href: '#' },
      { title: 'Our Story', href: '#' },
      { title: 'Delivery', href: '#' }
    ],
    support: [
      { title: 'Order Status', href: '#' },
      { title: 'Help Center', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: 'Returns', href: '#' }
    ],
    importantLink: [
      { title: 'Maintenance', href: '#' },
      { title: 'Warranty', href: '#' },
      { title: 'Canadian Customers', href: '#' },
      { title: 'Setup', href: '#' }
    ],
    legal: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Accessibility', href: '#' },
      { title: 'Terms of Service', href: '#' },
      { title: 'Affiliate Program', href: '#' },
      { title: 'Articles', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#f6f6f5] mt-20 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-xxl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Be a Part of Our Journey</h3>
            <p className="text-gray-600 mb-4">
              Welcome to UNCMFRT. Sign up for exclusive content and we&apos;ll send you 10% off.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.map((link, index) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Important Link</h3>
            <ul className="space-y-2">
              {footerLinks.importantLink.map((link, index) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Us and Social */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Let Us Help You</p>
            <p className="text-xl font-bold">(888) 860-0572</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                <Instagram size={24} />
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-900">
                <Twitter size={24} />
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-900">
                <Facebook size={24} />
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-900">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© uncmfrt.com. All right reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Made with ❤️ and ☕ by ~/em
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer2 };
