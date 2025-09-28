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
    imageUrl: string;
    bio: string[];
}

export interface EventHighlight {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface LaunchEventData {
    superTitle: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    fullDate: string;
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
