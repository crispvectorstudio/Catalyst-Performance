import React from 'react';
import { Service, Stat, Founder, Testimonial, LaunchEventData } from './types';

export const LOGO_URL = "https://philwalkerwriting.com/wp-content/uploads/2025/09/Catalyst-Performance-1.png";
export const DECO_IMG_1 = "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=2070&auto=format&fit=crop";
export const DECO_IMG_2 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/element-1-1.png";
export const LAUNCH_EVENT_BG_1 = "https://images.unsplash.com/photo-1531315639996-3a7313a23cc1?q=80&w=2070&auto=format&fit=crop";
export const LAUNCH_EVENT_BG_2 = "https://philwalkerwriting.com/wp-content/uploads/2025/09/str.jpg";

export const CONTACT_EMAIL = "info@catalystperformance.com";
export const CONTACT_PHONE = "+64 21 123 4567";


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
        name: "Henare Hona O'Brien",
        title: "Master Performance Strategist",
        bio: [
            'Henare Hona O’Brien has worked extensively internationally over the last 20 years in performance, leadership and communication. He has worked with tens of thousands of people across New Zealand, Australia, Singapore, Europe, America and Indonesia including All Blacks, special forces soldiers, professors, lawyers, politicians and leaders who have worked to improve outcomes in their fields.',
            'He has developed a generative learning model through working with industry leaders and organisations such as NASA, Reebok, the billion-dollar company NZ Steel and other global high-performance teams. His ontological model is designed to move people into action by cutting out surface-level intellectual conversations and focusing on what actually generates results.',
        ],
    },
    {
        name: 'Phil Walker',
        title: "Human Behaviour & Mindset Architect",
        bio: [
            'Phil has been a practicing and qualified Counsellor since 2008 and has a degree in Psychology (2001). He has and over two decades of work experience across the UK, Australia, South Korea, Thailand and New Zealand. His early work included teaching, youth care, and behavioural support, alongside volunteer work for organisations such as Childline and Victim Support.',
            'Since moving to New Zealand in 2009, Phil has worked extensively in the mental health sector — from brain injury rehabilitation to forensic mental health — while also running his own business offering counselling services since 2010. He has supported organisations in multiple sectors to navigate through critical incidents support by offering group teaching/therapy sessions as well as individual EAP Counselling services. In 2015 Phil was a partner in setting up a branch of a charity in Thailand to support refugees.',
            'Phil also works with individuals and couples to help them to navigate life and relationship challenges and created digital programs to help people to ground their lives and build more empowered communication with others. He is the author of ‘Personal Growth Reflections’, now available on Amazon.',
            'Dedicated to his own growth as much as his clients’, Phil has undertaken ongoing therapy, attended men’s retreats, and performance-focused programs. Beyond counselling, he is also a property investor and a filmmaker, currently directing ‘Dream End’, a short film exploring grief and the healing power of play.',
            'Catalyst Performance reflects this blend of clinical expertise, global perspective, and entrepreneurial vision — helping people and organisations turn challenge into growth.',
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
      quote: 'Most powerful and intense week I’ve experienced... When it comes to Henare, I have a lot to be grateful for.',
      author: 'John Smith',
      title: 'Former SAS Soldier',
    },
];

export const TESTIMONIALS_INTRO = "Don't just take our word for it. Our methods have forged winners across every conceivable field. These are their words.";


export const launchEventData: LaunchEventData = {
    superTitle: "THE UNFAIR ADVANTAGE",
    title: "THE CATALYST EVENT",
    date: "10am to 4pm",
    time: "Auckland Event Centre",
    venue: "New Zealand",
    fullDate: "Saturday 28 Feb 2026 to Sunday 1 March 2026.",
    eventDate: '2026-02-28T10:00:00',
    imageUrl: LAUNCH_EVENT_BG_1,
    about: {
        title: "FORGE YOUR FUTURE",
        description: "This isn't just another event. This is the turning point. The Catalyst Event is for the ambitious, the relentless, the leaders who refuse to settle for mediocrity. We will arm you with the psychological tools and high-performance strategies used by world-class leaders and elite operators."
    },
    whyAttend: {
        title: "WHAT YOU WILL MASTER",
        items: [
            { number: "01.", title: "Elite Mindset", description: "Shatter your limiting beliefs and install the mental frameworks of the top 1%." },
            { number: "02.", title: "Strategic Dominance", description: "Learn battle-tested strategies to outmaneuver your competition and command your industry." },
            { number: "03.", title: "Powerful Networks", description: "Connect with a curated group of high-achievers and game-changers." },
            { number: "04.", title: "Lasting Transformation", description: "This isn't motivation. It is a permanent upgrade to your personal and professional operating system." }
        ]
    },
    highlights: {
        title: "EVENT ARSENAL",
        items: [
            "Keynotes from Master Strategists",
            "Live Deconstruction of Elite Performance",
            "High-Stakes Networking Opportunities",
            "Exclusive Access to Post-Event Resources"
        ],
        imageUrl: LAUNCH_EVENT_BG_2
    },
    registration: {
        title: "YOUR FUTURE IS CALLING.",
        description: "The first step is the hardest. We make it simple. Contact us now to secure your position among the elite. Spots are extremely limited."
    }
};