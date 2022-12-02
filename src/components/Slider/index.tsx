
import styles from './styles.module.scss';
import { SliderItem } from './SliderItem';
import { LinkItem } from 'components/LinkItem';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { SkeletonBox } from 'components/SkeletonBox';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/manipulation";

interface ISlider {
  onClick: (idx: string) => void
  post: any
  keys: string[]
}

export function SliderCarousel({ post, onClick, keys }: ISlider) {

  if (!post || !keys) {
    return (
      <SkeletonBox />
    )
  }


  return (
    <div className={styles.slider}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('')}
        onSwiper={(swiper) => swiper.slideNext() }
      >
        { keys && keys.map((item: any, idx: number) => (
          <SwiperSlide key={post[item].link + idx}>
            <LinkItem
              value={post[item]}
              onClick={ onClick}
              className={styles.card}
              idx={ item }
            >
              <SliderItem
                value={post[item]}
                variant='overImg'
              />
            </LinkItem>
          </SwiperSlide>
        ))}
      </Swiper>




    </div>


  )

}
