<script>

</script>
<style>
	.bg-gradient {
		background-image: linear-gradient(to right bottom, #ff82e4, #d296ff, #9ba8ff, #5cb5ff, #00bdff);
	}

	.card-container {
		background-size: contain;
		background-position: top center;
		background-repeat: no-repeat;
	}
	.card-container:hover {
		;
	}

	.card-container.card-left {
		background-image: url("$lib/assets/img/Icon_Studierende.svg");
	}
	.card-container.card-center {
		background-image: url("$lib/assets/img/Icon_Schule.svg");
	}
	.card-container.card-right {
		background-image: url("$lib/assets/img/Icon_Spenden.svg");
	}

	.card-container.card-center:hover,
	.card-container.card-right:hover,
	.card-container.card-left:hover {
		background-image: none;
		background-position: bottom center;
	}

	.card-container:not(:hover):after {
		content: attr(data-caption);
	}

</style>
<section id="page-20" class="h-screen page-container bg-gradient">
	<div class="flex flex-col justify-center h-1/3">
		<div class="flex justify-center pt-12">
			<div class="bg-white w-1/12 h-2"></div>
		</div>
		<div class="text-4xl lg:text-6xl text-white text-center font-sans lg:px-32 pt-2 lg:pb-16 pb-8" style="font-weight: bold">
			Sie möchten sich für mehr
			Bildungsgerechtigkeit einsetzen?
		</div>
	</div>
	<div class="h-2/3 flex flex-col lg:flex-row w-full p-8 lg:p-32">
		<article class="relative  w-full h-full lg:w-1/3 text-2xl max-h-full overflow-clip text-white text-center font-roboto card-container card-left" data-caption="Studierende">
			<div class="absolute text-xl sm:text-2xl  lg:p-8 w-full h-full opacity-0 hover:opacity-100 flex flex-col transition-all duration-300 select-none">
				Werden Sie Mentor*in
				in einem unserer
				Projekte für mehr
				Bildungsteilhabe. Wenden Sie sich dazu
				gerne an XY. Gemeinsam finden wir
				das passende Projekt. </div>
		</article>
		<article class="relative  w-full h-full lg:w-1/3 text-2xl max-h-full overflow-clip text-white text-center font-roboto card-container card-center" data-caption="Schulen">
			<div class="absolute text-xl sm:text-2xl  lg:p-8 w-full h-full opacity-0 hover:opacity-100 flex flex-col transition-all duration-300 select-none">
				Sie möchten Ihren
				Schüler*innen die
				Möglichkeit bieten, in
				einem unserer Projekte
				gefördert zu werden?
				Wenden Sie sich dazu
				gerne an XY. </div>
		</article>
		<article class="relative  w-full h-full lg:w-1/3 text-2xl max-h-full overflow-clip text-white text-center font-roboto card-container card-right" data-caption="Spenden">
			<div class="absolute text-xl sm:text-2xl  lg:p-8 w-full h-full opacity-0 hover:opacity-100 flex flex-col transition-all duration-300 select-none">
				Unterstützen Sie
				unsere Projekte mit
				Ihrer Spende. Über die
				universitätseigenen
				Stiftung Studium und
				Lehre kommt Ihre
				Spende dort an, wo sie
				gebraucht wird. <a href="#" class="underline selection:cursor-auto">Link</a></div>
		</article>

	</div>

</section>
