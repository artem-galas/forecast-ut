import {Static, Type} from '@sinclair/typebox'

export const MagnitudeByCityParamsSchema = Type.Object({city: Type.String()});

export const MagnitudeSchema = Type.Object({
    city: Type.String(),
    magnitude: Type.Number(),
})

export type MagnitudeDto = Static<typeof MagnitudeSchema>;
export type MagnitudeByCityRequestDto = Static<typeof MagnitudeByCityParamsSchema>;