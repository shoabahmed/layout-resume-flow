
import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, sectionOrder } = data;
  
  // Helper function to render sections in the correct order
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'summary':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-resume-blue border-b-2 border-resume-blue pb-1 mb-3">Professional Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>
        );
      case 'experience':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-resume-blue border-b-2 border-resume-blue pb-1 mb-3">Work Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{job.position}</h3>
                  <div className="text-sm text-gray-600">{job.startDate} - {job.endDate}</div>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <div className="font-medium">{job.company}</div>
                  <div className="text-sm text-gray-600">{job.location}</div>
                </div>
                <ul className="list-disc list-inside text-gray-700 ml-1">
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
            <h2 className="text-lg font-bold text-resume-blue border-b-2 border-resume-blue pb-1 mb-3">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</div>
                </div>
                <div className="flex justify-between items-baseline">
                  <div className="font-medium">{edu.institution}</div>
                  <div className="text-sm text-gray-600">{edu.location}</div>
                </div>
                {edu.gpa && <div className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </section>
        );
      case 'skills':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-resume-blue border-b-2 border-resume-blue pb-1 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-blue-50 text-resume-blue px-3 py-1 rounded-full text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-8 h-full">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl text-resume-blue font-medium mb-3">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {(personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-resume-blue" />
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

export default ModernTemplate;
