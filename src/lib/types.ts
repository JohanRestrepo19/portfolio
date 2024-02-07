// Project types
export type Project = {
  title: string;
  description: string;
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
  navbar: Navbar;
  sections: Sections;
  footer: string;
};

export type Navbar = {
  projects: string;
  source: string;
};

export type Sections = {
  profile: Profile;
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
};

export type Web = {
  title: string;
};
