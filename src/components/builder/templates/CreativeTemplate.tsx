
import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, sectionOrder } = data;
  
  // Helper function to render sections in the correct order
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'summary':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-purple-700 mb-3">About Me</h2>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700">{summary}</p>
            </div>
          </section>
        );
      case 'experience':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-purple-700 mb-3">Work Experience</h2>
            <div className="space-y-4">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-6 pb-4">
                  <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-purple-100"></div>
                  <div className="absolute top-0 left-[-5px] h-4 w-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1">
                    <h3 className="font-bold text-gray-900">{job.position}</h3>
                    <div className="flex justify-between items-baseline flex-wrap">
                      <div className="font-medium text-purple-700">{job.company}</div>
                      <div className="text-sm text-gray-600">{job.startDate} - {job.endDate}</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{job.location}</div>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-700">
                    {job.bullets.map((bullet, i) => (
                      bullet.trim() && <li key={i} className="mb-1">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      case 'education':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-purple-700 mb-3">Education</h2>
            <div className="grid grid-cols-1 gap-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-sm text-gray-600">{edu.location}</div>
                      {edu.gpa && <div className="text-sm text-purple-700 mt-1">GPA: {edu.gpa}</div>}
                    </div>
                    <div className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'skills':
        return (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-purple-700 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm shadow-sm"
                >
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
    <div className="h-full" style={{ backgroundColor: '#fcfaff' }}>
      {/* Sidebar */}
      <div className="flex flex-col h-full">
        <div className="bg-purple-700 text-white p-8">
          <h1 className="text-3xl font-bold mb-1">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className="text-xl opacity-90 font-medium mb-4">{personalInfo.jobTitle}</h2>
          
          <div className="space-y-2 text-sm">
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 opacity-90" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 opacity-90" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {(personalInfo.city || personalInfo.state) && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 opacity-90" />
                <span>{[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 opacity-90" />
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 opacity-90" />
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Content - render sections in the order specified by sectionOrder, excluding 'personal' */}
        <div className="p-8 flex-1">
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
    </div>
  );
};

export default CreativeTemplate;
