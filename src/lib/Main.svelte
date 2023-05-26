<script>
    import Intro from "./pages/Intro.svelte"
    import NoGraduation from "./pages/NoGraduation.svelte"
    import Page3 from "./pages/Page3.svelte"
    import Feedback from "./pages/Feedback.svelte"
    import UnequalOpportunities from "./pages/UnequalOpportunities.svelte"
    import Timeline from "./pages/Timeline.svelte"
    import FundedProjects from "./pages/FundedProjects.svelte"
    import SophiaPentinghaus from "./pages/SophiaPentinghaus.svelte"
    import StudentAdvantages from "./pages/StudentAdvantages.svelte"
    import Statistics from "./pages/Statistics.svelte"
    import BarChart from "./pages/BarChart.svelte"
    import AstridKraemer from "./pages/AstridKraemer.svelte"
    import MainEmphasis from "./pages/MainEmphasis.svelte"
    import SettingTheCourse from "./pages/SettingTheCourse.svelte"
    import Prompt from "./pages/Prompt.svelte"
    import DanielKeil from "./pages/DanielKeil.svelte"
    import BetuelSelcuk from "./pages/BetuelSelcuk.svelte"
    import FundedProjects2 from "./pages/FundedProjects2.svelte"
    import CallToAction from "./pages/CallToAction.svelte"
    import Footer from "./pages/Footer.svelte"
    import Map from "./Map.svelte"
		import ScrollspyMap from "$lib/ScrollspyMap.svelte";
</script>

<!-- Sticky IN ARBEIT Nachricht -->
<div class="fixed z-50 top-0 right-0 w-full text-center text-red-700 font-sans font-black">[IN ARBEIT]</div>

<section class="relative">
<ScrollspyMap/>
	<Intro/>
	<NoGraduation/>
	<Page3/>
	<Feedback/>
	<UnequalOpportunities/>
	<Timeline/>
	<FundedProjects/>
	<SophiaPentinghaus/>
	<StudentAdvantages/>
	<Statistics/>
	<BarChart/>
	<AstridKraemer/>
	<MainEmphasis/>
	<SettingTheCourse/>
	<Prompt/>
	<!-- Map here -->
	<Map/>
	<!-- Map End -->
	<DanielKeil/>
	<BetuelSelcuk/>
	<FundedProjects2/>
	<CallToAction/>
	<Footer/>
</section>

<style lang="postcss">
</style>

<!--
!TODO: Links einfügen
!TODO: Bilder ersetzen
!TODO: Gewünschte Page 4 Variante auswählen. Rest Löschen
*TODO: Diagramm (BarChart Component) Linien der X-Achse etwas auffälliger
?*TODO: Floating ScrollSpy zur besseren Navigation?
-->