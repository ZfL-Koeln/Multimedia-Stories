<script>
	import img02 from "$lib/assets/img/Illu2.svg";
	import chart from "$lib/assets/img/bar_chart-cropped.svg";
</script>

<section id="page-10" class=" relative page-container max-h-screen h-screen w-full overflow-clip" style="background-image: linear-gradient(to right, #f1aecc, #fefdfd)">
	<p class="text-3xl text-center md:text-4xl xl:text-5xl 2xl:text-5xl mx-auto p-8 font-sans font-extrabold ">
		Positive Entwicklung von Schüler*innen durch das Projekt KommMit/PROMPT!
	</p>
	<p class="text-center text-xl font-roboto">Anteil der Schüler*innen, die eine Weiterentwicklung durch den
		Förderunterricht aufweisen (in%)</p>

	<div class="flex flex-col-reverse lg:flex-row justify-center">
		<figure class="mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-2/3 ">
			<img src="{chart}" alt="Bar Chart" class="lg:mx-auto md:h-3/4 aspect-auto -translate-y-10">
		</figure>
		<div class="grid grid-cols-2 lg:grid-cols-1 grid-rows-1 lg:grid-rows-2 lg:w-1/3 h-fit mb-auto">

			<div class="flex justify-center">
				<img src="{img02}" class=" aspect-auto lg:w-full h-fit" alt="Illustration 01"/>
			</div>
			<!-- Legend -->
			<article class="flex flex-col">
				<div>
					<table class="font-roboto lg:text-lg font-semibold">
						<tr class="text-[#e66ea5]">
							<td class="pr-2">
								<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#e66ea5] rounded-lg"></div>
							</td>
							<td>Einschätzung der<br/>Studierenden</td>
						</tr>
						<tr class="text-[#33c3e3]">
							<td class="pr-2">
								<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#33c3e3] rounded-lg"></div>
							</td>
							<td>Selbsteinschätzung<br/>der Schüler*innen</td>
						</tr>
						<tr class="text-[#a15a8b]">
							<td class="pr-2">
								<div class="w-10 lg:w-12 h-10 lg:h-12 bg-[#a15a8b] rounded-lg"></div>
							</td>
							<td>Einschätzung<br/>Lehrkräfte</td>
						</tr>
					</table>
				</div>
			</article>
		</div>

	</div>

</section>