<script>
	export let acceptYoutube;
	export let youtubeMessage;
</script>
<section id="page-8" class="flex flex-col lg:flex-row lg:h-screen page-container"  data-scrollspy="Wichtige Erfahrungen">
	<div class="w-full lg:w-5/12 flex justify-center">
		<p class="text-5xl tracking-wide text-center lg:text-right 2xl:text-6xl mx-auto font-sans font-extrabold py-12 lg:pl-32 lg:pt-32">
			„Ich kann mich ausprobieren und meinen eigenen Lehrstil finden.“
		</p>
	</div>
	<div class="w-full h-max lg:w-7/12 lg:py-8 px-16">
		<div class="relative">
			<iframe class="aspect-video w-full h-fit" src="https://www.youtube-nocookie.com/embed/bq6elS95_kc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<div class="backdrop-blur-md backdrop-brightness-75 hover:backdrop-brightness-50 absolute inset-0 flex flex-col justify-center items-center {acceptYoutube ? 'hidden' : 'block'} transition-all">
				<p class="font-roboto select-none text-white text-lg md:text-3xl text-center pb-4">{youtubeMessage}</p>
				<button class="border-2 drop-shadow-xl text-lg rounded-full border-white font-sans text-white py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-30 active:bg-opacity-50 transition-all duration-300" on:click={() => acceptYoutube = true}> Akzeptieren</button>
			</div>
		</div>
		<p class="font-roboto text-3xl 2xl:text-5xl text-center lg:text-left font-bold my-4 md:pt-8">
			Sophia Pentinghaus, Studentin
		</p>
		<p class="font-roboto text-xl mb-4">
			Sophia Pentinghaus hat mit einer Kommilitonin gemeinsam sechs Kinder betreut. Für sie war vor allem die Kombination aus Theorie und Praxiserfahrung hilfreich.</p>
	</div>
</section>