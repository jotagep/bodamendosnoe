const Embed = ({ url }: { url?: string }) => {
	if (!url) return

	return (
		<div className="p-2 md:p-4 border-harry-potter-gold border-opacity-50 border rounded-lg max-w-screen-md w-full">
			<div className="video-responsive">
				<iframe
					width="560"
					height="315"
					src={url}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
			</div>
		</div>
	)
}

export default Embed
