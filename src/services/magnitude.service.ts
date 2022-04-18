import {MagnitudeDto} from '../mappers/magnitude.mapper';

export function getRandomFloat(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(1));
}

export function getMagnitude(city: string): MagnitudeDto {
    return {
        city,
        magnitude: getRandomFloat(0, 9.5),
    }
}