import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("*", (req, res, ctx) => {
    console.log(`Please add request handler for ${req.url.toString()}`);

    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
