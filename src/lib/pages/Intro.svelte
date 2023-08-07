<script>
    import starter from "$lib/assets/img/stock-img/starter.jpg";
    import zfl from "$lib/assets/img/zfl-logo.png";
</script>
<style>
    .custom-font {
        font-size: calc(1.5rem + 0.5vw);
        font-family: Roboto, serif
    }
</style>
<div class="page-container " id="Page1" data-scrollspy="Startseite">

    <section class="pt-12 lg:pt-0 m-0 lg:flex-col lg:pb-0 bg-black">
        <div class="flex flex-col justify-around mx-auto w-full lg:w-1/2 xl:w-2/5 max-w-xl lg:mx-4 px-4 lg:px-8 max-h-screen h-screen overflow-hidden">
				<div class="mb-0 mx-auto text-white p-8 pt-2 sm:pt-8 px-2 custom-font">
						Jedes Jahr verlassen
						Zehntausende junge Menschen
						die Schule ohne Abschluss.
						Die Zahl der Ungelernten
						steigt, ihre Jobchancen sinken.
						Dabei würden sie auf dem
						Arbeitsmarkt dringend
						gebraucht. Die Weichen für
						den Bildungsweg werden
						schon früh gestellt.
				</div>
            <img src="{zfl}" alt="ZfL-Logo" class="top-1 right-1 w-60 invert-0 -mt-12">
        </div>

        <div class="inset-y-0 right-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 xl:w-3/5 xl:max-w-full h-screen lg:absolute xl:px-0 p-0">
            <img class="h-screen object-cover page-container p-0" src="{starter}" loading="lazy" alt=""/>
        </div>
    </section>
</div>
