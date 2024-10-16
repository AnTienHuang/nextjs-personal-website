interface Page {
  name: string
  href: string
}

interface Project {
  slug: string
  title: string
  subtitle: string
  date: string
  order: number
  content: string
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  descriptions: string[];
}
