<script>
    import Youtube from "svelte-youtube-embed";

    export let acceptYoutube;
    export let youtubeMessage;
</script>
<section id="page-12" class="flex flex-col-reverse lg:flex-row lg:h-screen page-container"
         data-scrollspy="Praxisprojekte helfen">
    <div class="w-full h-max lg:w-7/12 px-16">
        <div class="relative">
            <Youtube id="mZpcDfHXGhw"/>
            <div class="backdrop-blur-md backdrop-brightness-75 hover:backdrop-brightness-50 absolute inset-0 flex flex-col justify-center items-center {acceptYoutube ? 'hidden' : 'block'} transition-all">
                <p class="font-roboto select-none text-white text-lg md:text-2xl text-center pb-6 md:px-10">{youtubeMessage}</p>
                <button class="border-2 drop-shadow-xl text-lg rounded-full border-white font-sans text-white py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-30 active:bg-opacity-50 transition-all duration-300"
                        on:click={() => acceptYoutube = true}> Ok
                </button>
            </div>
        </div>
        <p class="font-roboto text-2xl 2xl:text-5xl text-center lg:text-left font-bold my-4 md:pt-8">
            Astrid Krämer, ZfL
        </p>
        <p class="font-roboto text-xl mb-4">
            Astrid Krämer setzt sich für mehr Bildungsteilhabe ein. Sie leitet das Team Praxisphasen
            am ZfL und ist überzeugt, dass die Praxisprojekte im Lehramtsstudium eine enorme Bedeutung haben.
        </p>
    </div>
    <div class="w-full lg:w-5/12 flex justify-center">
        <p class="text-3xl text-center lg:text-left tracking-wide xl:text-5xl 2xl:text-6xl mx-auto font-sans font-extrabold py-12 lg:pr-32 lg:pt-32 px-5">
            „Unsere Studierenden können einen Unterschied machen.“
        </p>
    </div>
</section>
