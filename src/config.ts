export const SITE = {
  website: "https://filipkastovsky.github.io/",
  author: "Filip Kastovsky",
  desc: "Just another blog.",
  title: "Filip Kastovsky",
  ogImage: "og.png",
  postPerPage: 4,
};

export const LOCALE = ["en-EN"];

export const GITHUB = {
  name: "Github",
  href: "https://github.com/filipkastovsky",
  linkTitle: `Take a look at my Github`,
} as const;

export const LINKEDIN = {
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/filip-kastovsky/",
  linkTitle: `Visit my LinkedIn`,
} as const;

export const EMAIL = {
  name: "Mail",
  href: "mailto:devfilipkastovsky@gmail.com",
  linkTitle: `Send me an email`,
} as const;

export const SOCIALS = [GITHUB, LINKEDIN, EMAIL] as const;
