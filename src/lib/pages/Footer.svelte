<script>
    import zfl from "$lib/assets/img/uzk-zfl-logo.png";

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

<footer id="footer" class="relative bg-black w-full page-container">
    <div class="flex">
        <div class="lg:w-1/5"></div>

        <article class="text-white text-xl lg:text-3xl text-center font-roboto pt-20 lg:w-3/5 px-5">
            Das Zentrum für Lehrer*innenbildung (ZfL) unterstützt
            bildungsbenachteiligte Kinder und Jugendliche mit
            eigenen Förderprojekten, an denen Studierende im
            Rahmen ihrer Praxisphasen mitwirken.
        </article>
    </div>
    <div class="lg:translate-y-12 w-full lg:w-fit">
        <img src="{zfl}" alt="ZfL Logo" class="w-80 mx-auto lg:ml-8">
    </div>
    <nav id="navbar" class="text-center text-white py-4 px-6">
        <a href="https://zfl.uni-koeln.de">Website</a>
        <a href="https://www.instagram.com/zflkoeln/">Instagram</a>
        <a href="https://www.linkedin.com/company/zflkoeln/">LinkedIn</a>
        <a href="/impressum">Impressum</a>
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
