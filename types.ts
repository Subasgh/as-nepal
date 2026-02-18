
// Import React to fix "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Course {
  level: string;
  title: string;
  duration: string;
  price: string;
  features: string[];
}

export interface CareerPath {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
