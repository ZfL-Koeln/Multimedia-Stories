<script>
	import zfl from "$lib/assets/img/zfl-logo.png";


	function openModal() {
		document.getElementById("modal2").classList.remove("hidden");
	}

	function closeModal() {
		document.getElementById("modal2").classList.add("hidden");
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
<footer id="footer" class="relative bg-black w-full page-container">
	<div class="flex">
	<div class="lg:w-1/5"></div>

	<article class="text-white text-xl lg:text-3xl text-center font-roboto pt-20 lg:w-3/5">
		Das Zentrum für Lehrer*innenbildung (ZfL) unterstützt
		bildungsbenachteiligte Kinder und Jugendliche mit
		eigenen Förderprojekten, an denen Studierende im
		Rahmen ihrer Praxisphasen mitwirken.
	</article>
	</div>
	<div class="lg:translate-y-12 w-full lg:w-fit">
		<img src="{zfl}" alt="ZfL Logo" class="w-60 mx-auto lg:ml-8">
	</div>
	<nav class="flex justify-center text-white py-4">
		<span class=" after:content-['|']"><a href="https://zfl.uni-koeln.de">&nbsp;Website&nbsp;</a></span>
		<span class=" after:content-['|']"><a href="#">&nbsp;Kontakt&nbsp;</a></span>
		<span class=" after:content-['|']"><a href="https://www.instagram.com/zflkoeln/">&nbsp;Instagram&nbsp;</a></span>
		<span class=" after:content-['|']"><a href="https://www.facebook.com/zflkoeln">&nbsp;Facebook&nbsp;</a></span>
		<span class=""><button href="#" on:click={openModal}>&nbsp;Impressum&nbsp;</button></span>
	</nav>


<div id="modal2" use:clickOutside on:click_outside={closeModal} class="border-2 border-gray-200 fixed m-8 left-auto top-0 hidden lg:w-1/2 h-4/5 items-center overflow-y-scroll">

	<article class="relative bg-black p-8">
		<span class="text-[#ee9ac0] font-sans text-4xl font-extrabold uppercase">
			Impressum
		</span>
		<span class="font-roboto text-white">
		<br/>
		<b>Zentrum für Lehrer*innenbildung</b><br/>
			<br/>
			Universität zu Köln<br/>
			Albertus-Magnus-Platz<br/>
			50923 Köln<br/>
			<br/>
			Geschäftsführer: Dr. Daniel Kramp<br/>
			<br/>
			Stellvertretende Geschäftsführerin: Dr.' Gesine Boesken<br/>
			<br/>
			Tel.: +49 (0)221-470-8672 (Dr.' Alexandra Habicher)<br/>
			zfl-digilehre(at)uni-koeln.de<br/>
			http://zfl.uni-koeln.de<br/>
			<br/>
			Das Zentrum für Lehrer*innenbildung ist ein Institut der Universität zu Köln.<br/>
			Die Pflichtangaben nach dem Telemediengesetz finden Sie hier:<br/>
			http://verwaltung.uni-koeln.de/impressum<br/>
			<br/>
			<b>Online-Redaktion:</b><br/>
			Dr.' Alexandra Habicher, Mechthild Wiesmann<br/>
			Redaktionelle Verantwortlichkeit gem. § 55 Abs. 2RStV: Dr.' Alexandra Habicher<br/>
			<br/>
			<b>Webdesign:</b><br/>
			Lili Beckers<br/>
			<!--
			<br/>
			<b>Programmierung:</b><br/>
			Sascha Baumgartner<br/>
			Armagan Eren Gülcicek<br/>
			Dr. Jan Wieners<br/>
			-->
			<br/>
			<b>Fotos:</b><br/>
			stem.T4L, Element5 Digital, AbsolutVision, Damian Zaleski, Antonio Janeski
			NordWood Themes, Sarah Shaffer, John Schnobrich, volodymyr Hryshchenko,
			William Iven, Soundtrap, Mark Fletcher-Brown, You X Ventures, Ryan Quintal,
			Christina @ wocintechchat.com, Headway, Marten Bjork, AI ghazali, Alina
			Grubnyak, Clay Banks, Sharosh Rajasekher, Kelly Sikkema, La-Rel Easter, Mike
			Petrucci, Fabrizio Chiagano, Bernard Hermant, Daniel Falcao, Victor Lam

			<div on:click={closeModal} class="absolute top-4 right-4 text-lg text-gray-500 hover:text-white border-2 font-black rounded-full border-gray-500 hover:border-white w-10 h-10 pb-1 flex justify-center items-center hover:-rotate-90 duration-300 transition-all ease-in-out select-none cursor-pointer">╳</div>
		</span>
	</article>
</div>

</footer>


