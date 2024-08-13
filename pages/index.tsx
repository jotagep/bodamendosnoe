import type { GetStaticProps } from "next"
import Image from "next/image"

import { REVALIDATE_TIME } from "@/config/constants"
import { getFilteredPruebas, type Prueba } from "@/lib/notion"

import PruebasList from "@/components/PruebasList"
import Counter from "@/components/Counter"

import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import Container from "@/components/Container"

type HomeProps = {
	pruebas: Prueba[]
	total: number
}

export default function Home({ pruebas, total }: HomeProps) {
	return (
		<Container>
			<h1 className="font-paris text-center text-4xl md:text-7xl drop-shadow">
				Olimpiadas Mendo & Noe <br></br>2024
			</h1>
			<div className="-my-12 md:-my-16">
				<Image src={"/images/aros.png"} alt={"aros"} width={200} height={200} />
			</div>
			<p className="text-center md:text-xl md:max-w-5xl">
				¡Bienvenidos a los Juegos Olímpicos de 2024! Nuestros competidores
				estrella, se enfrentarán a una serie de desafíos únicos para alcanzar la
				gloria olímpica. A través de una serie de pruebas ingeniosas y
				emocionantes, Mendo y Noe pondrán a prueba su destreza, inteligencia y
				espíritu deportivo.
				<br /> Cada desafío superado los acercará más a su recompensa final.
				¿Listos para verlos competir y superar obstáculos? ¡Preparen sus
				antorchas y únanse a nosotros en esta emocionante travesía olímpica
				llena de diversión y sorpresas!
			</p>
			<Counter total={total} />

			<PruebasList pruebas={pruebas} />
		</Container>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const pruebas = await getFilteredPruebas()

	const total = pruebas.reduce((acc, curr) => {
		if (curr.completada) {
			return acc + curr.dinero
		}
		return acc
	}, 0)

	return {
		props: {
			pruebas,
			total,
		},
		revalidate: REVALIDATE_TIME,
	}
}
