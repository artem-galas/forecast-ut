import {Static, Type} from '@sinclair/typebox'
import {apiResponseSchema} from './api.mapper';

export const RestaurantSchema = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    address: Type.String(),
    image: Type.String(),
    priceRange: Type.Number(),
});
export const BookRequestSchema = Type.Object({
    title: Type.String(),
    description: Type.String(),
})

export const RestaurantListSchema = Type.Array(RestaurantSchema);

export type RestaurantListDto = Static<typeof RestaurantListSchema>;
export const RestaurantListReplySchema = apiResponseSchema(RestaurantListSchema);
