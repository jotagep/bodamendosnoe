import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { secret } = req.query

		if (secret !== process.env.SECRET_TOKEN) {
			return res.status(401).json({ message: "Unauthorized" })
		}

		const event = req.body
		console.log(event[0].Log.transferEvent)
		res.status(200).json({ message: "Hello World" })
	} else {
		res.status(405).json({ message: "Method Not Allowed" })
	}
}
