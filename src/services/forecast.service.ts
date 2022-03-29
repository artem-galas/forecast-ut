import {ForecastDto} from '../mappers/forecast.mapper';

export const weatherIcons = ['☀️', '⛅', '☁️', '🌩️', '🌧️', '🌦️', '🌨️'];

export function getRandomArbitrary(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function getForecast(city: string): ForecastDto {
    return {
        city,
        precipitation: weatherIcons[getRandomArbitrary(0, weatherIcons.length - 1)],
        temperature: getRandomArbitrary(-20, 30),
        wind: getRandomArbitrary(0, 10)
    }
}
