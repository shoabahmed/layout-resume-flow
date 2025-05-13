
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { X, Plus, Wand2, MoveHorizontal } from 'lucide-react';

interface SkillsSectionProps {
  data: string[];
  onChange: (data: string[]) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data, onChange }) => {
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    if (skillInput.trim()) {
      onChange([...data, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    onChange(updatedData);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const addRecommendedSkills = () => {
    // In a real implementation, this would be from AI or job description analysis
    const recommendedSkills = [
      'JavaScript', 'React', 'TypeScript', 'Node.js', 'REST APIs', 
      'GraphQL', 'Git', 'Agile', 'Problem Solving'
    ];
    
    // Filter out skills that are already in the list
    const newSkills = recommendedSkills.filter(skill => !data.includes(skill));
    onChange([...data, ...newSkills]);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="skillInput">Add Skills</Label>
        <div className="flex">
          <Input
            id="skillInput"
            placeholder="Enter a skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mr-2"
          />
          <Button onClick={addSkill} type="button" disabled={!skillInput.trim()}>
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
      
      <div className="flex gap-2 flex-wrap my-4">
        {data.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1 flex items-center"
          >
            <span>{skill}</span>
            <button 
              onClick={() => removeSkill(index)}
              className="ml-2 text-gray-500 hover:text-red-500"
              aria-label="Remove skill"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-gray-500 text-sm">No skills added yet. Add skills related to the job you're applying for.</p>
        )}
      </div>
      
      <div className="flex flex-col space-y-4">
        <Button 
          variant="outline" 
          onClick={addRecommendedSkills}
          className="flex items-center"
        >
          <Wand2 className="h-4 w-4 mr-2" />
          Add Recommended Skills from Job Description
        </Button>
        
        <div className="ai-suggestion">
          <div className="flex items-start">
            <Wand2 className="h-4 w-4 mr-2 mt-0.5" />
            <div>
              <p className="font-medium mb-1">ATS Tip: Match your skills to the job</p>
              <p className="text-sm">Include both technical and soft skills relevant to the position. Prioritize skills mentioned in the job description.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 border rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-sm">Pro Feature: Skill Categorization</h4>
            <Button variant="ghost" size="sm" className="text-primary">Upgrade</Button>
          </div>
          <p className="text-sm text-gray-600">
            Organize your skills by categories (Technical, Soft, Languages, etc.) for a more structured presentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
