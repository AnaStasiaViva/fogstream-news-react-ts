import { Img } from 'components/Img';
import { Weather } from 'interfaces';
import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface IForecast extends HTMLAttributes<HTMLElement> {
  weather: Weather
}

export function Forecast({ weather }: IForecast) {
  return (
    <div className={ styles.weatherContainer }>
      <div className={ styles.weatherImg }>
        <Img src={weather.weather_icon} />
      </div>
      <span>
        { weather.temperature }
          °C
      </span>
      <span>
        { weather.location }
      </span>
    </div>
  );
}
