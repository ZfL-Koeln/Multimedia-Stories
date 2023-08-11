<script>
    import funding from "$lib/assets/img/stock-img/istockphoto-1033164240.jpg";

</script>

<section id="our-projects" data-scrollspy="Unsere Förderprojekte">
    <h1 class="px-4 text-3xl md:text-6xl 2xl:text-7xl break-words hyphens-auto font-extrabold text-center font-sans pt-8 ">
        UNSERE FÖRDERPROJEKTE
    </h1>
    <div class="flex justify-center pt-4 pb-12">
        <div class="bg-black w-1/3 h-2" style="max-width: 200px;"></div>
    </div>
    <p class="font-roboto text-xl md:text-xl xl:text-2xl pb-12 max-w-[length:85%] text-center"
       style="margin: 0 auto;">
        Das Zentrum für Lehrer*innenbildung der Universität zu Köln fördert bildungsbenachteiligte und neu
        zugewanderte
        Kinder und Jugendliche mit den Bildungsprojekten <strong>WEICHENSTELLUNG für Viertklässler</strong> und
        <strong>PROMPT!
            Bildungsteilhabe stärken</strong>.
    </p>
    <img src="{funding}" alt="Unsere Förderprojekte" class="ml-auto mr-auto">
    <div id="projects-grid" class="max-w-[length:85%] text-center ml-auto mr-auto">
        <div id="weichenstellung">
        <span class="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-roboto">
                <strong>WEICHENSTELLUNG für Viertklässler</strong> ist
		ein Förderprogramm der ZEIT-Stiftung
		Ebelin und Gerd Bucerius. Es soll Grundschulkindern helfen, den schwierigen Übergang von der
                Grundschule auf eine weiterführende Schule zu bewältigen und ihr Potenzial bestmöglich auszuschöpfen.
                Lehramtsstudierende begleiten die Kinder im Rahmen ihrer Praxisphasen
                über einen Zeitraum von drei Jahren,
		jeweils vom Beginn der vierten Klasse bis
		zum Ende des sechsten Schuljahrs. Sie arbeiten mit ihnen in
		Lerngruppen und unternehmen einmal im
		Monat gemeinsam kulturelle Aktivitäten.
		</span>
        </div>
        <div id="prompt">
        <span class="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-roboto">
                <strong>PROMPT! Bildungsteilhabe stärken</strong> wurde vom ZfL ins Leben
			gerufen und wendet sich an neu zugewanderte und
			bildungsbenachteiligte Kinder und Jugendliche. Sie sollen
			möglichst schnell am regulären Schulunterricht teilnehmen und
			einen Schulabschluss erreichen können. Auch hier spielen Lehramtsstudierende eine Schlüsselrolle. Im Rahmen ihrer
			Praxisphasen arbeiten sie in Eins-zu-Eins-Situationen oder
			in Kleingruppen mit den Kindern und Jugendlichen – in der
			Schule oder in einer Notunterkunft. Der direkte und längerfristige
			Austausch zwischen Studierenden und Schüler*innen stärkt den
			für das Lernen wichtigen Beziehungsaufbau.
		</span>
        </div>
        <div id="weichenstellung-info">
            <a href="https://zfl.uni-koeln.de/praxisphasen/projekte/weichenstellung" style="text-align: center;">
                <button class="bg-[#F7D3E4] hover:bg-pink-300 text-black font-bold font-sans py-2 px-8 border border-black rounded-full mx-auto my-8 lg:mt-0"
                        style="box-shadow:+6px 6px black;">
                    mehr Infos zu<br>
                    <strong>WEICHENSTELLUNG</strong>
                </button>
            </a>
        </div>
        <div id="prompt-info">
            <a href="https://zfl.uni-koeln.de/praxisphasen/projekte/prompt-bildungsteilhabe-staerken"
               style="text-align: center;">
                <button class="bg-pink-200 hover:bg-pink-300 text-black font-bold font-sans py-2 px-8 border border-black rounded-full mx-auto my-8 lg:mt-0"
                        style="box-shadow:+6px 6px black;">
                    mehr Infos zu<br>
                    <strong>PROMPT!</strong>
                </button>
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    .bg-img {
        background-image: url("$lib/assets/img/stock-img/istockphoto-1033164240.jpg");
        background-repeat: no-repeat;
    }

    #projects-grid {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 0.2fr;
        gap: 0;
        grid-template-areas:
    "weichenstellung prompt"
    "weichenstellung-info prompt-info";
        justify-content: space-between;
        align-content: space-around;
        text-align: center;
    }

    #weichenstellung {
        grid-area: weichenstellung;
        text-align: center;
    }

    #prompt {
        grid-area: prompt;
    }

    #prompt,
    #weichenstellung {
        padding: 25px 50px;
    }

    #weichenstellung-info {
        grid-area: weichenstellung-info;
    }

    #prompt-info {
        grid-area: prompt-info;
    }

    #weichenstellung-info,
    #prompt-info {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media (max-width: 600px) {
      #projects-grid {
        grid-template-columns: 1fr;
        grid-template-areas:
                    "weichenstellung"
                    "weichenstellung-info"
                    "prompt"
                    "prompt-info";
      }

      #prompt,
      #weichenstellung {
        padding: 0;
      }

      #weichenstellung-info,
      #prompt-info {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
</style>
