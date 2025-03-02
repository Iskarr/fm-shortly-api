"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-(--VeryDarkBlue) text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Shortly</h3>
          </div>

          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Link Shortening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Branded Links
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Image
                src="/images/icon-facebook.svg"
                alt="facebook logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Image
                src="/images/icon-twitter.svg"
                alt="twitter logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Pinterest</span>
              <Image
                src="/images/icon-pinterest.svg"
                alt="pinterest logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Image
                src="/images/icon-instagram.svg"
                alt="instagram logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
