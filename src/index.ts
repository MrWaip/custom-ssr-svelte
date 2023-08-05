import Fastify from "fastify";
import App from "./client/App.svelte";
import {} from "svelte";

const server = Fastify({
  logger: true,
});

server.get("/", () => {
  console.log("Where render?", App.render);

  return { debug: "" };
});

server.listen({ port: 3000 }, () => {
  server.log.info(`Server listening on http://localhost:3000`);
});
