<script>
	let openContent = 0

	function openModal(content) {
		openContent = content
		document.getElementById("modal").classList.remove("hidden");
	}

	function closeModal() {
		document.getElementById("modal").classList.add("hidden");
	}


	export function clickOutside(node) {
		const handleClick = event => {
			if(node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(
						new CustomEvent('click_outside', node)
				)
			}
		}

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		}
	}

</script>
<style>
	.image-container {
		aspect-ratio: auto;
		background-size: cover;
		height: 100%;
		width: 100%;
	}

	@media screen and (min-width: 1024px) {

		.image-container > .image-hover-content {
			opacity: 0;
			transition: all 250ms ease-in-out;
		}
		.image-container > .image-hover-content:hover {
			opacity: 75%;
			backdrop-filter: brightness(0%);
		}
	}

	.image-container.image-left {
		background-image: url("$lib/assets/img/stock-img/ryan-wallace-azA1hLbjBBo-unsplash.jpg");
		background-position: bottom left;
	}

	.image-container.image-middle-left {
		background-image: url("$lib/assets/img/stock-img/lilartsy-333oj7zFsdg-unsplash.jpg");
		background-position: center;
	}

	.image-container.image-middle-right {
		background-image: url("$lib/assets/img/stock-img/vardan-papikyan-JzE1dHEaAew-unsplash.jpg");
		background-position: bottom;
	}

	.image-container.image-right {
		background-image: url("$lib/assets/img/stock-img/domingo-alvarez-e-Cs3y8Mn6-Gk-unsplash.jpg");
		background-position: center;
	}

</style>
<section id="page-13" class="relative page-container h-screen bg-black" data-scrollspy="Schwerpunkte der Projekte">
	<div class="flex flex-col justify-center h-1/6 lg:h-2/6">
		<div class="text-6xl 2xl:text-7xl text-white text-center hyphens-auto font-sans font-extrabold pt-2 break-words">
			SCHWERPUNKTE
		</div>
		<div class="flex justify-center pt-2 pb-12">
			<div class="bg-white w-2/12 h-2"></div>
		</div>
	</div>


	<div class="h-5/6 w-3/5 mb-8 mx-auto lg:m-0 lg:w-full lg:h-2/5 grid grid-rows-4 lg:grid-rows-1 lg grid-cols-1 lg:grid-cols-4 pb-4">
		<figure class="col-auto image-container image-left bg-contain">
			<div class="flex flex-col justify-evenly text-center image-hover-content bg-black bg-opacity-75 w-full h-full text-white text-2xl sm:text-3xl  font-roboto">
				Sprachförderung
				<button on:click={() => openModal(0)} class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 active:bg-opacity-50 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white transition-colors duration-500 ease-in-out">
					mehr Infos
				</button>
			</div>
		</figure>
		<figure class="col-auto image-container image-middle-left bg-contain">
			<div class="flex flex-col justify-evenly text-center image-hover-content bg-black bg-opacity-75  w-full h-full text-white text-2xl sm:text-3xl  font-roboto">
				Bildungsüberänge
				<button on:click={() => openModal(1)} class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 active:bg-opacity-50 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white transition-colors duration-500 ease-in-out">
					mehr Infos
				</button>
			</div>
		</figure>
		<figure class="col-auto image-container image-middle-right">
			<div class="flex flex-col justify-evenly text-center image-hover-content bg-black bg-opacity-75  w-full h-full text-white text-2xl sm:text-3xl  font-roboto">
				Lernlücken
				<button on:click={() => openModal(2)} class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 active:bg-opacity-50 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white transition-colors duration-500 ease-in-out">
					mehr Infos
				</button>
			</div>
		</figure>
		<figure class="col-auto image-container image-right">
			<div class="flex flex-col justify-evenly text-center image-hover-content bg-black bg-opacity-75  w-full h-full text-white text-2xl sm:text-3xl  font-roboto">
				Sozial-Emotionales Lernen
				<button on:click={() => openModal(3)} class="mx-auto border-[2px] border-white text-white text-2xl font-roboto rounded-full bg-opacity-10 hover:bg-opacity-30 active:bg-opacity-50 w-fit hover:drop-shadow-2xl px-8 py-2 bg-white transition-colors duration-500 ease-in-out">
					mehr Infos
				</button>
			</div>
		</figure>
	</div>

	<div id="modal" use:clickOutside on:click_outside={closeModal} class=" absolute top-1/4 left-12 right-12 lg:right-auto lg:top-1/3 lg:w-1/3 lg:h-1/3 lg:left-1/3 hidden items-center">
		<div class="p-8 bg-gradient-pink-to-blue">
			<div class="bg-white text-xl text-center font-medium font-roboto flex flex-col justify-center">
				<div>
					{#if openContent === 0}
						Kommunikation bildet die Basis unseres Lebens.
						Bei Kindern, die außerhalb der Schule kaum
						Sprache oder eine andere als Deutsch hören, ist
						die Sprachentwicklung im Deutschen meist
						verzögert. WEICHENSTELLUNG und PROMPT!
						unterstützen die Entwicklung sprachlicher
						Fähigkeiten durch individuelle
						Fördermaßnahmen.

					{:else if openContent === 1}
						Die soziale Herkunft spielt bei dem Übergang von
						der Grundschule auf die weiterführende Schule
						eine entscheidende Rolle. Die Förderprogramme
						verfolgen das Ziel, bestehenden sozialen
						Ungleichheiten entgegenzuwirken, damit
						Bildungsübergänge chancengerechter sind.

					{:else if openContent === 2}
						Die Projekte WEICHENSTELLUNG und
						PROMPT! gehen gezielt auf die individuellen
						Bedürfnisse von Schüler*innen ein und helfen
						auf diesem Weg, Lücken zu schließen. Damit
						werden langfristig Lernerfolge erreicht.

					{:else if openContent === 3}
						Soziales Bewusstsein und emotionale
						Intelligenz werden bereits in den frühesten
						Phasen des Lebens entwickelt. Durch die enge
						Betreuung erfahren die Schüler*innen
						Kompetenzen zur Bewältigung schwieriger
						Situationen und werden positiv bestärkt.

					{/if}
				</div>
				<div class="mt-12 md:mt-14 w-full flex justify-center">
					<button on:click={closeModal} class="bg-white hover:bg-gray-300 active:bg-gray-800 active:text-white ring-2 outline-1 outline-white ring-gray-700 border-2 border-gray-200 text-xl rounded-full px-6 py-2 mb-4 transition-colors duration-200">Schließen</button>
				</div>
			</div>
		</div>
	</div>
</section>


