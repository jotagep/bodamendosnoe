"use client"

import React, { useEffect, useState } from "react"
import CountUp from "react-countup"

function Counter({
	total = 0,
	text,
	tiny,
}: {
	total?: number
	text?: string
	tiny?: boolean
}) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return null

	return (
		<div
			className={`${
				tiny ? "px-4 py-2" : "px-6 py-3"
			} bg-harry-potter-gold text-white rounded-lg text-center shadow`}
		>
			<h3 className={tiny ? "text-2xl" : "text-3xl"}>
				{text || "Bote acumulado"}
			</h3>
			<CountUp
				className={tiny ? "text-xl" : "text-2xl"}
				suffix="€"
				end={total}
			/>
		</div>
	)
}

export default Counter
