// types.ts
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface Founder {
    name: string;
    title: string;
    bio: string[];
}

export interface LaunchEventData {
    superTitle: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    fullDate: string;
    eventDate: string; // ISO 8601 format: YYYY-MM-DDTHH:mm:ss
    imageUrl: string;
    about: {
        title: string;
        description: string;
    };
    whyAttend: {
        title: string;
        items: {
            number: string;
            title: string;
            description: string;
        }[];
    };
    highlights: {
        title: string;
        items: string[];
        imageUrl: string;
    };
    registration: {
        title: string;
        description: string;
    };
}