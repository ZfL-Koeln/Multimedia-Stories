<script>
	import img02 from "$lib/assets/img/Illu2.svg";
	import chart from "$lib/assets/img/bar_chart-cropped.svg";
</script>

<section id="page-11" class=" relative page-container max-h-screen h-screen w-full overflow-clip bg-gradient-pink" data-scrollspy="Wie profitieren Schüler*innen?">
	<p class="text-3xl text-center md:text-4xl xl:text-5xl 2xl:text-5xl mx-auto p-8 font-sans font-extrabold ">
		Wie profitieren Schüler*innen von den Projekten?
	</p>
	<p class="text-center text-xl font-roboto">Anteil der Schüler*innen, die eine Weiterentwicklung durch den
		Förderunterricht aufweisen (in%)</p>
	<div class="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 w-full h-full">
		<!-- Chart -->
		<div class="row-start-2 lg:row-start-1 row-span-2 col-span-2">
			<img src="{chart}" alt="Bar Chart" class="ml-auto h-5/6 lg:h-5/6 xl:h-5/6 max-h-fit -translate-y-12">
		</div>

		<!-- Legend -->
		<div class="col-start-3 row-start-2 row-span-2 lg:row-span-1 my-auto lg:my-0 lg:row-start-2">
			<table class="font-roboto lg:text-lg font-semibold">
				<tr class="text-[#e66ea5]">
					<td class="pr-2">
						<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#e66ea5] rounded-lg"></div>
					</td>
					<td>Einschätzung der<br>Studierenden</td>
				</tr>
				<tr class="text-[#33c3e3]">
					<td class="pr-2">
						<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#33c3e3] rounded-lg"></div>
					</td>
					<td>Selbsteinschätzung<br>der Schüler*innen</td>
				</tr>
				<tr class="text-[#a15a8b]">
					<td class="pr-2">
						<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#a15a8b] rounded-lg"></div>
					</td>
					<td>Einschätzung<br>der Lehrkräfte</td>
				</tr>
			</table>
		</div>
		<!-- Illustration -->
		<div class="col-span-3 lg:col-span-1 lg:col-start-3 mx-auto lg:-translate-x-12 xl:-translate-x-32">
				<img src="{img02}" class="object- h-full" alt="Illustration 01"/>
		</div>
	</div>
	<p class="text-xs w-full px-8 lg:px-0 lg:absolute p-4 bottom-2 lg:left-2 text-center lg:text-left">
				Quelle: Datenerhebung des Zentrums für Lehrer*innenbildung zur Evaluation des Projektes <i>WEICHENSTELLUNG für Viertklässler</i>
		</p>

</section>
