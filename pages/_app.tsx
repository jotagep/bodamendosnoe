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
			className={`min-h-screen relative text-harry-potter-gold pb-10 bg-black ${alegreya.className}`}
		>
			<div className="absolute inset-0">
				<Image
					className="object-right object-cover"
					src={"/images/monzon.jpg"}
					alt={"background"}
					fill
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/100"></div>
			</div>
			<Component {...pageProps} />
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
				Made with ❤️
			</div>
		</main>
	)
}
