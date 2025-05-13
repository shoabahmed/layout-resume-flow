
import React from 'react';
import { ResumeData, Template } from '@/types/resume';
import ModernTemplate from './templates/ModernTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import SimpleTemplate from './templates/SimpleTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  template: Template;
  scale?: number;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template, scale = 1 }) => {
  const renderTemplate = () => {
    switch (template.id) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'professional':
        return <ProfessionalTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      case 'simple':
        return <SimpleTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div 
      className="bg-white"
      style={{
        width: '8.5in',
        height: '11in',
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
