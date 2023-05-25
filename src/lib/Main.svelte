<script>
    import Page1 from "./pages/Page1.svelte"
    import Page2 from "./pages/Page2.svelte"
    import Page3 from "./pages/Page3.svelte"
    import Page4 from "./pages/Page4.svelte"
    import Page5 from "./pages/Page5.svelte"
    import Page6 from "./pages/Page6.svelte"
    import Page7 from "./pages/Page7.svelte"
    import Page8 from "./pages/Page8.svelte"
    import Page9 from "./pages/Page9.svelte"
    import Page10 from "./pages/Page10.svelte"
    import Page11 from "./pages/Page11.svelte"
    import Page12 from "./pages/Page12.svelte"
    import Page13 from "./pages/Page13.svelte"
    import Page14 from "./pages/Page14.svelte"
    import Page15 from "./pages/Page15.svelte"
    import Page17 from "./pages/Page17.svelte"
    import Page18 from "./pages/Page18.svelte"
    import Page19 from "./pages/Page19.svelte"
    import Page20 from "./pages/Page20.svelte"
    import Footer from "./pages/Footer.svelte"
    import Map from "./Map.svelte"
		import ScrollspyMap from "$lib/ScrollspyMap.svelte";
</script>

<!-- Sticky IN ARBEIT Nachricht -->
<div class="fixed z-50 top-0 right-0 w-full text-center text-red-700 font-sans font-black">[IN ARBEIT]</div>

<section class="relative">
<ScrollspyMap/>
	<Page1/>
	<Page2/>
	<Page3/>
	<Page4/>
	<Page5/>
	<Page6/>
	<Page7/>
	<Page8/>
	<Page9/>
	<Page10/>
	<Page11/>
	<Page12/>
	<Page13/>
	<Page14/>
	<Page15/>
	<!-- Map here -->
	<Map/>
	<!-- Map End -->
	<Page17/>
	<Page18/>
	<Page19/>
	<Page20/>
	<Footer/>
</section>

<style lang="postcss">
</style>

<!--
!TODO: Links einfügen
!TODO: Bilder ersetzen
!TODO: Gewünschte Page 4 Variante auswählen. Rest Löschen
*TODO: Diagramm (Page11 Component) Linien der X-Achse etwas auffälliger
?*TODO: Floating ScrollSpy zur besseren Navigation?
-->