<script>
    import Starter from "$lib/Main.svelte";
    import '$lib/styles.scss';
    import og_image from '$lib/assets/img/multimedia-story-zfl.jpg';
</script>

<Starter/>

<svelte:head>
    <meta property="og:site_name" content="ZfL Multimedia Stories">
    <meta property="og:locale" content="de">
    <meta property="og:url" content="https://zfl-stories.uni-koeln.de">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Bildungsungleichheit entgegenwirken">
    <meta property="og:description"
          content='Wie das ZfL bildungsbenachteiligte Kinder und Jugendliche mit eigenen Förderprojekten unterstützt'/>
    <meta property="og:image" content="{`${og_image}`}">
    <meta property="og:image:alt" content="ZfL Multimedia Stories">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="627">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="zfl-stories.uni-koeln.de">
    <meta property="twitter:url" content="https://zfl-stories.uni-koeln.de">
    <meta name="twitter:title" content="ZfL Multimedia Stories">
    <meta name="twitter:description"
          content="Bildungsungleichheit entgegenwirken – Wie das ZfL bildungsbenachteiligte Kinder und Jugendliche mit eigenen Förderprojekten unterstützt">
    <meta name="twitter:image" content="{`${og_image}`}">
</svelte:head>
