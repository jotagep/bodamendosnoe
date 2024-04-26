import { Prueba } from "@/lib/notion"
import Link from "next/link"
import React from "react"

type Props = {
	pruebas: Prueba[]
}

function PruebasList({ pruebas }: Props) {
	return (
		<ol className="md:-mt-4 list-decimal flex flex-col items-start py-4 md:py-8 px-4 pl-8 md:pl-12 border-harry-potter-gold border-2 rounded w-full">
			{pruebas.map((prueba, index) => (
				<li
					key={index}
					className={`text-xl mb-4 ${
						index < pruebas.length - 1 ? "opacity-40" : ""
					}`}
				>
					<Link href={`/pruebas/${prueba.id}`}>
						{index < pruebas.length - 1 ? "✓ -" : ""} {prueba.title}
					</Link>
				</li>
			))}
		</ol>
	)
}

export default PruebasList
