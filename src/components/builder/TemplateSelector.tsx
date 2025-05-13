
import React from 'react';
import { Check } from 'lucide-react';
import { Template } from '@/types/resume';

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
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-6">
        <p className="text-sm text-blue-700">
          Choose a template that best matches your industry and style. All templates are ATS-friendly.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {templates.map((template) => (
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
            {/* Template preview (placeholder) */}
            <div className={`aspect-[3/4] p-4 bg-gray-50`}>
              <div className={`h-full w-full bg-gray-100 flex flex-col p-3`}>
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
            
            {/* Template name */}
            <div className="text-center p-2 bg-white border-t border-gray-200">
              <p className="font-medium">{template.name}</p>
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
