
import React from 'react';
import { Check } from 'lucide-react';
import { Template } from '@/types/resume';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { templateSamples } from '@/lib/templateSamples';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface TemplateSelectorProps {
  templates: Template[];
  activeTemplate: Template;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  templates, 
  activeTemplate, 
  onSelectTemplate 
}) => {
  // Group templates by their categories
  const templatesByCategory = React.useMemo(() => {
    const categories = new Map<string, Template[]>();
    
    // Initialize categories
    templateSamples.forEach(category => {
      categories.set(category.id, []);
    });
    
    // Distribute templates to their respective categories
    templates.forEach(template => {
      const categoryId = template.id.split('-')[0];
      const categoryTemplates = categories.get(categoryId) || [];
      categoryTemplates.push(template);
      categories.set(categoryId, categoryTemplates);
    });
    
    return categories;
  }, [templates]);

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-6">
        <p className="text-sm text-blue-700">
          Choose a template that best matches your industry and style. All templates are ATS-friendly.
        </p>
      </div>
      
      <Tabs defaultValue="modern" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6 overflow-x-auto">
          {templateSamples.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {templateSamples.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {templatesByCategory.get(category.id)?.map((template) => (
                <div 
                  key={template.id}
                  className={`
                    relative rounded-md overflow-hidden border-2 cursor-pointer transition-all
                    ${template.id === activeTemplate.id 
                      ? 'border-primary ring-2 ring-primary ring-opacity-30' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                  onClick={() => onSelectTemplate(template.id)}
                >
                  {/* Template preview */}
                  <AspectRatio ratio={3/4} className="bg-gray-50">
                    <div className={`h-full w-full flex flex-col p-3`}>
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
                  </AspectRatio>
                  
                  {/* Template name */}
                  <div className="text-center p-2 bg-white border-t border-gray-200">
                    <p className="font-medium">{template.name}</p>
                    <p className="text-xs text-gray-500">{template.tags?.join(' • ')}</p>
                  </div>
                  
                  {/* Selection indicator */}
                  {template.id === activeTemplate.id && (
                    <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">{category.name} Templates</h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-2">Need more templates?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Upgrade to Pro for access to 20+ additional premium templates designed by professional resume experts.
        </p>
        <button className="text-primary text-sm font-medium hover:underline">
          View premium templates
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;
