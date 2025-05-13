
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Wand2, Plus, Minus, AlertTriangle } from 'lucide-react';
import { Experience } from '@/types/resume';

interface ExperienceSectionProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data, onChange }) => {
  const handleChange = (index: number, field: keyof Experience, value: string) => {
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      [field]: value,
    };
    onChange(updatedData);
  };

  const handleBulletChange = (experienceIndex: number, bulletIndex: number, value: string) => {
    const updatedData = [...data];
    const updatedBullets = [...updatedData[experienceIndex].bullets];
    updatedBullets[bulletIndex] = value;
    updatedData[experienceIndex].bullets = updatedBullets;
    onChange(updatedData);
  };

  const addBullet = (experienceIndex: number) => {
    const updatedData = [...data];
    updatedData[experienceIndex].bullets.push('');
    onChange(updatedData);
  };

  const removeBullet = (experienceIndex: number, bulletIndex: number) => {
    const updatedData = [...data];
    updatedData[experienceIndex].bullets.splice(bulletIndex, 1);
    onChange(updatedData);
  };

  const addExperience = () => {
    onChange([
      ...data,
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        bullets: ['']
      }
    ]);
  };

  const removeExperience = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    onChange(updatedData);
  };

  return (
    <div className="space-y-6">
      {data.map((experience, index) => (
        <div key={index} className="p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Position {index + 1}</h4>
            {data.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => removeExperience(index)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Remove
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor={`company-${index}`}>Company</Label>
              <Input
                id={`company-${index}`}
                placeholder="Company name"
                value={experience.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`position-${index}`}>Position</Label>
              <Input
                id={`position-${index}`}
                placeholder="Your job title"
                value={experience.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location</Label>
              <Input
                id={`location-${index}`}
                placeholder="City, State"
                value={experience.location}
                onChange={(e) => handleChange(index, 'location', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  placeholder="MM/YYYY"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  placeholder="MM/YYYY or Present"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <Label>Responsibilities & Achievements</Label>
            {experience.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex gap-2 items-start mt-2">
                <div className="mt-2">•</div>
                <Textarea
                  placeholder="Describe your accomplishment using action verbs and quantifiable results..."
                  value={bullet}
                  onChange={(e) => handleBulletChange(index, bulletIndex, e.target.value)}
                  className="flex-1 resize-y"
                />
                <div className="flex flex-col gap-1 pt-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    onClick={() => {
                      // In a real implementation, this would call an AI API
                      const improvedBullet = "Increased website conversion rate by 32% through UI/UX improvements and implementing A/B testing methodologies";
                      handleBulletChange(index, bulletIndex, improvedBullet);
                    }}
                    title="Improve with AI"
                  >
                    <Wand2 className="h-4 w-4" />
                  </Button>
                  {experience.bullets.length > 1 && (
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeBullet(index, bulletIndex)}
                      title="Remove bullet"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            
            {experience.bullets.length > 0 && experience.bullets.filter(bullet => bullet.trim()).length === 0 && (
              <div className="flex items-center mt-2 text-yellow-600 text-sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                <span>Don't leave empty bullet points - add details or remove them.</span>
              </div>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2" 
              onClick={() => addBullet(index)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Bullet Point
            </Button>
          </div>
          
          <div className="ai-suggestion">
            <div className="text-sm">
              <strong>AI Tip:</strong> Try to include numbers and metrics in your achievements. For example, "Increased sales by 20%" rather than "Increased sales".
            </div>
          </div>
        </div>
      ))}
      
      <Button 
        variant="outline" 
        onClick={addExperience}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Work Experience
      </Button>
    </div>
  );
};

export default ExperienceSection;
