import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Image from "next/image"

import { Alegreya } from "next/font/google"
import Container from "@/components/Container"

const alegreya = Alegreya({
	weight: ["400", "700"],
	subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`min-h-screen text-harry-potter-gold bg-black ${alegreya.className}`}
		>
			<div className="absolute inset-0">
				<Image
					className="object-right object-cover"
					src={"/images/monzon.jpg"}
					alt={"background"}
					fill
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/100"></div>
			</div>
			<Component {...pageProps} />
			<div className="relative text-center mx-auto pb-6">Made with ❤️</div>
		</main>
	)
}
