<script>
	import Intro from "./pages/Intro.svelte"
	import Feedback from "./pages/Feedback.svelte"
	import Timeline from "./pages/Timeline.svelte"
	import SophiaPentinghaus from "./pages/SophiaPentinghaus.svelte"
	import Statistics from "./pages/Statistics.svelte"
	import BarChart from "./pages/BarChart.svelte"
	import AstridKraemer from "./pages/AstridKraemer.svelte"
	import DanielKeil from "./pages/DanielKeil.svelte"
	import BetuelSelcuk from "./pages/BetuelSelcuk.svelte"
	import FundedProjects2 from "./pages/FundedProjects2.svelte"
	import CallToAction from "./pages/CallToAction.svelte"
	import Footer from "./pages/Footer.svelte"
	import Map from "./Map.svelte"
	import ScrollspyMap from "$lib/ScrollspyMap.svelte";
	import EducationalImbalance from "$lib/pages/EducationalImbalance.svelte";
	import FundedProjectsV2 from "$lib/pages/FundedProjectsV2.svelte";
	import MainEmphasisV2 from "$lib/pages/MainEmphasisV2.svelte";

	let acceptYoutube = false;
	const youtubeMessage = 'Dieser Inhalt wird von YouTube bereitgestellt. Wenn Sie den Inhalt aktivieren, werden ggf. personenbezogene Daten verarbeitet und Cookies gesetzt.'

</script>
<section class="relative">
	<ScrollspyMap/>
	<Intro/>
	<EducationalImbalance/>
	<AstridKraemer bind:acceptYoutube="{acceptYoutube}" {youtubeMessage}/>
	<FundedProjectsV2/>
	<Timeline/>
	<SophiaPentinghaus bind:acceptYoutube="{acceptYoutube}" {youtubeMessage}/>
	<Statistics/>
	<BarChart/>
	<Feedback/>
	<DanielKeil bind:acceptYoutube="{acceptYoutube}" {youtubeMessage}/>
	<MainEmphasisV2/>
	<Map/>
	<BetuelSelcuk bind:acceptYoutube="{acceptYoutube}" {youtubeMessage}/>
	<FundedProjects2/>
	<CallToAction/>
	<Footer/>
</section>

<style lang="scss">

</style>
