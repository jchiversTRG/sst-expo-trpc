import { StackContext, Api } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /": "packages/functions/src/lambda.main",
      "ANY /trpc/{proxy+}": "packages/trpc-api/index.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
