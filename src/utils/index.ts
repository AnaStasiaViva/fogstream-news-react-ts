import { tagColorsList } from '../constants';

export function join(...args: any) {
  let result = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      if (result) result += ' ';
      result += args[i];
    }
  }
  return result;
}

export function getCurrentDate() {
  return new Date().toDateString();
}

export function trimString (string: string, length: any) {
  return string.length > length
    ? string.substring(0, length) + '...'
    :string;
};

export function reduceArray (items: any, start: number, end: number) {
  const res = items ? [...items] : [];
  if (res.length <= 0) return;
   return res.splice(start, end)
}

export function random(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export function getCategoryColor() {
  return tagColorsList[random(0, tagColorsList.length)]
}


export function enableScroll() {
  document.documentElement.style.height = ''
  document.documentElement.style.overflow = ''
  document.body.style.overflowY = ''
}

export function disableScroll() {
  document.documentElement.style.height = '100vh'
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflowY = 'scroll'
}

export const normalized = (list: any) => {
  const data: any = {};
  let ids: any = [];
  list.forEach((item: any) => {
    data[item.link] = item
  })
  ids = Object.keys(data);
  return { data, ids };
}
