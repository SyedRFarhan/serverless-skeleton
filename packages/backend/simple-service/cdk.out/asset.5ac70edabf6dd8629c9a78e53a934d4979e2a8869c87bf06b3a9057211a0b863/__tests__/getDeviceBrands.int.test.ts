import { APIGatewayEvent } from 'aws-lambda';
import createEvent from 'aws-event-mocks';
import Joi from '@hapi/joi';

import LambdaTester from 'lambda-tester';
import getDeviceBrands from '../getDeviceBrands';

const brandList = [
  {
    id: 1,
    displayName: 'Apple',
    categoryId: 1,
  },
  {
    id: 2,
    displayName: 'Samsung',
    categoryId: 1,
  },
  {
    id: 3,
    displayName: 'Google',
    categoryId: 1,
  },
  {
    id: 4,
    displayName: 'LG',
    categoryId: 1,
  },
  {
    id: 5,
    displayName: 'OnePlus',
    categoryId: 1,
  },
  {
    id: 7,
    displayName: 'Essential',
    categoryId: 1,
  },
];

describe('getDeviceBrands lambda integration tests', () => {
  //   test('It should execute', async () => {
  //   const event = createEvent({
  //     template: 'aws:apiGateway',
  //     merge: {},
  //   });
  //   await getDeviceBrands(event);
  // });
  //   test('It should return a list of brands', async () => {
  //     const event = createEvent({
  //       template: 'aws:apiGateway',
  //       merge: {
  //         body: {},
  //       },
  //     });
  //     const result = await getDeviceBrands(event);
  //     expect(result).toEqual(brandList);
  //   });

  test('It should return a list of brands that match the brand schema', async () => {
    const event = createEvent({
      template: 'aws:apiGateway',
      merge: {},
    });
    const schema = Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        displayName: Joi.string(),
        categoryId: Joi.number(),
      })
    );

    const brandList = await getDeviceBrands(event);

    await schema.validateAsync(brandList);
  });
});
