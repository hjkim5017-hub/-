
export enum Category {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  OFFICE = 'Office',
  MINIMALISM = 'Minimalism'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  client: string;
  location: string;
  year: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
