import {Static, Type} from '@sinclair/typebox'
import {apiResponseSchema} from './api.mapper';

export const ForecastByCityParamsSchema = Type.Object({city: Type.String()});
export const ForecastByCityQuerySchema = Type.Object({delay: Type.Optional(Type.Number({minimum: 0}))});

export const ForecastSchema = Type.Object({
    city: Type.String(),
    temperature: Type.Number(),
    wind: Type.Number(),
    precipitation: Type.String()
})

export type ForecastDto = Static<typeof ForecastSchema>;
export type ForecastByCityRequestDto = Static<typeof ForecastByCityParamsSchema>;
export type ForecastByCityQuery = Static<typeof ForecastByCityQuerySchema>;

export const ForecastReplySchema = apiResponseSchema(ForecastSchema);

export function capitalizeFirstLetter(city: string) {
    return city.charAt(0).toUpperCase() + city.slice(1);
}

export const allowedCityList = [
    'tartu',
    'tallinn',
    'berlin',
    'barcelona',
    'paris',
    'copenhagen',
    'helsinki',
    'riga'
]

export function formatError() {
    return `City not found in the list. Allowed cities are: ${allowedCityList.map(capitalizeFirstLetter).join(', ')}`;
}

export function formatResponse(forecast: ForecastDto) {
    return {
        ...forecast,
        city: capitalizeFirstLetter(forecast.city),
    }
}
