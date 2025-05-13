
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { Education } from '@/types/resume';

interface EducationSectionProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({ data, onChange }) => {
  const handleChange = (index: number, field: keyof Education, value: string) => {
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      [field]: value,
    };
    onChange(updatedData);
  };

  const addEducation = () => {
    onChange([
      ...data,
      {
        institution: '',
        degree: '',
        location: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }
    ]);
  };

  const removeEducation = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    onChange(updatedData);
  };

  return (
    <div className="space-y-6">
      {data.map((education, index) => (
        <div key={index} className="p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Education {index + 1}</h4>
            {data.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => removeEducation(index)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Remove
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                placeholder="University or school name"
                value={education.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${index}`}>Degree/Field of Study</Label>
              <Input
                id={`degree-${index}`}
                placeholder="e.g., Bachelor of Science in Computer Science"
                value={education.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location</Label>
              <Input
                id={`location-${index}`}
                placeholder="City, State"
                value={education.location}
                onChange={(e) => handleChange(index, 'location', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  placeholder="MM/YYYY"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  placeholder="MM/YYYY or Present"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Label htmlFor={`gpa-${index}`}>GPA (Optional)</Label>
            <Input
              id={`gpa-${index}`}
              placeholder="e.g., 3.8/4.0"
              value={education.gpa}
              onChange={(e) => handleChange(index, 'gpa', e.target.value)}
              className="w-1/3"
            />
          </div>
        </div>
      ))}
      
      <Button 
        variant="outline" 
        onClick={addEducation}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Education
      </Button>
    </div>
  );
};

export default EducationSection;
