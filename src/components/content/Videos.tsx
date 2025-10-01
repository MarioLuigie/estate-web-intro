export default function Videos({ src }: { src: string }) {
	return (
		<div className="w-full flex justify-center">
			<section className="w-full max-w-5xl text-center mx-auto">
				<p className="text-zinc-600 mt-4 font-normal text-center text-lg px-10">
					Video Preview
				</p>
				<div className="py-3">
					<div className="w-full max-w-[360px] aspect-[9/16] mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-md">
						<video controls className="w-full h-full object-contain">
							<source src={src} type="video/mp4" />
							Your browser does not support video playback.
						</video>
					</div>
				</div>
			</section>

			{/* <section className="w-full max-w-5xl text-center">
				{' '}
				<h2 className="text-2xl font-semibold mb-6">Video Demo</h2>{' '}
				<div className="aspect-video w-full max-w-3xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-md">
					{' '}
					<video controls className="w-full h-full">
						{' '}
						<source src="/demo.mp4" type="video/mp4" /> Your browser does
						not support video playback.{' '}
					</video>{' '}
				</div>{' '}
			</section> */}
		</div>
	);
}
