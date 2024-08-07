import { Prueba } from "@/lib/notion"
import Link from "next/link"
import React from "react"

type Props = {
	pruebas: Prueba[]
}

function PruebasList({ pruebas }: Props) {
	return (
		<ul className="md:-mt-4 flex flex-col items-start py-4 md:py-8 px-4 pl-8 md:pl-12 border-harry-potter-gold border-opacity-50 border-2 rounded w-full">
			{pruebas.length === 0 && (
				<span className="text-2xl mx-auto animate-pulse my-4">
					En breve estarán listas tus pruebas ⌛️
				</span>
			)}
			{pruebas.map((prueba, index) => (
				<li
					key={index}
					className={`text-xl mb-4 ${prueba.completada ? "opacity-50" : ""}`}
				>
					<Link href={`/pruebas/${prueba.id}`} className="flex items-center">
						<span
							className={`py-0.5 px-2 ${
								prueba.completada ? "bg-green-800" : "bg-black"
							} text-white text-lg rounded-xl mx-1`}
						>
							{prueba.dinero}€
						</span>
						{"- "}
						{prueba.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default PruebasList
