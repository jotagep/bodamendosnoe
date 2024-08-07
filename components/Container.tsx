import React from "react"

function Container({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="container relative flex flex-col mx-auto items-center justify-center gap-8 md:gap-12 px-4 pt-10 md:pt-16 pb-16">
			{children}
		</div>
	)
}

export default Container
