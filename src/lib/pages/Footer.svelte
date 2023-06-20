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
            if (node && !node.contains(event.target) && !event.defaultPrevented) {
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

<div id="modal2" use:clickOutside on:click_outside={closeModal}
     class="border-2 border-gray-200 fixed m-8 left-auto top-0 hidden lg:w-1/2 h-4/5 items-center overflow-y-scroll">

    <section class="relative bg-black p-8">
        <h2 class="text-[#ee9ac0] font-sans text-4xl font-extrabold uppercase">
            Impressum
        </h2>
        <div id="footer-content">
            <p>
                <strong>Zentrum für Lehrer*innenbildung</strong><br>
                Universität zu Köln<br>
                Albertus-Magnus-Platz<br>
                50923 Köln<br><br>

                Geschäftsführer: Dr. Daniel Kramp<br>
                Stellvertretende Geschäftsführerin: Dr.' Gesine Boesken<br>
            </p>
            <p>
                Tel.: +49 (0)221-470 5687 (Merle Hettesheimer)<br>
                zfl-kommunikationevents (at)uni-koeln.de<br>
                <a href="https://zfl.uni-koeln.de">https://zfl.uni-koeln.de</a>
            </p>
            <p>
                Das Zentrum für Lehrer*innenbildung ist eine Zentrale Einrichtung der Universität zu Köln.<br>
                Die Pflichtangaben nach dem Telemediengesetz finden Sie hier: <a
                    href="https://verwaltung.uni-koeln.de/impressum">http://verwaltung.uni-koeln.de/impressum</a>
            </p>
            <p>
                <strong>Redaktion:</strong><br>
                Merle Hettesheimer (Redaktionsleitung)<br>
                Anna Becker<br>
                Nele Honig<br>
                Clara Kirsch<br>
                Kim Wilken<br>
            </p>
            <p>
                <strong>Gestaltung:</strong><br>
                Lili Beckers
            </p>
            <p>
                <strong>Technische Umsetzung:</strong><br>
                Dr. Jan Wieners (Leitung)<br>
                Sascha Baumgartner<br>
                Armağan Gülcicek
            </p>
            <p>
                <strong>Datenschutz:</strong><br>
                Hier finden Sie die Datenschutzerklärung der Universität zu Köln: <a
                    href="https://www.portal.uni-koeln.de/datenschutz1.html">https://www.portal.uni-koeln.de/datenschutz1.html</a>
            </p>
            <p>
                <strong>Haftungsbeschränkung:</strong><br>
            Das ZfL übernimmt keine Haftung für die Inhalte oder Aktualität externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            <p>
                <strong>Fotos:</strong><br>
            More Media (iStock), damircudic (iStock), Ryan Wallace (unsplash), lilartsy (unsplash) ,Vardan Papikyan (unsplash), Domingo Alvarez (unsplash), Kelly Sikkema (unsplash)
            </p>
            <p>
                <strong>Illustrationen & Icons:</strong><br>
            sketchify (Canva), pause08 (Canva), Muhammad Usman (Canva), nounproject (Canva)
            </p>
            ©2023 Universität zu Köln
        </div>
        <div on:click={closeModal}
             class="absolute top-4 right-4 text-lg text-gray-500 hover:text-white border-2 font-black rounded-full border-gray-500 hover:border-white w-10 h-10 pb-1 flex justify-center items-center hover:-rotate-90 duration-300 transition-all ease-in-out select-none cursor-pointer">
            ╳
        </div>
    </section>
</div>
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
    <nav id="linkbar" class="flex justify-center text-white py-4">
        <span class=" after:content-['|']"><a href="https://zfl.uni-koeln.de">Website</a></span>
        <span class=" after:content-['|']"><a href="#">Kontakt</a></span>
        <span class=" after:content-['|']"><a href="https://www.instagram.com/zflkoeln/">Instagram</a></span>
        <span class=" after:content-['|']"><a href="https://www.facebook.com/zflkoeln">Facebook</a></span>
        <span class=""><a href="#" on:click={openModal}>Impressum</a></span>
    </nav>
</footer>

<style lang="scss">
  #footer-content {
    color: #fff;
    margin-top: 2rem;
    font-family: Roboto, sans-serif !important;

    p {
      margin: 1rem 0;
    }
  }

  footer #linkbar a {
    padding: 0 5px;
  }
</style>
