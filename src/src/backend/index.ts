import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { secureHeaders } from "hono/secure-headers";
import { timeout } from "hono/timeout";
import { trimTrailingSlash } from "hono/trailing-slash";
import { Post } from "./types";

const entryPoint = new Hono().basePath("/api");

entryPoint
	.use(logger())
	.use(trimTrailingSlash())
	.use(
		bodyLimit({
			maxSize: 1000 * 1024,
			onError: c => {
				return c.json(
					{
						message: "Request is too large"
					},
					413
				);
			}
		})
	)
	.use(timeout(10 * 1000))
	.use(poweredBy())
	.use(secureHeaders());

const routes = entryPoint
	.notFound(c =>
		c.json(
			{
				message: "Not Found"
			},
			404
		)
	)
	.onError((err, c) =>
		c.json(
			{
				message: err.message
			},
			500
		)
	)
	.get("/status", c =>
		c.json({
			message: "Server is working"
		})
	)
	.get("/posts", async c => {
		const response = await fetch(
			"https://zenn.dev/api/articles?page=1&username=ame_x&count=100&order=latest"
		);
		if (!response.ok) {
			return c.json(
				{
					message: "error",
					data: null
				} as const,
				500
			);
		}

		const data = (await response.json())["articles"] as Post[];

		return c.json({
			message: "success",
			data
		} as const);
	});

export { entryPoint };

export type rpc = typeof routes;
