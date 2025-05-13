
import React from 'react';
import { ResumeData } from '@/types/resume';

interface SimpleTemplateProps {
  data: ResumeData;
}

const SimpleTemplate: React.FC<SimpleTemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, sectionOrder } = data;
  
  // Helper function to render sections in the correct order
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'summary':
        return (
          <section className="mb-5">
            <h2 className="text-lg font-bold mb-2 uppercase">Summary</h2>
            <p className="text-gray-800">{summary}</p>
          </section>
        );
      case 'experience':
        return (
          <section className="mb-5">
            <h2 className="text-lg font-bold mb-3 uppercase">Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{job.position}</h3>
                  <div className="text-sm">{job.startDate} - {job.endDate}</div>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <div className="font-medium">{job.company}</div>
                  <div className="text-sm">{job.location}</div>
                </div>
                <ul className="list-disc list-outside ml-5 text-gray-800">
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
          <section className="mb-5">
            <h2 className="text-lg font-bold mb-3 uppercase">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="text-sm">{edu.startDate} - {edu.endDate}</div>
                </div>
                <div className="flex justify-between items-baseline">
                  <div className="font-medium">{edu.institution}</div>
                  <div className="text-sm">{edu.location}</div>
                </div>
                {edu.gpa && <div className="text-sm mt-1">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </section>
        );
      case 'skills':
        return (
          <section className="mb-5">
            <h2 className="text-lg font-bold mb-2 uppercase">Skills</h2>
            <p className="text-gray-800">{skills.join(' | ')}</p>
          </section>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-8 h-full font-sans">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.jobTitle && (
          <h2 className="text-xl text-center mb-3">{personalInfo.jobTitle}</h2>
        )}
        
        <div className="text-center text-sm">
          {[
            personalInfo.email,
            personalInfo.phone,
            [personalInfo.city, personalInfo.state].filter(Boolean).join(', '),
            personalInfo.linkedin,
            personalInfo.website
          ]
            .filter(Boolean)
            .join(' | ')}
        </div>
      </header>
      
      <hr className="mb-6 border-t border-gray-300" />
      
      {/* Content - render sections in the order specified by sectionOrder, excluding 'personal' */}
      <div>
        {sectionOrder
          .filter(section => section !== 'personal')
          .map(section => (
            <React.Fragment key={section}>
              {renderSection(section)}
              {section !== sectionOrder[sectionOrder.length - 1] && <hr className="mb-5 mt-5 border-t border-gray-200" />}
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default SimpleTemplate;
