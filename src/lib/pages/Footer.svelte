<script>
    import zfl from "$lib/assets/img/zfl-logo.png";

    function openModal() {
        document.getElementById("modal-imprint").classList.remove("hidden");
    }

    function closeModal() {
        document.getElementById("modal-imprint").classList.add("hidden");
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

<div id="modal-imprint" use:clickOutside on:click_outside={closeModal}
     class="fixed m-8 left-auto top-0 hidden lg:w-1/2 h-4/5 items-center overflow-y-scroll drop-shadow-lg">
    <div class="p-4 bg-gradient-pink-to-blue">
        <section class="relative bg-black p-8">
            <h2 class="text-[#ee9ac0] font-sans text-4xl font-extrabold uppercase">
                Impressum
            </h2>
            <div id="imprint-content">
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
                    zfl-kommunikationevents(at)uni-koeln.de<br>
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
                <strong>YouTube:</strong><br>
                    Unsere Seite verwendet für die Einbindung von Videos den Anbieter YouTube LLC , 901 Cherry Avenue,
                    San Bruno, CA 94066, USA, vertreten durch Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                    94043, USA. Normalerweise wird bereits bei Aufruf einer Seite mit eingebetteten Videos Ihre
                    IP-Adresse an YouTube gesendet und Cookies auf Ihrem Rechner installiert. Wir haben unsere
                    YouTube-Videos jedoch mit dem erweiterten Datenschutzmodus eingebunden (in diesem Fall nimmt YouTube
                    immer noch Kontakt zu dem Dienst Double Klick von Google auf, doch werden dabei laut der
                    Datenschutzerklärung von Google personenbezogene Daten nicht ausgewertet). Dadurch werden von
                    YouTube keine Informationen über die Besucher mehr gespeichert, es sei denn, sie sehen sich das
                    Video an. Wenn Sie das Video anklicken, wird Ihre IP-Adresse an YouTube übermittelt und YouTube
                    erfährt, dass Sie das Video angesehen haben. Sind Sie bei YouTube eingeloggt, wird diese Information
                    auch Ihrem Benutzerkonto zugeordnet (dies können Sie verhindern, indem Sie sich vor dem Aufrufen des
                    Videos bei YouTube ausloggen).
                </p>
                <p>
                    Von der dann möglichen Erhebung und Verwendung Ihrer Daten durch YouTube haben wir keine Kenntnis
                    und darauf auch keinen Einfluss. Nähere Informationen können Sie der Datenschutzerklärung von
                    YouTube unter <a href="https://policies.google.com/privacy?hl=de&gl=de">https://policies.google.com/privacy?hl=de&gl=de</a> entnehmen. Zudem verweisen wir für den
                    generellen Umgang mit und die Deaktivierung von Cookies auf unsere allgemeine Darstellung in dieser
                    Datenschutzerklärung.
                </p>
                <p>
                    <strong>Haftungsbeschränkung:</strong><br>
                    Das ZfL übernimmt keine Haftung für die Inhalte oder Aktualität externer Links. Für den Inhalt der
                    verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
                <p>
                    <strong>Fotos:</strong><br>
                    More Media (iStock), damircudic (iStock), Ryan Wallace (unsplash), lilartsy (unsplash) ,Vardan
                    Papikyan
                    (unsplash), Domingo Alvarez (unsplash), Kelly Sikkema (unsplash)
                </p>
                <p>
                    <strong>Illustrationen & Icons:</strong><br>
                    sketchify (Canva), pause08 (Canva), Muhammad Usman (Canva), nounproject (Canva)
                </p>
                ©2023 Universität zu Köln
            </div>
            <div on:click={closeModal} on:keypress={closeModal()} role="button" tabindex="0"
                 class="absolute top-4 right-4 text-lg text-gray-500 hover:text-white border-2 backdrop-blur-md rounded-full border-gray-500 hover:border-white w-10 h-10 pb-1 flex justify-center items-center hover:-rotate-90 duration-300 hover:font-black transition-all ease-in-out select-none cursor-pointer">
                ╳
            </div>
        </section>
    </div>
</div>
<footer id="footer" class="relative bg-black w-full page-container">
    <div class="flex">
        <div class="lg:w-1/5"></div>

        <article role="heading"
                 aria-level="1"
                 class="text-white text-xl lg:text-3xl text-center font-roboto pt-20 lg:w-3/5 px-5">
            Das Zentrum für Lehrer*innenbildung (ZfL) unterstützt
            bildungsbenachteiligte Kinder und Jugendliche mit
            eigenen Förderprojekten, an denen Studierende im
            Rahmen ihrer Praxisphasen mitwirken.
        </article>
    </div>
    <div class="lg:translate-y-12 w-full lg:w-fit">
        <img src="{zfl}" alt="ZfL Logo" class="w-60 mx-auto lg:ml-8">
    </div>
    <nav id="navbar" class="flex justify-center text-white py-4">
        <a href="https://zfl.uni-koeln.de">Website</a>
        <a href="https://www.instagram.com/zflkoeln/">Instagram</a>
        <a href="https://www.facebook.com/zflkoeln">Facebook</a>
        <a href="https://twitter.com/zflkoeln">Twitter</a>
        <button on:click={openModal}>Impressum</button>
    </nav>
</footer>

<style lang="scss">
  #modal-imprint {
    z-index: 2;
  }

  #imprint-content {
    color: #fff;
    margin-top: 2rem;
    font-family: Roboto, sans-serif !important;

    p {
      margin: 1rem 0;
    }
  }

  footer #navbar {
    cursor: pointer;

    a::after {
      padding: 0 5px;
      content: '|';
    }

    a:last-child::after {
      content: '';
    }
  }
</style>
