export interface NavLink {
  label: string;
  href: string;
}

export interface CardItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Dr. Maya Reynolds, PsyD",
  tagline:
    "Anxiety, trauma & burnout therapy in Santa Monica, CA & telehealth across California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  availability: "In-person sessions in Santa Monica & secure telehealth across California",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  h1: "Anxiety & Trauma Therapy in Santa Monica, CA",
  subhead:
    "Rebuild a sense of steadiness, quiet the overthinking, and reconnect with yourself with warm, evidence-based care from Dr. Maya Reynolds, PsyD.",
  body: "In-person sessions in Santa Monica and secure telehealth across California, for adults who look put-together on the outside but feel exhausted, anxious, or stuck within.",
  ctaLabel: "Book a Free Consultation",
};

export const trustBuilding = {
  headline: "You look like you have it together. Inside, it might feel different.",
  subhead:
    "Many of the people I work with are high-achieving, thoughtful, and self-aware, but quietly exhausted, overthinking, or emotionally on edge.",
  body: [
    "You may be functioning well on the outside while carrying constant worry, tension in your body, restless nights, or the sense that you're always bracing for something to go wrong. Others I work with are still feeling the impact of earlier experiences in their relationships, their confidence, or their sense of safety.",
    "Therapy can be a place to finally slow down, understand what's happening beneath the surface, and build a steadier relationship with yourself.",
  ],
};

export const whoIHelp: CardItem[] = [
  {
    title: "High-Achieving Professionals",
    description:
      "If you're managing constant pressure, overthinking, or a nervous system that won't switch off, we'll work together to help you feel more regulated and at ease in daily life.",
  },
  {
    title: "Trauma Survivors",
    description:
      "Whether from a single event or long-standing patterns rooted in childhood or chronic stress, trauma-informed care, paced carefully, can help you feel safer in your body and your life.",
  },
  {
    title: "Entrepreneurs & Creatives",
    description:
      "Many of my clients are entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy can help you reconnect and build a more sustainable way of working and living.",
  },
];

export const quote = {
  text: "Therapy isn't just about symptom relief, it's about insight, resilience, and coming home to yourself.",
  author: "Dr. Maya Reynolds, PsyD",
};

export const expertiseKeywords: string[] = [
  "Anxiety & Panic",
  "Trauma & PTSD",
  "EMDR",
  "Burnout & Perfectionism",
  "CBT",
  "Mindfulness-Based Therapy",
  "Body-Oriented Therapy",
  "Stress Management",
  "Entrepreneurs & Creatives",
  "In-Person & Telehealth",
  "Santa Monica & CA-wide",
  "…and more",
];

export const about = {
  heading: "About Dr. Maya Reynolds, PsyD",
  subhead: "Licensed Clinical Psychologist, Santa Monica, CA",
  body: [
    "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.",
    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives, not just during sessions.",
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  ],
};

export const services: CardItem[] = [
  {
    title: "Anxiety & Panic Treatment",
    description:
      "Constant worry, racing thoughts, or panic that shows up in your body? I use CBT and mindfulness-based approaches to help you understand your anxiety and build lasting tools to feel calmer and more in control.",
  },
  {
    title: "Trauma Therapy & EMDR",
    description:
      "Whether trauma is recent or rooted in childhood, I offer paced, safety-focused care using EMDR and body-oriented techniques to help you feel more regulated, safe, and whole.",
  },
  {
    title: "Burnout & Perfectionism Support",
    description:
      "For entrepreneurs, creatives, and high-achievers running on empty, we'll work together to loosen perfectionism's grip and build a more sustainable relationship with work and yourself.",
  },
];

export const ourOffice = {
  heading: "A Calm Space to Begin",
  body: "My Santa Monica office is a quiet, private space designed to feel calm and grounding, filled with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease the moment they arrive.",
  address: siteConfig.address,
  note: "In-person sessions available at my Santa Monica office, with secure telehealth offered for clients throughout California.",
};

export const faqs: FaqItem[] = [
  {
    question: "Do you offer in-person and online sessions?",
    answer:
      "Yes, I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "What therapy methods do you use?",
    answer:
      "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you need.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Yes. I work with both single-incident and more complex, long-standing trauma, with an emphasis on safety, stabilization, and pacing that feels right for you.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Most of my clients are adults, often high-achieving professionals, entrepreneurs, and creatives, navigating anxiety, burnout, or the lasting effects of past experiences.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation using the button above, and we'll find a time to talk about what you're looking for and whether we're a good fit.",
  },
];

export const ctaBand = {
  heading: "Ready to feel more like yourself again?",
  body: "Reach out for a free consultation and take the first step toward calmer, more grounded days.",
  ctaLabel: "Book a Free Consultation",
};

export const footerNav: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
