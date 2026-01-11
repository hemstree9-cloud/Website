
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Facility {
  id: string;
  name: string;
  size: string;
  features: string[];
  imageUrl: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
}

export interface Client {
  name: string;
  industry: string;
  logo: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
