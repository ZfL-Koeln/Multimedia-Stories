<script>
    import starter from "$lib/assets/img/intro.jpg";
    import zfl from "$lib/assets/img/uzk-zfl-logo.png";
</script>
<style>
    .custom-font {
        font-size: calc(1.4rem + 0.5vw);
        font-family: Roboto, serif
    }
</style>
<div class="page-container " id="Page1" data-scrollspy="Startseite">
    <section class="pt-2 lg:pt-0 m-0 lg:flex-col lg:pb-0" style="background-color: #009DCC;">
        <div class="flex flex-col justify-around mx-auto w-full lg:w-1/2 xl:w-2/5 max-w-xl lg:mx-4 px-4 lg:px-8 max-h-screen h-screen overflow-hidden">
            <div class="mb-0 mx-auto text-white p-8 pt-2 sm:pt-8 px-2 custom-font">
                Chancenreich oder chancenlos?
                Die Weichen für den Bildungsweg von Kindern und Jugendlichen werden früh gestellt. Zu früh.
                Dabei ginge es auch anders.
            </div>
            <div>
                <img src="{zfl}" alt="ZfL-Logo" class="top-1 right-1 w-85" style="margin-left: -20px;">
            </div>
        </div>
        <div class="align-bottom inset-y-0 right-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 xl:w-3/5 xl:max-w-full h-screen lg:absolute xl:px-0 p-0">
            <img class="h-screen object-cover page-container p-0" src="{starter}" loading="lazy" alt=""/>
        </div>
    </section>
</div>
