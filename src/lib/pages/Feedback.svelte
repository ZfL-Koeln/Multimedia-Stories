<!-- Ohne Animation -->
<style>
	/*Zum Ändern von Inhalt on Hover*/
	/*Data Attribute data-descr und data-hover in die entsprechenden Tags.*/
	/*

	.swap-text-on-hover:after{
		content: attr(data-descr);
	}
	.swap-text-on-hover:hover:after{
		content: attr(data-hover);
	}
	 */
</style>

<!-- Statische Version ohne Animationen -->
<!--
<section id="page-4" class="flex flex-col text-white page-container h-screen" style="background-image: linear-gradient(to right bottom, #ff82e4, #d296ff, #9ba8ff, #5cb5ff, #00bdff);" data-scrollspy="Feedback">
	<div class="flex flex-col content-between h-full p-12 xl:p-20">
		<article class="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold h-1/3 w-full lg:w-3/4">
			"Endlich wieder lernen zu können ist toll – ich habe
			die Schule sehr vermisst, auch wenn mir Deutsch zu
			spechen ziemlich schwer fällt, aber ich weiß, dass
			ich das schaffe."
			<p class="text-base md:text-lg lg:text-xl font-medium pt-4">
				Aleyna, 9 Jahre, ist mit ihrer Familie aus Syrien geflüchtet. Lehramtsstudierende im
				Projekt PROMPT! Bildungsteilhabe stärken helfen ihr beim Deutschlernen.
			</p>
		</article>


		<div class="flex h-1/3">
			<div class="dies-ist-ein-dummy w-0 lg:w-1/4"></div>
			<article class="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold w-full lg:w-3/4">
				"Man lernt viele neue Sachen. Zum
				Beispiel, wenn man ins Museum geht.
				Da lernt man dann mehr über die Römer."
				<p class="text-base md:text-lg lg:text-xl font-medium pt-4">
					Martin,11 Jahre, gefällt am Projekt WEICHENSTELLUNG für
					Viertklässler, dass man nicht nur in der Schule lernt, sondern auch
					Ausflüge unternimmt.
				</p>
			</article>
		</div>

		<article class="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold h-1/3 w-full lg:w-3/4">
			"Das ist ein tolles Projekt, weil viele Kinder manche
			Sachen nicht so gut können. Ich finde auch die Ausflüge
			gut und dass die Studenten zu uns in die Schule kommen.“
			<p class="text-base md:text-lg lg:text-xl font-medium pt-4">
				Amela, 11 Jahre, hat mit Hilfe des Projekts
				WEICHENSTELLUNG für Viertklässler den erfolgreichen
				Wechsel auf die weiterführende Schule geschafft.
			</p>
		</article>
	</div>
</section>
-->


<!-- Mit Slide In Animation. Nun schöner mit Peers gelöst-->
<section id="page-4" class="flex flex-col text-white page-container h-screen bg-gradient-pink-to-blue" data-scrollspy="Positives Feedback">
	<div class="flex flex-col lg:content-between justify-around h-full p-12 xl:p-12">
		<div class="lg:h-1/3 w-full xl:w-3/4 ">

		<article class="peer text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-black leading-snug lg:leading-normal">
			"Endlich wieder lernen zu können ist toll – ich habe die Schule sehr vermisst,
			auch wenn mir Deutsch zu sprechen ziemlich schwerfällt,
			aber ich weiß, dass ich das schaffe."

		</article>
		<p class="peer-hover:opacity-100 font-roboto lg:leading-normal leading-snug text-base md:text-lg lg:text-xl 2xl:text-2xl font-light pt-4 lg:opacity-0 transition-opacity duration-500 flex flex-col justify-end ">
			Aleyna, 9 Jahre, ist mit ihrer Familie aus Syrien geflüchtet. Lehramtsstudierende im
			Projekt PROMPT! Bildungsteilhabe stärken helfen ihr beim Deutschlernen.
		</p>
		</div>


		<div class="flex lg:h-1/3">
			<div class="dies-ist-ein-dummy w-0 lg:w-1/4"></div>
			<div class="h-1/3 w-full lg:w-3/4 ">
			<article class="peer text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-black leading-snug lg:leading-normal">
				"Man lernt viele neue Sachen. Zum
				Beispiel, wenn man ins Museum geht.
				Da lernt man dann mehr über die Römer."
			</article>
			<p class="peer-hover:opacity-100 font-roboto text-base leading-snug lg:leading-normal md:text-lg lg:text-xl 2xl:text-2xl font-light pt-4 lg:opacity-0 transition-opacity duration-500 flex flex-col justify-end">
				Martin, 11 Jahre, gefällt am Projekt WEICHENSTELLUNG für
				Viertklässler, dass man nicht nur in der Schule lernt, sondern auch
				Ausflüge unternimmt.
			</p>
			</div>
		</div>

		<div class="lg:h-1/3 w-full lg:w-3/4 ">

		<article class="peer text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-black leading-snug lg:leading-normal">
			"Das ist ein tolles Projekt, weil viele Kinder manche
			Sachen nicht so gut können. Ich finde auch die Ausflüge
			gut und dass die Studenten zu uns in die Schule kommen.“
		</article>
			<p class="peer-hover:opacity-100 font-roboto text-base leading-snug lg:leading-normal md:text-lg lg:text-xl 2xl:text-2xl font-light pt-4 lg:opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
				Amela, 11 Jahre, hat mit Hilfe des Projekts
				WEICHENSTELLUNG für Viertklässler den erfolgreichen
				Wechsel auf die weiterführende Schule geschafft.
			</p>
		</div>
	</div>
</section>


<!-- Mit Austauschendem Text bei Hover-->
<!--
<section id="page-4-3" class="flex flex-col text-white page-container h-screen" style="background-image: linear-gradient(to right bottom, #ff82e4, #d296ff, #9ba8ff, #5cb5ff, #00bdff);">
	<div class="flex flex-col content-between h-full p-12 xl:p-20">
		<article class="swap-text-on-hover text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold h-1/3 w-full lg:w-3/4 hover:text-lg hover:md:text-xl hover:lg:text-2xl hover:xl:text-3xl hover:italic hover:font-medium transition-all duration-500 ease-in-out"
						 data-descr="Endlich wieder lernen zu können ist toll – ich habe die Schule sehr vermisst, auch wenn mir Deutsch zu spechen ziemlich schwer fällt, aber ich weiß, dass ich das schaffe."
						 data-hover="&quot;Aleyna, 9 Jahre, ist mit ihrer Familie aus Syrien geflüchtet. Lehramtsstudierende im Projekt PROMPT! Bildungsteilhabe stärken helfen ihr beim Deutschlernen.&quot;">
		</article>

		<div class="flex h-1/3">
			<div class="dies-ist-ein-dummy w-0 lg:w-1/4"></div>
			<article class="swap-text-on-hover text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold w-full lg:w-3/4 hover:text-lg hover:md:text-xl hover:lg:text-2xl hover:xl:text-3xl hover:italic hover:font-medium transition-all duration-500 ease-in-out"
							 data-descr="Man lernt viele neue Sachen. Zum Beispiel, wenn man ins Museum geht. Da lernt man dann mehr über die Römer."
							 data-hover="&quot;Martin,11 Jahre, gefällt am Projekt WEICHENSTELLUNG für Viertklässler, dass man nicht nur in der Schule lernt, sondern auch Ausflüge unternimmt.&quot;">
			</article>
		</div>

		<article class="swap-text-on-hover text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold h-1/3 w-full lg:w-3/4 hover:text-lg hover:md:text-xl hover:italic hover:lg:text-2xl hover:xl:text-3xl hover:font-medium transition-all duration-500 ease-in-out"
						 data-descr="Das ist ein tolles Projekt, weil viele Kinder manche Sachen nicht so gut können. Ich finde auch die Ausflüge gut und dass die Studenten zu uns in die Schule kommen."
						 data-hover="&quot;Amela, 11 Jahre, hat mit Hilfe des Projekts WEICHENSTELLUNG für Viertklässler den erfolgreichen Wechsel auf die weiterführende Schule geschafft.&quot;">
		</article>
	</div>
</section>
-->