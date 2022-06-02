import * as data from '../db/restaurants.json'

export function getRandomArbitrary(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function getRestaurants(from = 0, to = 20) {
    return data.slice(from, to);
}
