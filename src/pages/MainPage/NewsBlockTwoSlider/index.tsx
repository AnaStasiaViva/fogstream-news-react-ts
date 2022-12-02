
import { CardNews, SectionTitle, SliderCarousel } from 'components';
import { SkeletonBox } from 'components/SkeletonBox';
import { useAppSelector } from 'hooks';
import { IHomePageBlockProps } from 'interfaces';
import { selectState } from 'redux/selectors';
import styles from './styles.module.scss';

export function NewsBlockTwoSlider({ handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useAppSelector(selectState);

  const key: string[] = ids[title];
  if (!key) {
    return (
      <SkeletonBox />
    )
  }

  return (
    <section className={styles.container}>
      <SectionTitle
        title={ title }
      />

      <SliderCarousel
        onClick={ handlePost }
        post={list}
        keys={key}
      />

      <div className={ styles.smallVersion }>
        <CardNews
          variant='small'
          onClick={handlePost}
          data={ list[key[0]] }
          idx={key[0] }
        />
        <CardNews
          variant='small'
          onClick={handlePost}
          data={list[key[2]]}
          idx={key[2]}
        />
        <CardNews
          variant='small'
          onClick={handlePost}
          data={list[key[3]]}
          idx={key[3]}
        />

      </div>

    </section>
  );
}
