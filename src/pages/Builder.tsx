
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';
import { 
  Download, Eye, Settings, PenLine, 
  Check, HelpCircle, 
  ChevronLeft, ChevronRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import BuilderNavbar from '@/components/builder/BuilderNavbar';
import ResumeEditor from '@/components/builder/ResumeEditor';
import ResumePreview from '@/components/builder/ResumePreview';
import TemplateSelector from '@/components/builder/TemplateSelector';

import { initialResumeData } from '@/lib/initialData';
import { findTemplateById, getAllTemplates } from '@/lib/templateSamples';
import { ResumeData, Template } from '@/types/resume';

const Builder = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [templates] = useState<Template[]>(getAllTemplates());
  const [activeTemplate, setActiveTemplate] = useState<Template>(templates[0]);
  const [isFullPreview, setIsFullPreview] = useState(false);

  // Handle template from URL parameter
  useEffect(() => {
    const templateId = searchParams.get('template');
    if (templateId) {
      const template = findTemplateById(templateId);
      if (template) {
        setActiveTemplate(template);
        toast({
          title: "Template loaded",
          description: `You're now using the ${template.name} template`,
          duration: 2000
        });
      }
    }
  }, [searchParams, toast]);

  const handleDataChange = (newData: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...newData
    }));

    // Show a toast for auto-save
    toast({
      title: "Resume updated",
      description: "Your changes have been automatically saved.",
      duration: 2000
    });
  };

  const handleSectionOrderChange = (newSections: string[]) => {
    setResumeData(prev => ({
      ...prev,
      sectionOrder: newSections
    }));

    toast({
      title: "Layout updated",
      description: "Section order has been updated.",
      duration: 2000
    });
  };

  const handleTemplateChange = (templateId: string) => {
    const newTemplate = templates.find(t => t.id === templateId) || templates[0];
    setActiveTemplate(newTemplate);
    
    toast({
      title: "Template changed",
      description: `Applied the ${newTemplate.name} template.`,
      duration: 2000
    });
  };

  const toggleFullPreview = () => {
    setIsFullPreview(!isFullPreview);
  };

  const handleExport = () => {
    toast({
      title: "Exporting resume",
      description: "Your resume is being prepared for download.",
    });
    
    setTimeout(() => {
      // In a real implementation, this would use a library like react-pdf or call a backend API
      // For demonstration purposes, we're creating a dummy PDF download
      const pdfBlob = new Blob(['PDF content would go here'], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `resume-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Resume exported",
        description: "Your resume has been downloaded as a PDF.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BuilderNavbar />
      
      <div className="flex flex-1 overflow-hidden">
        {!isFullPreview ? (
          <>
            {/* Editor Panel */}
            <div className="w-full md:w-1/2 p-4 overflow-y-auto">
              <div className="mb-6">
                <Tabs defaultValue="content">
                  <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
                    <TabsTrigger value="content">
                      <PenLine className="mr-2 h-4 w-4" />
                      Content
                    </TabsTrigger>
                    <TabsTrigger value="templates">
                      <Settings className="mr-2 h-4 w-4" />
                      Templates
                    </TabsTrigger>
                    <TabsTrigger value="preview">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="content" className="mt-0">
                    <ResumeEditor 
                      data={resumeData} 
                      onDataChange={handleDataChange}
                      onSectionOrderChange={handleSectionOrderChange}
                    />
                  </TabsContent>
                  
                  <TabsContent value="templates" className="mt-0">
                    <TemplateSelector 
                      templates={templates} 
                      activeTemplate={activeTemplate} 
                      onSelectTemplate={handleTemplateChange} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="preview" className="mt-0 md:hidden">
                    <div className="flex justify-center items-center min-h-[50vh] border rounded-lg p-4 bg-white">
                      <ResumePreview data={resumeData} template={activeTemplate} scale={0.7} />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Preview Panel */}
            <div className="hidden md:block w-1/2 bg-gray-100 border-l p-4">
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Preview</h2>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleFullPreview}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Full preview
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View your resume in full screen mode</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={handleExport}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Export PDF
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download your resume as a PDF</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center items-start overflow-auto p-4 bg-gray-200 rounded-lg">
                  <div className="shadow-xl transform hover:scale-[1.01] transition-transform duration-200">
                    <ResumePreview data={resumeData} template={activeTemplate} />
                  </div>
                </div>
                
                <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-start">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-700">
                      <strong>ATS Tip:</strong> Your resume is looking good! Consider adding more keywords from the job description to improve your match score.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Full Preview Mode
          <div className="w-full flex flex-col">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={toggleFullPreview}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to editor
              </Button>
              
              <div className="text-center">
                <h2 className="font-medium">Full Preview Mode</h2>
              </div>
              
              <Button variant="default" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-1" />
                Export PDF
              </Button>
            </div>
            
            <div className="flex-1 bg-gray-200 flex justify-center items-center p-6 overflow-auto">
              <div className="bg-white shadow-2xl">
                <ResumePreview data={resumeData} template={activeTemplate} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Builder;
