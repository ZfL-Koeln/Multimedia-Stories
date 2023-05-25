<style>
.image-container {
	aspect-ratio: auto;
	background-size: cover;
	height: 100%;
	width: 100%;
}

.image-container > .image-hover-content {
	opacity: 0;
	transition: all 100ms ease-in-out;
}
.image-container > .image-hover-content:hover {
	opacity: 75%;
	backdrop-filter: brightness(0%);
}

.image-container.image-left {
	background-image: url("$lib/assets/img/stock-img/ryan-wallace-azA1hLbjBBo-unsplash.jpg");
}

.image-container.image-middle {
	background-image: url("$lib/assets/img/stock-img/annika-gordon-cZISY8ai2iA-unsplash.jpg");
}

.image-container.image-right {
	background-image: url("$lib/assets/img/stock-img/vardan-papikyan-JzE1dHEaAew-unsplash.jpg");
}

</style>
<section id="page-13" class="page-container h-screen bg-black">
	<div class="flex flex-col justify-center h-1/6 md:h-2/6">
		<div class="flex justify-center pt-12">
			<div class="bg-white w-1/12 h-2"></div>
		</div>
		<div class="text-6xl 2xl:text-8xl text-white text-center font-sans pt-2 pb-8" style="font-weight: bold">
			SCHWERPUNKTE
		</div>
	</div>

	<div class="h-5/6 md:h-3/6 grid grid-rows-3 md:grid-rows-1 md grid-cols-1 md:grid-cols-3">
		<figure class="col-auto image-container image-left bg-contain">
			<div class="flex flex-col justify-evenly text-center image-hover-content w-full h-full text-white text-3xl lg:text-5xl font-roboto">
				Sprachförderung
				<button class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white">mehr Infos</button>
			</div>
		</figure>
		<figure class="col-auto image-container image-middle">
			<div class="flex flex-col justify-evenly text-center image-hover-content w-full h-full text-white text-3xl lg:text-5xl font-roboto">
				Bildungsübergänge
				<button class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white">mehr Infos</button>
			</div>
		</figure>
		<figure class="col-auto image-container image-right">
			<div class="flex flex-col justify-evenly text-center image-hover-content w-full h-full text-white text-3xl lg:text-5xl font-roboto">
				Lernlücken
				<button class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white">mehr Infos</button>
			</div>
		</figure>
	</div>

</section>