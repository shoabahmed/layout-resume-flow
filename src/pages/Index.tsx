
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Eye, FileText, Layout, PenLine, Award } from 'lucide-react';

import LandingNavbar from '@/components/landing/LandingNavbar';
import TemplateShowcase from '@/components/landing/TemplateShowcase';
import FeatureCard from '@/components/landing/FeatureCard';
import TestimonialCard from '@/components/landing/TestimonialCard';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Build a resume recruiters will <span className="text-primary">remember</span>
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Create a professional, ATS-friendly resume in minutes with our intuitive builder and AI-powered suggestions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link to="/builder">
                  <Button size="lg" className="w-full sm:w-auto">
                    Build my resume
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse templates
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {['Google', 'Microsoft', 'Amazon', 'Apple'].map((company) => (
                  <div key={company} className="text-sm text-gray-500 flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{company}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative bg-white p-3 rounded-xl shadow-2xl border border-gray-200">
                <img 
                  src="/placeholder.svg" 
                  alt="Resume preview" 
                  className="w-full rounded-lg shadow-sm"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm animate-pulse-soft">
                  <Eye className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Preview Resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features that set us apart</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our resume builder combines beautiful templates with powerful AI to help you create the perfect resume.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Layout className="h-8 w-8 text-primary" />}
              title="20+ Professional Templates"
              description="Choose from a variety of modern, traditional, and creative templates designed to impress recruiters."
            />
            <FeatureCard 
              icon={<PenLine className="h-8 w-8 text-resume-purple" />}
              title="AI Content Suggestions"
              description="Get intelligent recommendations to improve your bullet points, fix grammar, and optimize wording."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-resume-green" />}
              title="ATS Optimization"
              description="Ensure your resume passes ATS scans with keyword suggestions and formatting checks."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-resume-red" />}
              title="Customizable Sections"
              description="Add, remove, and reorder resume sections with an intuitive drag-and-drop interface."
            />
            <FeatureCard 
              icon={<Check className="h-8 w-8 text-resume-yellow" />}
              title="Export in Multiple Formats"
              description="Download your finished resume as a PDF or TXT file in US Letter or A4 size."
            />
            <FeatureCard 
              icon={<Eye className="h-8 w-8 text-resume-blue" />}
              title="Real-time Preview"
              description="See your changes immediately as you edit your resume with our live preview feature."
            />
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Templates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of professionally designed templates that will make your resume stand out.
            </p>
          </div>
          <TemplateShowcase />
          <div className="text-center mt-8">
            <Link to="/templates">
              <Button variant="outline" size="lg">
                View all templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our resume builder has helped job seekers land their dream jobs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="After using this resume builder, I got 4 interviews in just one week! The templates are truly eye-catching."
              author="Jessica K."
              role="Marketing Specialist"
              company="hired at Google"
            />
            <TestimonialCard 
              quote="The AI suggestions helped me highlight achievements I wouldn't have thought to include. Game changer for my job search!"
              author="Michael T."
              role="Software Engineer"
              company="hired at Microsoft"
            />
            <TestimonialCard 
              quote="I tried several resume builders, but this one's ATS optimization feature really made the difference in getting my resume noticed."
              author="Sarah L."
              role="Project Manager"
              company="hired at Amazon"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to land your dream job?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Start building your professional resume today and get one step closer to your next career opportunity.
            </p>
            <Link to="/builder">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Create my resume now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
