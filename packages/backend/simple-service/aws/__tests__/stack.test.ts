import '@aws-cdk/assert/jest';
import { SynthUtils } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

import { ApiLambdaCrudDynamoDBStack } from '../stack';

function initStack() {
  const app = new App();
  const serviceStack = new ApiLambdaCrudDynamoDBStack(
    app,
    'ApiLambdaCrudDynamoDBExample'
  );

  return serviceStack;
}

describe('Testing APILambdaDynamodbCrud infastructure stack.', () => {
  test.skip('CloudFormation snapshot (example)', () => {
    const stack = initStack();
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });

  test('A dynamodb table with itemId as its primary key should be created.', () => {
    const stack = initStack();
    expect(stack).toHaveResource('AWS::DynamoDB::Table', {
      TableName: 'items',
      KeySchema: [
        {
          AttributeName: 'itemId',
          KeyType: 'HASH',
        },
      ],
    });
  });

  /*
  When you need to create a new resource first google the cloud formation doc for it.
  Create an `toHaveResource` assertion against the cloudformaton resource name `AWS::--RESOURCE--::--SUBS--`
  and additionally properties you may need in an object as the second arg.
  */
  test('An APIGateway should be created.', () => {
    const stack = initStack();

    expect(stack).toHaveResource('AWS::ApiGateway::RestApi', {
      Name: 'Items Service',
    });
  });
});
