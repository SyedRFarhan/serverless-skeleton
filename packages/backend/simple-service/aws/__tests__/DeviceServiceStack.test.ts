import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';

import { DeviceServiceStack } from '../DeviceServiceStack';

describe('Device Service infrastructure stack', () => {
  describe('dynamodb', () => {
    test('A table named `fliptable` should be created with partion key `pk` and sort key `sk`', () => {
      const stack = initStack();
      expect(stack).toHaveResource('AWS::DynamoDB::Table', {
        TableName: 'fliptable',
        KeySchema: [
          {
            AttributeName: 'pk',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'sk',
            KeyType: 'RANGE',
          },
        ],
      });
    });
  });
});

function initStack() {
  const app = new App();
  const stack = new DeviceServiceStack(app, 'ApiLambdaCrudDynamoDBExample');

  return stack;
}
