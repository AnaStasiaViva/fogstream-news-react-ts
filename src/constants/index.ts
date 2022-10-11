import { FormValues, INavLinks, IValues } from "interfaces";

export const tagColorsList = ['#0088FF', '#FE4A51', '#A56CBD', '#2ECC71', '#997C00', '#49CFE8', '#4C60F5'];

export const formInitValues: FormValues = { firstName: '', lastName: '', email: '', password: '' };

export const NAVIGATION_LINKS : INavLinks[] = [
  { link: "/", name: "Home" },
  { link: "/news/world", name: "World" },
  { link: "/news/sports", name: "Sports" },
  { link: "/news/business", name: "Business" },
  { link: "/news/entertainment", name: "Entertainment" },
  { link: "/news/technology", name: "Tech" },
  { link: "/news/politics", name: "politics" },
];

export const NAVIGATION_RECOMMENDATION : INavLinks[] = [
  { link: "/top", name: "Top News" },
];

export const categoryValues: IValues[] = [
  {
    category: 'sports',
    language: 'en',
    page: 1,
  },
  {
    category: 'politics',
    language: 'en',
    page: 1,
  },
  {
    category: 'entertainment',
    language: 'en',
    page: 1,
  },
  {
    category: 'business',
    language: 'en',
    page: 1,
  },
  {
    category: 'technology',
    language: 'en',
    page: 1,
  },
  {
    category: 'world',
    language: 'en',
    page: 1,
  },
  {
    category: 'top',
    language: 'en',
    page: 1,
  },

]