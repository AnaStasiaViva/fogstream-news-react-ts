
import styles from './styles.module.scss';
import { SliderItem } from './SliderItem';
import { LinkItem } from 'components/LinkItem';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

interface ISlider {
  onClick: (idx: string) => void
  post: any
  keys: string[]
}

export function Slider({ post, onClick, keys }: ISlider) {

  return (
    <div className={styles.slider}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
