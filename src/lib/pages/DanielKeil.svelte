<script>
    import Youtube from "svelte-youtube-embed";

    export let acceptYoutube;
    export let youtubeMessage;
</script>
<section id="page-17"
         style="min-height: 100vh; height: 100%;"
         class="flex flex-col lg:flex-row lg:h-screen page-container"
         data-scrollspy="Individueller Förderbedarf">
    <div class="w-full lg:w-5/12 flex justify-center">
        <p class="text-center tracking-wide lg:text-right text-3xl 2xl:text-6xl mx-auto font-sans font-extrabold py-12 lg:pl-32 lg:pt-32 px-5">
            „Diese enge Betreuung sieht die Schüler*innen als Ganzes.“
        </p>
    </div>
    <div class="w-full h-max lg:w-7/12 lg:py-8 px-6">
        <div class="relative">
            <Youtube id="_R8v5aw6vUA"/>
            <div class="backdrop-blur-md backdrop-brightness-75 hover:backdrop-brightness-50 absolute inset-0 flex flex-col justify-center items-center {acceptYoutube ? 'hidden' : 'block'} transition-all">
                <p class="font-roboto select-none text-white text-lg md:text-2xl md:px-10 text-center pb-4">{youtubeMessage}</p>
                <button class="border-2 drop-shadow-xl text-xl rounded-full border-white font-sans text-white py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-30 active:bg-opacity-50 transition-all duration-300"
                        on:click={() => acceptYoutube = true}> Ok
                </button>
            </div>
        </div>
        <p class="font-roboto text-2xl 2xl:text-5xl text-center lg:text-left font-bold my-4 md:pt-8">
            Daniel Keil, Lehrer
        </p>
        <p class="font-roboto text-xl mb-4">
            Daniel Keil unterrichtet an der Gesamtschule Rodenkirchen. Dort merkt er regelmäßig, wie hoch der Bedarf an
            individueller Förderung ist.
    </div>
</section>
