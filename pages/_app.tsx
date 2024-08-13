import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Image from "next/image"

import { Alegreya } from "next/font/google"

const alegreya = Alegreya({
	weight: ["400", "700"],
	subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`min-h-screen relative pb-10 bg-white ${alegreya.className}`}
		>
			<div className="absolute top-0 left-0 w-full h-screen">
				<Image
					className="bg-img"
					src={"/images/monzon.jpg"}
					alt={"background"}
					fill
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/100 -mb-1"></div>
			</div>
			<Component {...pageProps} />
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
				Made with ❤️ by jotagep
			</div>
		</main>
	)
}
