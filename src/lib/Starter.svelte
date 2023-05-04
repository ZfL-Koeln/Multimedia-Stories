<script>
    import zfl from "$lib/assets/img/zfl-logo.png"
    import starter from "$lib/assets/img/stock-img/starter.jpg"
    import page2 from "$lib/assets/img/stock-img/page-2.jpg"
    import page3 from "$lib/assets/img/stock-img/page3.jpg"
</script>

<section id="starter" class="grid grid-cols-3" style="height: 100vh">
    <div style="height: 100vh; position: relative" class="bg-black col-span-1">
      <span class="text-white text-2xl block p-20 justify-center ">
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
      </span>
        <img src="{zfl}" alt="ZfL-Logo" style="position: absolute; height: 15%; bottom: 1rem; left: 1rem">
    </div>
    <div style="height: 100vh" class="col-span-2">
        <img src="{starter}" alt="Starter Image" class="overflow-y-auto" style="height: 100%; object-fit: cover">
    </div>
</section>

<section id="page-2" class="flex flex-col" style="height: 100vh">
        <div class="text-4xl text-black font-bold align-middle content-center">6 PROZENT OHNE ABSCHLUSS</div>
          <article class="flex flex-col md:flex-row text-black text-2xl p-20 justify-center ">
              <img src="{page2}" alt="Page2 Stock Img" style="height: 100%">
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
          </article>
</section>

<section id="page-3" class="grid grid-cols-2" style="height: 100vh">
    <div>
        <span>
            Auch wenn die Zahlen insgesamt auf hohem Niveau
            stagnieren, steigen sie vor allem in Bremen,
            Rheinland-Pflanz und dem Saarland während sie in
            Mecklenburg-Vorpommern und Brandenburg sinken.
            Jugendliche ohne Schulabschluss haben kaum
            Chancen auf eine qualifizierte Ausbildung und ein
            hohes Risiko für Arbeitslosigkeit. Das ist nicht nur
            individuelles Schicksal, sondern ein
            gesellschaftliches Problem. Dringend benötigte
            Fachkräfte können nicht ausgebildet werden,
            Langzeitarbeitslosigkeit hat neben gesundheitlichen
            auch wirtschaftliche Folgen.
            <br><br>
            <span class="text-xs">
                Klaus Klemm (2023): Jugendliche ohne Hauptschulabschluss.
                Demografische Verknappung und qualifikatorische Vergeudung.
                Bertelsmann-Stiftung
            </span>
        </span>
    </div>
    <div>
        <img src="{page3}" alt="Stock Image P3" style="height: 50%">
    </div>
</section>




<style lang="postcss">
    #starter {
        background-color: #0078a8;
    }
</style>
