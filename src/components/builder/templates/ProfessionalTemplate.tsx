
import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ProfessionalTemplateProps {
  data: ResumeData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, sectionOrder } = data;
  
  // Helper function to render sections in the correct order
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'summary':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-800">Professional Summary</h2>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-gray-700">{summary}</p>
            </div>
          </section>
        );
      case 'experience':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800">Work Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-5">
                <div className="mb-2">
                  <h3 className="font-bold text-gray-900">{job.position}</h3>
                  <div className="flex justify-between items-baseline">
                    <div className="font-medium">{job.company} | {job.location}</div>
                    <div className="text-sm text-gray-600">{job.startDate} - {job.endDate}</div>
                  </div>
                </div>
                <ul className="list-disc list-outside text-gray-700 ml-5">
                  {job.bullets.map((bullet, i) => (
                    bullet.trim() && <li key={i} className="mb-1">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        );
      case 'education':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="mb-1">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex justify-between items-baseline">
                    <div className="font-medium">{edu.institution} | {edu.location}</div>
                    <div className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</div>
                  </div>
                </div>
                {edu.gpa && <div className="text-sm text-gray-700">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </section>
        );
      case 'skills':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-800">Skills</h2>
            <p className="text-gray-700">{skills.join(' • ')}</p>
          </section>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-8 h-full font-serif">
      {/* Header */}
      <header className="mb-6 text-center pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold mb-1 text-gray-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl font-medium mb-3 text-gray-700">{personalInfo.jobTitle}</h2>
        
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {(personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-3 w-3 mr-1" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-3 w-3 mr-1" />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Content - render sections in the order specified by sectionOrder, excluding 'personal' */}
      <div>
        {sectionOrder
          .filter(section => section !== 'personal')
          .map(section => (
            <React.Fragment key={section}>
              {renderSection(section)}
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
