import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

import { QuoteServiceStack } from '../QuoteServiceStack';

function initStack() {
  const app = new cdk.App();
  const stack = new QuoteServiceStack(app, 'QuoteServiceStack');

  return stack;
}
describe('Quote Service infrastructure stack', () => {
  // describe('dynamodb', () => {
  //   test('A table named `fliptable` should be created with partion key `pk` and sort key `sk`', () => {
  //     const stack = initStack();
  //     expect(stack).toHaveResource('AWS::DynamoDB::Table', {
  //       TableName: 'fliptable',
  //       KeySchema: [
  //         {
  //           AttributeName: 'pk',
  //           KeyType: 'HASH',
  //         },
  //         {
  //           AttributeName: 'sk',
  //           KeyType: 'RANGE',
  //         },
  //       ],
  //     });
  //   });
  // });

  describe('Quote Service API', () => {
    test('An API Gateway construct called `quote-api` should be created', () => {
      const stack = initStack();

      expect(stack).toHaveResource('AWS::ApiGatewayV2::Api', {
        Name: 'quote-api',
        ProtocolType: 'HTTP',
      });
    });

    test('A lambda should exist called `getBrands`', () => {
      const stack = initStack();

      expect(stack).toHaveResource('AWS::Lambda::Function', {
        Runtime: lambda.Runtime.NODEJS_12_X.name,
        Handler: 'getDeviceBrands.default',
      });
    });
  });
});
