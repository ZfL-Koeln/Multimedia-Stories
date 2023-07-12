<script>
	export let acceptYoutube;
	export let youtubeMessage;
</script>
<section id="page-18" class="flex flex-col-reverse justify-end lg:flex-row lg:h-screen page-container" data-scrollspy="Nachhaltige Förderung">
	<div class="w-full h-max lg:w-7/12 lg:py-8 px-16">
		<div class="relative">
			<iframe class="aspect-video w-full" src="https://www.youtube-nocookie.com/embed/1rZx6fXCAj8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<div class="backdrop-blur-md backdrop-brightness-75 hover:backdrop-brightness-50 absolute inset-0 flex flex-col justify-center items-center {acceptYoutube ? 'hidden' : 'block'} transition-all">
				<p class="font-roboto select-none text-white text-lg md:text-3xl text-center pb-4">{youtubeMessage}</p>
				<button class="border-2 drop-shadow-xl text-xl rounded-full border-white font-sans text-white py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-30 active:bg-opacity-50 transition-all duration-300" on:click={() => acceptYoutube = true}> Akzeptieren</button>
			</div>
		</div>
		<p class="font-roboto text-2xl 2xl:text-5xl text-center lg:text-left font-bold my-4 md:pt-8">
			Betül Selcuk, Lehrerin
		</p>
		<p class="font-roboto text-xl mb-4">
			Betül Selcuk hat von ihren Schüler*innen viele positive Rückmeldungen bekommen. Sie ist Lehrerin an der Ferdinand-Lassalle-Realschule.
		</p>
	</div>
	<div class="w-full lg:w-5/12">
		<p class="text-3xl sm:text-4xl md:text-5xl px-5 tracking-wide text-center lg:text-left 2xl:text-6xl mx-auto lg:my-auto font-sans font-extrabold py-12 lg:pr-32 lg:pt-32">
			„Der Studierende hat mehr als nur Nachhilfe geleistet.“
		</p>
	</div>
</section>
