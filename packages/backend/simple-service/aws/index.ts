import * as cdk from '@aws-cdk/core';

import { QuoteServiceStack } from './QuoteServiceStack';

const app = new cdk.App();
new QuoteServiceStack(app, 'QuoteServiceStack');
app.synth();
