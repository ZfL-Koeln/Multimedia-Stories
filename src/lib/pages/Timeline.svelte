<script>
    const hover = id => () => {
    };
</script>

<section id="page-6" class="bg-black h-screen page-container flex flex-col justify-center relative"
         data-scrollspy="Zeitstrahl">

    <div class="flex flex-col lg:flex-row ml-4 lg:ml-0 lg:items-center h-full">
        <div class="flex-auto border-l-4 ml-10 lg:ml-0  lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>
        <div class="flex flex-col lg:flex-row w-full lg:items-center h-full lg:container">
            <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0 lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>

            <div on:mouseenter={ hover(0) } class="year flex items-center text-teal-200 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 lg:h-20 lg:w-20 p-2 lg:p-4 border-4 border-white">
                    <div class="rounded-full bg-[#00b4dc] m-auto h-full w-full"></div>
                </div>
                <div class="lg:absolute top-0 -ml-12 sm:-ml-10 text-center lg:-mt-20 w-40 text-lg sm:text-2xl lg:text-4xl font-extrabold font-sans uppercase text-[#00b4dc]">
                    2014
                </div>
            </div>
            <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0 lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>
            <div on:mouseenter={ hover(1) } class="year flex items-center text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 lg:h-20 lg:w-20 p-2 lg:p-4 border-4 border-white">
                    <div class="rounded-full bg-[#99e1f1] m-auto h-full w-full"></div>
                </div>
                <div class="lg:absolute top-0 -ml-12 sm:-ml-10 text-center lg:mt-28 w-40 text-lg sm:text-2xl lg:text-4xl font-extrabold font-sans uppercase text-[#99e1f1]">
                    2016
                </div>
            </div>
            <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0 lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>
            <div on:mouseenter={ hover(2) } class="year flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 lg:h-20 lg:w-20 p-2 lg:p-4 border-4 border-white">
                    <div class="rounded-full bg-[#e66ea5] m-auto h-full w-full"></div>
                </div>
                <div class="lg:absolute top-0 -ml-12 sm:-ml-10 text-center lg:-mt-20 w-40 text-lg sm:text-2xl lg:text-4xl font-extrabold font-sans uppercase text-[#e66ea5]">
                    2020
                </div>
            </div>
            <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0 lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>
            <div on:mouseenter={ hover(3) } class="year flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 lg:h-20 lg:w-20 p-2 lg:p-4 border-4 border-white">
                    <div class="rounded-full bg-[#ee9ac0] m-auto h-full w-full"></div>

                </div>
                <div class="lg:absolute top-0 -ml-12 sm:-ml-10 text-center lg:mt-28 w-40 text-lg sm:text-2xl lg:text-4xl font-extrabold font-sans uppercase text-[#ee9ac0]">
                    2023
                </div>
            </div>
            <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0  lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>
        </div>
        <div class="flex-auto border-l-4 ml-[1.4rem] lg:ml-0 lg:border-l-0 border-t-0 lg:border-t-4 transition duration-500 ease-in-out border-white"></div>

    </div>

    <div class="ml-28 sm:ml-32 my-16 lg:container lg:mx-auto grid grid-rows-4 grid-cols-1 lg:grid-rows-3 lg:grid-cols-4 absolute inset-0 text-white text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-3xl px-4 font-roboto">
        <div class="description lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col justify-center lg:justify-start lg:opacity-0 md:hover:opacity-100 transition-opacity duration-500">
            <p class="transparent-bgr">
                Das Sprachförderprojekt <strong>PROMPT!</strong> startet. Kölner Lehramtsstudierende arbeiten mit
                geflüchteten und neu
                zugewanderten Kindern, Jugendlichen und jungen Erwachsenen – erst in der Notunterkunft, dann in der
                Schule.
            </p>
        </div>
        <div class="description lg:col-start-2 lg:row-span-3 flex flex-col justify-center lg:justify-start lg:opacity-0 hover:opacity-100 transition-opacity duration-500">
            <p class="transparent-bgr">
                Das ZfL setzt das Projekt <strong>WEICHENSTELLUNG für Viertklässler</strong>
                der ZEIT-Stiftung Bucerius am Standort Köln um.
                Es unterstützt Kinder beim Übergang auf eine weiterführende Schule.
            </p>
        </div>
        <div class="description break-normal lg:col-start-auto lg:row-span-3 flex flex-col justify-center lg:justify-between lg:opacity-0 md:hover:opacity-100 transition-opacity duration-500">
            <p class="transparent-bgr">
                Mit dem Aufkommen der Corona-Pandemie wird 2020 das Projekt
                <strong>KommMit</strong> ins Leben gerufen, das sich der
                durch Schulschließung, Home-Schooling und Wechselunterricht entstandenen
                Probleme bildungsbenachteiligter
                Schüler*innen annimmt. <br>
                Um neu zugewanderte Jugendliche beim
                Schulabschluss und beim Einstieg
                in das Berufsleben zu unterstützen,
                setzt das ZfL von 2020 bis 2022 das
                Projekt <strong>WEICHENSTELLUNG
                Ausbildung und Beruf</strong> der
                ZEIT-Stiftung in Köln um.
            </p>
        </div>
        <div class="description lg:col-start-auto lg:row-span-2 flex flex-col justify-center lg:justify-start lg:opacity-0 md:hover:opacity-100 transition-opacity duration-500">
            <p class="transparent-bgr">
                Das ZfL führt die Projekte <strong>KommMit</strong> und <strong>PROMPT!</strong> in
                <strong>PROMPT! Bildungsteilhabe stärken</strong> zusammen.
                In vier Teilprojekten
                fördern Lehramtsstudierende
                bildungsbenachteiligte und neu
                zugewanderte Kinder und
                Jugendliche in Förder- und
                Regelklassen, in der Notunterkunft und beim Berufseinstieg.
            </p>
        </div>
    </div>
</section>

<style>
    .year {
        cursor: pointer;
    }

    .transparent-bgr {
        background-color: rgba(0, 0, 0, .9);
    }
</style>
