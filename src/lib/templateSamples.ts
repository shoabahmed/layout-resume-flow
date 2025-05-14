
import { Template } from '@/types/resume';

type TemplateCategory = {
  id: string;
  name: string;
  description: string;
  templates: Template[];
};

export const templateSamples: TemplateCategory[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean designs with contemporary layouts and stylish elements',
    templates: [
      { id: 'modern-stockholm', name: 'Stockholm', color: 'blue', tags: ['Clean', 'Professional'] },
      { id: 'modern-helsinki', name: 'Helsinki', color: 'purple', tags: ['Minimalist', 'Creative'] },
      { id: 'modern-oslo', name: 'Oslo', color: 'green', tags: ['Simple', 'Bold'] },
      { id: 'modern-copenhagen', name: 'Copenhagen', color: 'cyan', tags: ['Sleek', 'Minimal'] },
      { id: 'modern-berlin', name: 'Berlin', color: 'indigo', tags: ['Creative', 'Modern'] },
      { id: 'modern-amsterdam', name: 'Amsterdam', color: 'red', tags: ['Creative', 'Unique'] },
      { id: 'modern-vienna', name: 'Vienna', color: 'orange', tags: ['Modern', 'Clean'] },
      { id: 'modern-zurich', name: 'Zurich', color: 'emerald', tags: ['Simple', 'Professional'] },
      { id: 'modern-geneva', name: 'Geneva', color: 'teal', tags: ['Modern', 'Elegant'] },
      { id: 'modern-brussels', name: 'Brussels', color: 'amber', tags: ['Creative', 'Bold'] },
      { id: 'modern-dublin', name: 'Dublin', color: 'lime', tags: ['Simple', 'Fresh'] },
      { id: 'modern-lisbon', name: 'Lisbon', color: 'sky', tags: ['Modern', 'Creative'] },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Traditional designs focused on clarity and formality for corporate environments',
    templates: [
      { id: 'professional-executive', name: 'Executive', color: 'gray', tags: ['Corporate', 'Traditional'] },
      { id: 'professional-corporate', name: 'Corporate', color: 'blue', tags: ['Business', 'Conservative'] },
      { id: 'professional-elite', name: 'Elite', color: 'indigo', tags: ['Premium', 'Formal'] },
      { id: 'professional-prestige', name: 'Prestige', color: 'slate', tags: ['Classic', 'Formal'] },
      { id: 'professional-summit', name: 'Summit', color: 'zinc', tags: ['Professional', 'Conservative'] },
      { id: 'professional-legacy', name: 'Legacy', color: 'stone', tags: ['Traditional', 'Established'] },
      { id: 'professional-authority', name: 'Authority', color: 'neutral', tags: ['Formal', 'Serious'] },
      { id: 'professional-diplomat', name: 'Diplomat', color: 'blue', tags: ['Clean', 'Traditional'] },
      { id: 'professional-atlas', name: 'Atlas', color: 'slate', tags: ['Premium', 'Simple'] },
      { id: 'professional-pioneer', name: 'Pioneer', color: 'gray', tags: ['Classic', 'Formal'] },
      { id: 'professional-senator', name: 'Senator', color: 'zinc', tags: ['Traditional', 'Conservative'] },
      { id: 'professional-vantage', name: 'Vantage', color: 'stone', tags: ['Professional', 'Simple'] },
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Eye-catching designs with unique layouts for creative fields',
    templates: [
      { id: 'creative-designer', name: 'Designer', color: 'pink', tags: ['Artistic', 'Bold'] },
      { id: 'creative-artist', name: 'Artist', color: 'purple', tags: ['Colorful', 'Unique'] },
      { id: 'creative-vibrant', name: 'Vibrant', color: 'yellow', tags: ['Energetic', 'Dynamic'] },
      { id: 'creative-mosaic', name: 'Mosaic', color: 'fuchsia', tags: ['Bold', 'Creative'] },
      { id: 'creative-canvas', name: 'Canvas', color: 'rose', tags: ['Artistic', 'Unique'] },
      { id: 'creative-palette', name: 'Palette', color: 'violet', tags: ['Colorful', 'Modern'] },
      { id: 'creative-nova', name: 'Nova', color: 'purple', tags: ['Unique', 'Eye-catching'] },
      { id: 'creative-horizon', name: 'Horizon', color: 'pink', tags: ['Bold', 'Striking'] },
      { id: 'creative-catalyst', name: 'Catalyst', color: 'amber', tags: ['Dynamic', 'Energetic'] },
      { id: 'creative-prism', name: 'Prism', color: 'lime', tags: ['Colorful', 'Fresh'] },
      { id: 'creative-echo', name: 'Echo', color: 'emerald', tags: ['Modern', 'Creative'] },
      { id: 'creative-pulse', name: 'Pulse', color: 'cyan', tags: ['Dynamic', 'Bold'] },
    ],
  },
  {
    id: 'simple',
    name: 'Simple',
    description: 'Minimalist designs focused on content with clean layouts',
    templates: [
      { id: 'simple-minimal', name: 'Minimal', color: 'gray', tags: ['Clean', 'Minimalist'] },
      { id: 'simple-classic', name: 'Classic', color: 'blue', tags: ['Traditional', 'Simple'] },
      { id: 'simple-clean', name: 'Clean', color: 'green', tags: ['Minimalist', 'Basic'] },
      { id: 'simple-essential', name: 'Essential', color: 'slate', tags: ['Basic', 'Clean'] },
      { id: 'simple-pure', name: 'Pure', color: 'zinc', tags: ['Minimalist', 'Clean'] },
      { id: 'simple-basic', name: 'Basic', color: 'stone', tags: ['Simple', 'Easy to read'] },
      { id: 'simple-crisp', name: 'Crisp', color: 'gray', tags: ['Clean', 'Concise'] },
      { id: 'simple-clarity', name: 'Clarity', color: 'sky', tags: ['Basic', 'Clear'] },
      { id: 'simple-direct', name: 'Direct', color: 'blue', tags: ['Simple', 'Straightforward'] },
      { id: 'simple-precise', name: 'Precise', color: 'indigo', tags: ['Clean', 'Focused'] },
      { id: 'simple-modest', name: 'Modest', color: 'emerald', tags: ['Minimalist', 'Understated'] },
      { id: 'simple-plain', name: 'Plain', color: 'neutral', tags: ['Basic', 'Simple'] },
    ],
  },
  {
    id: 'international',
    name: 'International',
    description: 'Templates optimized for international job applications with region-specific formats',
    templates: [
      { id: 'intl-european', name: 'European', color: 'blue', tags: ['EU', 'Formal'] },
      { id: 'intl-american', name: 'American', color: 'red', tags: ['US', 'Standard'] },
      { id: 'intl-british', name: 'British', color: 'indigo', tags: ['UK', 'Traditional'] },
      { id: 'intl-australian', name: 'Australian', color: 'emerald', tags: ['AUS', 'Modern'] },
      { id: 'intl-canadian', name: 'Canadian', color: 'red', tags: ['Canada', 'Professional'] },
      { id: 'intl-german', name: 'German', color: 'amber', tags: ['Germany', 'Detailed'] },
      { id: 'intl-french', name: 'French', color: 'blue', tags: ['France', 'Elegant'] },
      { id: 'intl-japanese', name: 'Japanese', color: 'rose', tags: ['Japan', 'Formal'] },
      { id: 'intl-chinese', name: 'Chinese', color: 'red', tags: ['China', 'Professional'] },
      { id: 'intl-indian', name: 'Indian', color: 'orange', tags: ['India', 'Standard'] },
      { id: 'intl-singapore', name: 'Singapore', color: 'red', tags: ['Singapore', 'Detailed'] },
      { id: 'intl-middle-eastern', name: 'Middle Eastern', color: 'emerald', tags: ['ME', 'Professional'] },
    ],
  },
  {
    id: 'specialized',
    name: 'Specialized',
    description: 'Industry-specific templates for specialized careers and professions',
    templates: [
      { id: 'spec-tech', name: 'Tech Stack', color: 'blue', tags: ['IT', 'Developer'] },
      { id: 'spec-healthcare', name: 'Healthcare', color: 'emerald', tags: ['Medical', 'Clinical'] },
      { id: 'spec-academic', name: 'Academic', color: 'indigo', tags: ['Education', 'Research'] },
      { id: 'spec-legal', name: 'Legal Brief', color: 'slate', tags: ['Law', 'Professional'] },
      { id: 'spec-finance', name: 'Finance', color: 'emerald', tags: ['Banking', 'Accounting'] },
      { id: 'spec-marketing', name: 'Marketing', color: 'purple', tags: ['Creative', 'Digital'] },
      { id: 'spec-executive', name: 'C-Suite', color: 'slate', tags: ['Executive', 'Leadership'] },
      { id: 'spec-engineering', name: 'Engineering', color: 'blue', tags: ['Technical', 'Detailed'] },
      { id: 'spec-science', name: 'Scientific', color: 'cyan', tags: ['Research', 'Academic'] },
      { id: 'spec-hospitality', name: 'Hospitality', color: 'amber', tags: ['Service', 'Customer-facing'] },
      { id: 'spec-creative', name: 'Creative Pro', color: 'rose', tags: ['Design', 'Portfolio'] },
      { id: 'spec-government', name: 'Government', color: 'blue', tags: ['Public Sector', 'Formal'] },
    ],
  },
];

// Find template by ID helper function
export const findTemplateById = (id: string): Template | undefined => {
  for (const category of templateSamples) {
    const template = category.templates.find(t => t.id === id);
    if (template) return template;
  }
  return undefined;
};

// Get all templates in a flat array
export const getAllTemplates = (): Template[] => {
  return templateSamples.flatMap(category => category.templates);
};
