import 'server-only';
import { readCollection } from './db';

export const defaultSettings = {
  email: 'shukravedaherbals@gmail.com',
  phone: '+91 93193 25065',
  address: 'Demo Address, New Delhi, India'
};

export const defaultConditions = [
  { id: 'kidney-disorder', type: 'kidney', title: 'Kidney Disorder', text: 'Personalized herbal and lifestyle support for kidney wellness.' },
  { id: 'skin-disorder', type: 'skin', title: 'Skin Disorder', text: 'Holistic herbal care for healthier, clearer skin.' },
  { id: 'sexual-disorder', type: 'sexual', title: 'Sexual Disorder', text: 'Private, respectful herbal guidance for sexual wellness.' },
  { id: 'male-infertility', type: 'fertility', title: 'Male Infertility', text: 'Confidential herbal support for male fertility health.' }
];

export const defaultTestimonials = [
  { id: 't1', name: 'Happy Patient', concern: 'Kidney wellness', text: 'I found Shukravedaherbals online and spoke with their team. The guidance was clear and respectful from the very first call.\n\nAfter following the plan for a few weeks, I feel more energetic and I am very satisfied with the care I received.', published: true },
  { id: 't2', name: 'Happy Patient', concern: 'Skin care', text: 'The consultation was private and unhurried. My health coach checked in regularly and explained each part of the routine.\n\nIt made the whole plan easy to follow.', published: true },
  { id: 't3', name: 'Happy Patient', concern: 'Male wellness', text: 'I was hesitant to talk about my concern, but the team made me comfortable from the first call.\n\nI appreciated the confidentiality and the personal attention.', published: true }
];

export async function getSettings() {
  return { ...defaultSettings, ...(await readCollection('settings', {})) };
}
export const getConditions = () => readCollection('conditions', defaultConditions);
export const getTestimonials = () => readCollection('testimonials', defaultTestimonials);
