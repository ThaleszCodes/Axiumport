export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}