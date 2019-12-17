import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import createSchema from "../../lib/createSchema";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false
  }
};

const runHandler = (request, context, handler) =>
  new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body));
    handler(context, request, callback);
  });

const run = async (context, request) => {
  const schema = await createSchema();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true
  });

  const handler = apolloServer.createHandler({ path: "/api/graphql" });

  const response = await runHandler(request, context, handler);
  return response;
};

export default cors(run);
