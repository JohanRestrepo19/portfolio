// Project types
export type Project = {
  title: string;
  desc: string;
  detailedDesc: string[];
  slug: string;
  thumbnail: string;
  contentImages?: string[];
  tags: Tags;
};

export type Tags = {
  stack: string;
  source?: string;
  website?: string;
};

// Dicitonary types
export type Dictionary = {
  layout: Layout;
  pages: Pages;
};

export type Layout = {
  navbar: Navbar;
  footer: string;
};

export type Navbar = {
  projects: string;
  source: string;
};

export type Pages = {
  home: HomePage;
  projects: ProjectsPage;
  project: ProjectPage;
  notFound: NotFoundPage;
};

export type HomePage = {
  heading: Heading;
  sections: Sections;
};

export type Heading = {
  role: string;
};

export type Sections = {
  profile: Profile;
  preferredStack: PreferredStack;
  bio: Bio;
  likes: Likes;
  web: Web;
};

export type Bio = {
  title: string;
  bioItems: BioItem[];
};

export type BioItem = {
  title: string;
  description: string;
  year: string;
};

export type Likes = {
  title: string;
  content: string;
};

export type Profile = {
  title: string;
  description: string;
  cta: string;
};

export type PreferredStack = {
  title: string;
}

export type Web = {
  title: string;
};

export type ProjectPage = {
  tags: Tags;
};

export type ProjectsPage = {
  heading: string;
};

export type NotFoundPage = {
  error: string;
  msg: string;
  button: string;
};
