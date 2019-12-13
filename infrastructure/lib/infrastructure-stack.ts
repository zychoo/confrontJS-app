import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import lambda = require('@aws-cdk/aws-lambda');
import api = require('@aws-cdk/aws-apigateway');
import path = require('path');

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this,"ConFrontJS Bucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true
    });

    const myLambda = new lambda.Function(this, "ConFrontJS Function", {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.asset(path.join(__dirname, "../../back/lambda")),
      handler: "index.handler"
    });

    const myApi = new api.RestApi(this, "ConFrontJS API");
    
    const integration = new api.LambdaIntegration(myLambda);

    myApi.root.addMethod("GET", integration);
  }
}
