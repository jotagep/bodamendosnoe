import type { GetStaticProps } from "next"

import { REVALIDATE_TIME } from "@/config/constants"
import { getFilteredPruebas, type Prueba } from "@/lib/notion"

import PruebasList from "@/components/PruebasList"
import Counter from "@/components/Counter"

import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import Container from "@/components/Container"

type HomeProps = {
	pruebas: Prueba[]
}

export default function Home({ pruebas }: HomeProps) {
	return (
		<Container>
			<h1 className="font-harry text-center text-8xl md:text-9xl drop-shadow">
				Sofia despedida
			</h1>
			<p className="text-center md:text-xl">
				Tu vida muggle llega a su fin...Te esperamos el viernes 10 de Mayo a las
				17h en el andén 9 y 3/4 de la estación de Sants. Conseguir tu billete a
				Hogwarts no será tan fácil. Toda comunicación se realizará a través de
				esta web o vía lechuza. ¿Estás preparada? ACEPTASTE EL RETO!!! Cada vez
				que completes una prueba, revisa la web para encontrar las instrucciones
				de tu siguiente desafío.
			</p>
			<Counter />
			<h3 className="font-harry text-5xl drop-shadow">
				Para conseguir tu billete:
			</h3>
			<PruebasList pruebas={pruebas} />
		</Container>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const pruebas = await getFilteredPruebas()

	return {
		props: {
			pruebas,
		},
		revalidate: REVALIDATE_TIME,
	}
}
