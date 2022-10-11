import { Forecast, HDate, Social } from 'components';
import { Weather } from 'interfaces';
import { useCallback, useEffect } from 'react';
import { useMemo, useState } from 'react';
import { forecastApi } from 'services/forecastService';
import { getCurrentDate, join } from 'utils';
import css from 'assets/styles/global.module.scss';
import styles from './styles.module.scss';

export function Topline() {

  const { data: weatherData, isLoading, error } = forecastApi.useGetForecastQuery({ query: "New York" });

  const date = useMemo(getCurrentDate, []);

  const [weather, setWeather] = useState<Weather>({
    temperature: 0,
    weather_icon: '',
    location: ''
  });

  const setWeatherParams = useCallback((data: any) => {
    if (!data) return;
    const { current, request } = data;

    setWeather({
      temperature: current?.temperature,
      weather_icon: current?.weather_icons[0],
      location: request?.query
    });

  }, [weatherData]);

  useEffect(() => {
    setWeatherParams(weatherData);
  }, [weatherData]);


  return (
    <div className={styles.headContainer}>
      <div className={join(css.content, styles.inner)}>
        {!isLoading && !error && <Forecast weather={weather} />}
        <HDate date={date} />
        <Social />
      </div>
    </div>
  );
}
