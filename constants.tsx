import React from 'react';
import { Service, Stat, Founder, Testimonial, LaunchEventData } from './types';

export const LOGO_URL = "https://philwalkerwriting.com/wp-content/uploads/2025/09/Catalyst-Performance-1.png";
export const DECO_IMG_1 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/Layer-1-1.png";
export const DECO_IMG_2 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/element-1-1.png";
export const LAUNCH_EVENT_BG_1 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/Layer-0.jpg";
export const LAUNCH_EVENT_BG_2 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/str.jpg";


export const services: Service[] = [
  {
    icon: 'https://philwalkerwriting.com/wp-content/uploads/2025/09/ic11.png',
    title: 'Employee Assistance (EAP)',
    description: 'Confidential, professional counselling for staff and their families. We support mental health, resilience, and balance — giving your people the help they need when they need it.',
  },
  {
    icon: 'https://philwalkerwriting.com/wp-content/uploads/2025/09/ic22.png',
    title: 'Critical Incident Support',
    description: 'Fast, stabilising response when unexpected events impact your workplace. We provide expert support to help your teams recover, regroup, and move forward.',
  },
  {
    icon: 'https://philwalkerwriting.com/wp-content/uploads/2025/09/ic333.png',
    title: 'Performance Growth',
    description: 'Coaching, workshops, and tailored programmes designed to lift resilience, strengthen leadership, and drive sustainable performance across your organisation.',
  },
];

export const stats: Stat[] = [
    { value: 15, label: 'Years Expertise', suffix: '+' },
    { value: 1000, label: 'Clients Supported', suffix: '+' },
    { value: 24, label: 'Flexibility', suffix: '/7' },
];

export const founders: Founder[] = [
    {
        name: 'Phil Walker',
        imageUrl: 'https://philwalkerwriting.com/wp-content/uploads/2025/09/me-1.jpg',
        bio: [
            'Phil has been a practicing and qualified Counsellor since 2008 and has a degree in Psychology (2001). He has and over two decades of work experience across the UK, Australia, South Korea, Thailand and New Zealand. His early work included teaching, youth care, and behavioural support, alongside volunteer work for organisations such as Childline and Victim Support.',
            'Since moving to New Zealand in 2009, Phil has worked extensively in the mental health sector — from brain injury rehabilitation to forensic mental health — while also running his own business offering counselling services since 2010. He has supported organisations in multiple sectors to navigate through critical incidents support by offering group teaching/therapy sessions as well as individual EAP Counselling services. In 2015 Phil was a partner in setting up a branch of a charity in Thailand to support refugees.',
            'Phil also works with individuals and couples to help them to navigate life and relationship challenges and created digital programs to help people to ground their lives and build more empowered communication with others. He is the author of ‘Personal Growth Reflections’, now available on Amazon.',
            'Dedicated to his own growth as much as his clients’, Phil has undertaken ongoing therapy, attended men’s retreats, and performance-focused programs. Beyond counselling, he is also a property investor and a filmmaker, currently directing ‘Dream End’, a short film exploring grief and the healing power of play.',
            'Catalyst Performance reflects this blend of clinical expertise, global perspective, and entrepreneurial vision — helping people and organisations turn challenge into growth.',
        ],
    },
    {
        name: "Henare Hona O'Brien",
        imageUrl: 'https://philwalkerwriting.com/wp-content/uploads/2025/09/about-henare.webp',
        bio: [
            'Henare Hona O’Brien has worked extensively internationally over the last 20 years in performance, leadership and communication. He has worked with tens of thousands of people across New Zealand, Australia, Singapore, Europe, America and Indonesia including All Blacks, special forces soldiers, professors, lawyers, politicians and leaders who have worked to improve outcomes in their fields.',
            'He has developed a generative learning model through working with industry leaders and organisations such as NASA, Reebok, the billion-dollar company NZ Steel and other global high-performance teams. His ontological model is designed to move people into action by cutting out surface-level intellectual conversations and focusing on what actually generates results.',
        ],
    },
];


export const testimonials: Testimonial[] = [
    {
      quote: 'Henare is a great trainer.',
      author: 'Brendon Burchard',
      title: 'New York Times #1 Best Selling Author',
    },
    {
      quote: "Things I’ll take from Henare’s sessions is to be honest with yourself and to take things and make them workable.",
      author: 'Troy Flavell',
      title: 'Former All Black Rugby Player',
    },
    {
      quote: 'Most powerful and intense week I’ve experienced and trust me I’ve had rough weeks. With an SAS Marine’s background, I know what tough feels like. When it comes to Henare, I have a lot to be grateful for.',
      author: 'John Smith',
      title: 'Former SAS Soldier',
    },
];

export const TESTIMONIALS_INTRO = "The coaching leaves a lasting impression on leaders, athletes, and professionals from all walks of life. Whether working with bestselling authors, high-performance trainers, elite athletes, or military veterans, the sessions are consistently described as powerful, transformative, and deeply practical. Participants walk away with greater self-awareness, tools to turn challenges into opportunities, and a renewed sense of strength and clarity.";


export const launchEventData: LaunchEventData = {
    superTitle: "Turning Challenge Into Growth",
    title: "Welcome to the Launch",
    date: "10am to 4pm",
    time: "Auckland Event Centre",
    venue: "New Zealand",
    fullDate: "Saturday 28 Feb 2026 to Sunday 1 March 2026.",
    imageUrl: LAUNCH_EVENT_BG_1,
    about: {
        title: "Catalyst Performance Launch Event",
        description: "We’re excited to announce the official launch of Catalyst Performance — a new chapter dedicated to empowering individuals and businesses to transform challenges into lasting growth. This event will bring together inspiring speakers, valuable insights, and an opportunity to connect with forward-thinking professionals."
    },
    whyAttend: {
        title: "Why Attend",
        items: [
            { number: "01.", title: "Inspiring Keynotes", description: "Learn from thought leaders and proven experts" },
            { number: "02.", title: "Proven Expertise", description: "Gain practical strategies for real-world impact" },
            { number: "03.", title: "Real Impact", description: "Build meaningful connections with like-minded professionals" },
            { number: "04.", title: "Networking Opportunity", description: "Be part of an event that sparks growth and momentum" }
        ]
    },
    highlights: {
        title: "Event Highlights",
        items: [
            "Keynote sessions with industry experts",
            "Live Q&A opportunities",
            "Networking drinks and conversations",
            "Exclusive launch-only offers for attendees"
        ],
        imageUrl: LAUNCH_EVENT_BG_2
    },
    registration: {
        title: "Secure Your Spot",
        description: "Don’t miss this one-time event — a chance to spark ideas, gain proven strategies, and connect with people turning challenges into growth. From fresh insights to valuable networking, this launch sets the stage for meaningful change."
    }
};