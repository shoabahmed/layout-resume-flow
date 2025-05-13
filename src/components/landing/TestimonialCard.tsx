
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
