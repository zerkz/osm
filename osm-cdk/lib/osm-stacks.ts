import { Stack, StackProps } from 'aws-cdk-lib';
import { Function, FunctionUrl } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';


interface LambdaFunctionProps extends StackProps {
  encryptBucket?: boolean;
}

export class LambdaFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: LambdaFunctionProps) {
    super(scope, id, props);

    
    
    // example resource
    // const queue = new sqs.Queue(this, 'OsmCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

interface FunctionURLProps extends StackProps {
  function?: Function;
}


export class FunctionURLStack extends Stack {
  constructor(scope: Construct, id: string, props?: FunctionURLProps) {
    super(scope, id, props);

    
    
    // example resource
    // const queue = new sqs.Queue(this, 'OsmCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
