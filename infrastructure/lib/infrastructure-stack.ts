import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import lambda = require('@aws-cdk/aws-lambda');
import api = require('@aws-cdk/aws-apigateway');
import path = require('path');

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "My Bucket", {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true
    })

    const myLambda = new lambda.Function(this, 'My Lambda', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '../../back/lambda')),
      handler: 'index.handler'
    })

    const restApi = new api.RestApi(this, 'My API');

    const apiIntegration = new api.LambdaIntegration(myLambda);

    restApi.root.addMethod('GET', apiIntegration);

  }
}
