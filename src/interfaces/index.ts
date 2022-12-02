import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PropTypes<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;


export interface FormValues{
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export interface IOptitons{
  id: string | number,
  name: string | number,
  code: string
}

export interface INavLinks{
  link: string,
  name: string
}

export interface IRes{
  results: INewsFetched[]
  nextPage: number
  status: string
  totalResults: number
}


export interface IWeather {
  timezone: string
  current: {
    temp: string | number | any
    weather: {
      id: string | number | any
      main: string
      description: string
      icon: string
    }
  }
}

export interface Weather{
  temperature: number | string,
  weather_icon: string,
  location: string
}

export interface INewsFetched{
  category: string[] | null,
  content:  string | null,
  country: string[] | null,
  creator: string[],
  description: string,
  image_url: string | null,
  keywords: null | any
  language: string
  link: string
  pubDate:string
  source_id: string
  title: string
  video_url: string | string[] | null
}

export interface IValues {
  category: string
  language: string
  page: number
}

export interface IHomePageBlockProps{
  data?: INewsFetched[] | any
  handlePost: (value: any) => void
  title: string
  ids?: any
}

export interface ISocial {
  name: string
  address: string
}
