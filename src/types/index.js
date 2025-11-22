export interface Product {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
