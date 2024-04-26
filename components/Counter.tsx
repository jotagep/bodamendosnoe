import React, { useEffect, useState } from "react"

import { FINISH_DATE } from "@/config/constants"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"

function Counter() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return null

	return (
		<div className="p-3 bg-gray-300 bg-opacity-90 rounded-lg shadow shadow-gray-700 scale-75 md:scale-100">
			<FlipClockCountdown
				to={FINISH_DATE}
				showLabels={false}
				showSeparators={false}
				suppressHydrationWarning
			/>
		</div>
	)
}

export default Counter
