import {Static, Type} from '@sinclair/typebox'
import {apiResponseSchema} from './api.mapper';

export const BookSchema = Type.Object({
    id: Type.Number(),
    img: Type.String(),
    title: Type.String(),
    description: Type.String(),
});
export const BookRequestSchema = Type.Object({
    title: Type.String(),
    description: Type.String(),
})

export const BookListSchema = Type.Array(BookSchema);

export type BookListDto = Static<typeof BookListSchema>;
export type BookRequestDto = Static<typeof BookRequestSchema>;
export type BookDto = Static<typeof BookSchema>;
export const BookListReplySchema = apiResponseSchema(BookListSchema);
export const BookReplySchema = apiResponseSchema(BookSchema);
