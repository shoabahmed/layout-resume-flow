
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const templateCategories = [
  { id: 'modern', name: 'Modern' },
  { id: 'professional', name: 'Professional' },
  { id: 'creative', name: 'Creative' },
  { id: 'simple', name: 'Simple' }
];

// Placeholder templates for demonstration
const templates = {
  modern: [
    { id: 'modern-1', name: 'Stockholm', color: 'blue' },
    { id: 'modern-2', name: 'Helsinki', color: 'purple' },
    { id: 'modern-3', name: 'Berlin', color: 'green' },
  ],
  professional: [
    { id: 'pro-1', name: 'Executive', color: 'gray' },
    { id: 'pro-2', name: 'Corporate', color: 'blue' },
    { id: 'pro-3', name: 'Enterprise', color: 'red' },
  ],
  creative: [
    { id: 'creative-1', name: 'Designer', color: 'pink' },
    { id: 'creative-2', name: 'Artist', color: 'purple' },
    { id: 'creative-3', name: 'Vibrant', color: 'yellow' },
  ],
  simple: [
    { id: 'simple-1', name: 'Minimal', color: 'gray' },
    { id: 'simple-2', name: 'Classic', color: 'blue' },
    { id: 'simple-3', name: 'Clean', color: 'green' },
  ]
};

const TemplateShowcase = () => {
  return (
    <Tabs defaultValue="modern" className="w-full">
      <TabsList className="grid grid-cols-4 mb-8 w-full max-w-lg mx-auto">
        {templateCategories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {Object.entries(templates).map(([category, templateList]) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateList.map((template) => (
              <div key={template.id} className="group relative">
                <div className={`aspect-[3/4] rounded-md overflow-hidden border-2 border-gray-200 group-hover:border-primary transition-all duration-300`}>
                  {/* Placeholder for template preview - in a real app, this would be an image */}
                  <div className={`h-full w-full bg-gray-100 flex flex-col p-4`}>
                    <div className={`h-8 w-40 rounded bg-${template.color}-500 mb-3`}></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-4/6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-5 w-32 bg-gray-300 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded mb-6"></div>
                    <div className="h-5 w-32 bg-gray-300 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded mb-2"></div>
                  </div>
                </div>
                <p className="mt-2 font-medium text-center">{template.name}</p>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <span className="text-white font-medium bg-primary px-4 py-2 rounded-md">
                    Use Template
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TemplateShowcase;
