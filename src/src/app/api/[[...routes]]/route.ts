import { entryPoint } from "@/backend";

const handler = entryPoint.fetch;

export function GET(req: Request) {
	return handler(req);
}

export function POST(req: Request) {
	return handler(req);
}
