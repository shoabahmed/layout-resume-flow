
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ArrowRight } from 'lucide-react';
import ResumePreview from '@/components/builder/ResumePreview';
import { initialResumeData } from '@/lib/initialData';
import { Template } from '@/types/resume';
import { useToast } from '@/hooks/use-toast';
import { templateSamples } from '@/lib/templateSamples';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Examples = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('modern');
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templateSamples[0].templates[0]);
  const [previewScale, setPreviewScale] = useState(0.25);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    
    toast({
      title: `${template.name} selected`,
      description: "Click 'Use this template' to start editing",
      duration: 3000,
    });
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Preparing download...",
      description: "Your PDF is being generated",
      duration: 2000,
    });

    // Simulate PDF generation process
    setTimeout(() => {
      // In a real implementation, this would use a library like react-pdf or jsPDF
      // or call a backend API to generate the PDF
      
      // Create a dummy PDF download
      const pdfBlob = new Blob(['PDF content would go here'], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedTemplate.name.toLowerCase()}-resume-example.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "PDF Downloaded",
        description: "Your example resume has been downloaded",
        // Fixed: Changed "success" to "default" since it's not a valid variant
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Resume Examples</h1>
              <p className="text-gray-600 mt-1">
                Browse our collection of professional resume templates
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download Example
              </Button>
              <Button asChild>
                <Link to="/builder">
                  Use This Template
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Template categories */}
          <div className="lg:col-span-1">
            <Tabs 
              defaultValue={activeCategory} 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 mb-8 w-full">
                {templateSamples.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {templateSamples.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium mb-4">{category.description}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {category.templates.map((template) => (
                        <div
                          key={template.id}
                          className={`p-3 border rounded-md cursor-pointer transition-all hover:border-primary
                            ${template.id === selectedTemplate.id ? 'border-primary bg-blue-50' : 'border-gray-200'}
                          `}
                          onClick={() => handleTemplateSelect(template)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded bg-${template.color}-100 flex items-center justify-center`}>
                              <span className={`text-${template.color}-600 font-semibold`}>
                                {template.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{template.name}</p>
                              <p className="text-xs text-gray-500">
                                {template.tags.join(' • ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Right content - Resume preview */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg border h-full">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{selectedTemplate.name} Template</h2>
                <div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setPreviewScale(prev => Math.min(prev + 0.1, 0.5))}
                  >
                    Zoom In
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="ml-2"
                    onClick={() => setPreviewScale(prev => Math.max(prev - 0.1, 0.2))}
                  >
                    Zoom Out
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-md overflow-hidden flex justify-center">
                <div className="transform-gpu" style={{ transform: `scale(${previewScale})`, transformOrigin: 'top center' }}>
                  <ResumePreview 
                    data={initialResumeData}
                    template={selectedTemplate}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handleDownloadPDF}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Example
                </Button>
                <Button asChild>
                  <Link to={`/builder?template=${selectedTemplate.id}`}>
                    Use This Template
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured templates section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templateSamples.flatMap(category => 
              category.templates.slice(0, 2).map(template => (
                <div key={`featured-${template.id}`} className="bg-white rounded-lg border overflow-hidden">
                  <AspectRatio ratio={3/4} className="bg-gray-50">
                    <div className="h-full w-full p-4">
                      <div className="transform scale-[0.2] origin-top-left">
                        <ResumePreview 
                          data={initialResumeData}
                          template={template}
                        />
                      </div>
                    </div>
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {template.tags.join(' • ')}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <Link to={`/builder?template=${template.id}`}>
                        Use Template
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            ).slice(0, 6)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
