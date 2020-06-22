import * as cdk from '@aws-cdk/core';

import { ApiLambdaCrudDynamoDBStack } from './stack';

const app = new cdk.App();
new ApiLambdaCrudDynamoDBStack(app, 'ApiLambdaCrudDynamoDBExample');
app.synth();
