
import React from 'react';
import { PostContent } from 'components/NewsItem';
import { Img as Image }from '../Img';

interface ISliderItem extends React.HTMLAttributes<HTMLElement>{
  value: any
  variant: string
}

export function SliderItem({ value, variant }: ISliderItem) {
  return (
    <>
      <Image
        src={value.image_url}
        alt="img"
      />
      <PostContent
        { ...value }
        variant={ variant }
      />
    </>
  )
}
