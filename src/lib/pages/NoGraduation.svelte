<script>
	import page2 from "$lib/assets/img/stock-img/page-2.jpg";
</script>


<section id="page-2" class="min-h-screen lg:h-screen page-container" data-scrollspy="6 Prozent">
	<div class="flex flex-col ">

		<div class="flex flex-col justify-center h-2/6">
			<div class="flex justify-center pt-12">
				<div class="bg-black w-1/12 h-2"></div>
			</div>
			<h1 class="text-6xl text-black text-center font-sans pt-2 lg:pb-16 pb-8">
				6 PROZENT OHNE ABSCHLUSS
			</h1>
		</div>

		<div class="flex-row min-h-screen lg:flex h-4/6">
			<figure class="w-full h-4/6 lg:w-1/2 overflow-hidden" style="background-image: {page2}">
				<!-- Hier noch das Bild Zentrieren.
				vll hilft sowas:
				https://tailwindcss.com/docs/object-position oder die anderen Object properties, align/place etc...
				-->
				<img src="{page2}" alt="Page2 Stock Img" class="" style="object-fit: contain; max-width: none; object-position: center">
			</figure>
			<section class="text-black text-2xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-12 lg:p-16 2xl:p-20  w-full h-screen lg:h-fit lg:w-1/2 align-text-bottom pb-0 font-roboto" style="font-family: Roboto,serif;">
				<span>
				Noch immer beenden in Deutschland Zehntausende
				junge Menschen die Schule ohne Abschluss. Allein im
				Jahr 2021 waren dies laut einer Studie des
				Bildungswissenschaftlers Klaus Klemm im Auftrag der
				Bertelsmann-Stiftung 47.500 Jugendliche, sechs
				Prozent aller Schulabgänger. Das Statistische
				Bundesamt NRW nennt für das Schuljahr 202/21 4055
				Jugendliche allein für Nordrhein-Westfalen. Betroffen
				sind mehr Jungen als Mädchen und mehr Jugendliche
				mit ausländischer Staatsbürgerschaft als mit deutscher
				Staatsangehörigkeit. Und: es gibt deutliche
				Unterschiede zwischen den Bundesländern.
				</span>
			</section>
		</div>
	</div>
</section>

