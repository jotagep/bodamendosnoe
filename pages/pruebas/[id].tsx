import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkMdx from "remark-mdx"

import Container from "@/components/Container"
import Spinner from "@/components/Spinner"

import { REVALIDATE_TIME } from "@/config/constants"
import {
	type Prueba,
	getFilteredPruebas,
	getPruebaMd,
	getPruebas,
} from "@/lib/notion"

type PruebasProps = {
	pruebaData: Prueba
	contentMd: string
}

function PruebaPage({ pruebaData, contentMd }: PruebasProps) {
	return (
		<Container>
			<div className="text-4xl md:text-6xl mb-4 md:mb-0">
				{pruebaData.title}
			</div>
			<ReactMarkdown
				className="flex flex-col gap-6 w-full md:gap-8 text-left text-lg md:text-xl md-custom"
				components={{
					ul: ({ children }) => (
						<ul className="list-disc list-inside">{children}</ul>
					),
					img: (props) => {
						const [loaded, setLoaded] = useState(false)
						return (
							<div
								className={`border-harry-potter-gold border-opacity-50 border rounded-lg ${
									loaded ? "" : "w-full"
								}`}
							>
								<div className="flex justify-center items-center rounded-lg p-2 md:p-4">
									<img
										{...props}
										className={loaded ? "rounded-lg" : "hidden"}
										onLoad={() => setLoaded(true)}
									/>
									{!loaded && <Spinner />}
								</div>
							</div>
						)
					},
				}}
				remarkPlugins={[remarkMdx]}
			>
				{contentMd}
			</ReactMarkdown>
			<div className="w-full h-[1px] bg-harry-potter-gold" />
			<Link href="/" className="md:text-3xl">
				← Volver
			</Link>
		</Container>
	)
}

export default PruebaPage

export const getStaticProps: GetStaticProps<PruebasProps> = async ({
	params,
}) => {
	const pruebaId = params?.id as string

	const pruebas = await getFilteredPruebas()
	const pruebaData = pruebas.find((prueba) => prueba.id === pruebaId) || {
		title: "",
		id: "",
		publicada: false,
	}

	const contentMd = await getPruebaMd(pruebaId)

	return {
		props: {
			pruebaData,
			contentMd,
		},
		revalidate: REVALIDATE_TIME,
	}
}

export const getStaticPaths: GetStaticPaths = async function () {
	const pruebas = await getPruebas()

	const paths = pruebas.map((prueba) => ({
		params: { id: prueba.id },
	}))

	return { paths, fallback: false }
}
