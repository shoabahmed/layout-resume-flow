
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';

interface SummarySectionProps {
  data: string;
  onChange: (data: string) => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleAIImprove = () => {
    // In a real implementation, this would call an AI API
    const improvedSummary = "Results-driven software engineer with 5+ years of experience in building scalable web applications. Proven track record of improving application performance by 40% and reducing deployment time by 60%. Expertise in JavaScript, TypeScript, React, and Node.js. Passionate about clean code and mentoring junior developers.";
    onChange(improvedSummary);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          placeholder="Write a compelling summary that highlights your key qualifications and career goals..."
          value={data}
          onChange={handleChange}
          rows={6}
          className="resize-y"
        />
      </div>
      
      <div className="ai-suggestion">
        <div className="flex justify-between items-center">
          <span>Try to include quantifiable achievements in your summary for more impact</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-700 hover:bg-blue-100"
            onClick={handleAIImprove}
          >
            <Wand2 className="h-3 w-3 mr-1" />
            Improve
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p className="mb-2">Tips:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Keep your summary to 3-5 sentences</li>
          <li>Highlight your most relevant skills and experiences</li>
          <li>Tailor it to match the job description</li>
          <li>Include measurable achievements when possible</li>
        </ul>
      </div>
    </div>
  );
};

export default SummarySection;
