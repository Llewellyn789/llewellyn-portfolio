export type ProjectCategory = 'vans' | 'kitchens' | 'web-development';

export interface Project {
  id: number;
  title: string;
  description?: string; // Description is optional
  category: ProjectCategory;
  imageUrl?: string; // Optional image URL
  beforeImageUrl?: string; // Add before image URL
  externalUrl?: string; // Optional external link
} 