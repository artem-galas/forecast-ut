import {build} from '../helper'

const app = build();

describe('Forecast routes', () => {
  it('GET /forecast/:city returns weather for city', async () => {
    const res = await app.inject({
      url: '/forecast/Tartu'
    })

    const { data } = res.json();

    expect(Object.keys(data)).toEqual(['city', 'temperature', 'wind', 'precipitation']);
  })

  it('GET /forecast/:city returns BadRequest if city not found', async () => {
    const res = await app.inject({
      url: '/forecast/random-cityname'
    })

    const { data, error } = res.json();

    expect(data).toBe(null);
    expect(res.statusCode).toBe(404);
  })
})

