import { Prueba } from "@/lib/notion"
import Link from "next/link"
import Image from "next/image"

import React from "react"

type Props = {
	pruebas: Prueba[]
}

function PruebasList({ pruebas }: Props) {
	return (
		<ul className="md:-mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 py-4 md:py-8 px-4 pl-8 md:pl-12 border-harry-potter-gold border-opacity-50 border-2 rounded w-full">
			{pruebas.length === 0 && (
				<span className="text-2xl mx-auto animate-pulse my-4">
					En breve estarán listas tus pruebas ⌛️
				</span>
			)}
			{pruebas.map((prueba, index) => (
				<li
					key={index}
					className={`flex flex-col items-center relative group text-lg p-6 hover:scale-105 hover:cursor-pointer hover:shadow-md transition-all ${
						prueba.completada ? "opacity-50" : ""
					}`}
				>
					<Image
						src={`/images/pruebas/${index + 1}.png`}
						alt={"aros"}
						width={300}
						height={300}
					/>
					{prueba.completada && (
						<span className="absolute inset-0 top-2 left-2 md:top-4 md:left-4 opacity-50">
							<Image
								src={"/images/check.png"}
								alt={"check"}
								width={60}
								height={60}
							/>
						</span>
					)}
					<span
						className={`absolute top-4 right-4 py-0.5 px-2 rounded-sm md:opacity-0 md:translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:transition-all duration-400 ${
							prueba.completada ? "bg-green-800" : "bg-black"
						} text-white text-lg rounded-xl mx-1`}
					>
						{prueba.dinero}€
					</span>
					<span className="uppercase font-bold text-center">
						{prueba.title}
					</span>
					<Link
						href={`/pruebas/${prueba.id}`}
						className="flex items-center absolute inset-0"
					/>
				</li>
			))}
		</ul>
	)
}

export default PruebasList
