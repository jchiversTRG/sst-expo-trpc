export const greeting = "Hello from trpc!";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { publicProcedure, router } from "./trpc";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";

const appRouter = router({
  hello: publicProcedure.query(() => {
    return "Hello from trpc";
  }),
});

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
});
