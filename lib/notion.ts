export type Prueba = {
	title: string
	id: string
	publicada: boolean
}

import * as fs from "fs"
import path from "path"
import { remark } from "remark"
import mdx from "remark-mdx"

import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

const PRUEBAS_DIR = path.join(process.cwd(), "posts")

const notionClient = new Client({
	auth: process.env.NOTION_SECRET,
})

const n2m = new NotionToMarkdown({ notionClient })

export async function getPruebas() {
	const { results } = await notionClient.databases.query({
		database_id: process.env.NOTION_DATABASE_ID as string,
	})

	return results
}

export async function getFilteredPruebas(): Promise<Prueba[]> {
	const results = await getPruebas()

	return results.reverse().map((page: any) => {
		return {
			title: page.properties.titulo.title[0].plain_text,
			id: page.id,
			publicada: page.properties.publicada.checkbox,
		}
	})
	//.filter((prueba: Prueba) => prueba.publicada)
}

export async function getPruebaMd(id: string) {
	const mdblocks = await n2m.pageToMarkdown(id)
	const mdString = n2m.toMarkdownString(mdblocks)

	const file = await remark().use(mdx).process(mdString.parent)
	const contentHtml = file.toString()

	return contentHtml
}
