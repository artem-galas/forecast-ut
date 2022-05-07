import * as data from '../db/data.json'
import {BookDto, BookRequestDto} from '../mappers/books.mapper';

export function getRandomArbitrary(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function getBooks(from = 0, to = 20) {
    return data.slice(from, to);
}

export function createBook(book: BookRequestDto): BookDto {
    return {
        id: getRandomArbitrary(40, 90),
        img: '',
        title: book.title,
        description: book.description,
    }
}
