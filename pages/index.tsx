// @ts-nocheck
import { Cinzel } from "next/font/google"

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"

const cinzel = Cinzel({
	weight: ["400", "700"],
	subsets: ["latin"],
})

const finishDate = new Date("2024-05-10T15:00:00Z")

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${cinzel.className}`}
		>
			<h1 className="font-harry text-9xl text-harry-potter-gold drop-shadow">
				Sofía despedida
			</h1>
			<div className="mt-14 p-3 bg-gray-200 rounded-lg shadow shadow-gray-700">
				<FlipClockCountdown
					to={finishDate}
					showLabels={false}
					showSeparators={false}
				>
					Finished
				</FlipClockCountdown>
			</div>
		</main>
	)
}
