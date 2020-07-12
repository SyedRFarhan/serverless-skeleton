import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigateway2 from '@aws-cdk/aws-apigatewayv2';
import * as lambda from '@aws-cdk/aws-lambda';

export class QuoteServiceStack extends cdk.Stack {
  constructor(app: cdk.App, id: string) {
    super(app, id);

    // const dynamoTable = new dynamodb.Table(this, 'fliptable', {
    //   tableName: 'fliptable',
    //   partitionKey: {
    //     name: 'pk',
    //     type: dynamodb.AttributeType.STRING,
    //   },
    //   sortKey: {
    //     name: 'sk',
    //     type: dynamodb.AttributeType.STRING,
    //   },
    // });

    const getBrandsLambda = new lambda.Function(this, 'getDeviceBrands', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('src/lambdas/'),
      handler: 'getDeviceBrands.default',
    });

    const api = new apigateway2.HttpApi(this, 'quote-api', {
      apiName: 'quote-api',
    });
  }
}
