
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Check, GripVertical, AlertTriangle, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PersonalInfoSection from './sections/PersonalInfoSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import SummarySection from './sections/SummarySection';

import { ResumeData } from '@/types/resume';

interface ResumeEditorProps {
  data: ResumeData;
  onDataChange: (data: Partial<ResumeData>) => void;
  onSectionOrderChange: (sections: string[]) => void;
}

const ResumeEditor: React.FC<ResumeEditorProps> = ({ data, onDataChange, onSectionOrderChange }) => {
  // Handle drag end for section reordering
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(data.sectionOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    onSectionOrderChange(items);
  };

  // Map section IDs to their corresponding components
  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'personal':
        return (
          <PersonalInfoSection 
            data={data.personalInfo} 
            onChange={(personalInfo) => onDataChange({ personalInfo })} 
          />
        );
      case 'summary':
        return (
          <SummarySection 
            data={data.summary} 
            onChange={(summary) => onDataChange({ summary })} 
          />
        );
      case 'experience':
        return (
          <ExperienceSection 
            data={data.experience} 
            onChange={(experience) => onDataChange({ experience })} 
          />
        );
      case 'education':
        return (
          <EducationSection 
            data={data.education} 
            onChange={(education) => onDataChange({ education })} 
          />
        );
      case 'skills':
        return (
          <SkillsSection 
            data={data.skills} 
            onChange={(skills) => onDataChange({ skills })} 
          />
        );
      default:
        return <div>Unknown section: {sectionId}</div>;
    }
  };

  // Map section IDs to their display names
  const getSectionTitle = (sectionId: string) => {
    const sectionTitles: Record<string, string> = {
      personal: 'Personal Information',
      summary: 'Professional Summary',
      experience: 'Work Experience',
      education: 'Education',
      skills: 'Skills',
    };
    return sectionTitles[sectionId] || sectionId;
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center mb-4">
        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
        <p className="text-sm text-blue-700">
          <strong>Pro tip:</strong> Drag and drop sections to reorder them in your resume.
        </p>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="resume-sections">
          {(provided) => (
            <div 
              className="space-y-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.sectionOrder.map((sectionId, index) => (
                <Draggable key={sectionId} draggableId={sectionId} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`resume-section ${snapshot.isDragging ? 'ring-2 ring-primary' : ''}`}
                    >
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={sectionId} className="border-0">
                          <div className="flex items-center justify-between">
                            <div
                              className="resume-drag-handle mr-2"
                              {...provided.dragHandleProps}
                            >
                              <GripVertical className="h-5 w-5" />
                            </div>
                            <AccordionTrigger className="flex-1">
                              {getSectionTitle(sectionId)}
                            </AccordionTrigger>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 mr-2 text-gray-400 hover:text-red-500"
                              onClick={(e) => {
                                e.stopPropagation();
                                // In a real app, this would remove the section
                                alert("Remove section functionality would go here");
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <AccordionContent>
                            {renderSectionContent(sectionId)}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-6">
        <Button variant="outline" className="w-full" onClick={() => alert("Add section functionality would go here")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Section
        </Button>
      </div>

      <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-yellow-700">
            <strong>ATS Check:</strong> Your resume is 85% optimized. Add more relevant keywords from the job description to improve your chances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
