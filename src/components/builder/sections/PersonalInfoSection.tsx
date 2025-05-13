
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/types/resume';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          name="jobTitle"
          placeholder="e.g. Senior Software Engineer"
          value={data.jobTitle}
          onChange={handleChange}
        />
        <div className="text-sm text-green-600 flex items-center mt-1">
          <span>✓ ATS-friendly job title</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            placeholder="City"
            value={data.city}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            placeholder="State"
            value={data.state}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn URL (Optional)</Label>
        <Input
          id="linkedin"
          name="linkedin"
          placeholder="https://linkedin.com/in/yourprofile"
          value={data.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Portfolio/Website (Optional)</Label>
        <Input
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
          value={data.website}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
