
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ResumeBuilder</h3>
            <p className="text-gray-400 mb-4">
              Create professional resumes that stand out and get you hired.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/templates" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/examples" className="text-gray-400 hover:text-white transition-colors">Examples</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white transition-colors">Resume Guides</Link></li>
              <li><Link to="/ats-tips" className="text-gray-400 hover:text-white transition-colors">ATS Tips</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">© {currentYear} ResumeBuilder. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="mailto:support@resumebuilder.com" className="text-gray-400 hover:text-white flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@resumebuilder.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
