<script>
    import bookmark from "$lib/assets/img/bookmark.svg"
    import {onMount} from 'svelte';

    let scrollspyItems = [];
    let activeItem = '';

    function handleScroll() {
        const scrollPosition = window.scrollY;

        scrollspyItems.forEach((item) => {
            const section = document.getElementById(item.id);
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                activeItem = item.id;
            }
        });
    }

    onMount(() => {
        scrollspyItems = Array.from(document.querySelectorAll('[data-scrollspy]')).map((el) => ({
            id: el.id,
            label: el.dataset.scrollspy,
        }));
        window.addEventListener('scroll', handleScroll);
        console.log(scrollspyItems.id)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>
<style>
    .sidebar {
        font-size: .9rem;
        position: fixed;
        top: 0;
        right: -240px;
        width: 280px;
        transition: right 0.3s ease-in-out;
        z-index: 9999;
    }

    .sidebar:hover {
        right: 0;
    }

    .sidebar:hover,
    .sidebar-control:hover + .sidebar {
        right: 0;
    }

    .scrollspy-item {
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .scrollspy-item:hover {
        background-color: lightskyblue;
    }

    .scrollspy-item.active {
        background-color: deepskyblue;
        font-weight: bold;
    }
</style>

<div class="sidebar flex mt-8 font-roboto">
    <div class="handle w-10 h-10 border border-r-0 border-white bg-white shadow-md backdrop-filter backdrop-blur-sm rounded-l-full "
         style="width: 40px;">
        <img src="{bookmark}" alt="bookmark icon" class="w-8 h-8 m-auto">
    </div>
    <div class="bg-white shadow-md rounded-bl-lg w-60">
        <span class="text-xl font-bold underline">Inhaltsverzeichnis</span>
        <ul class="">
            {#each scrollspyItems as item}
                <li class="scrollspy-item pl-1 list-decimal list-inside {item.id === activeItem ? 'active' : ''} ">
                    <button
                            on:click={() => {
          const section = document.getElementById(item.id);
          const sectionOffset = section.offsetTop;
          window.scrollTo({ top: sectionOffset, behavior: 'smooth' });
        }}>
                        {item.label}
                    </button>
                </li>
            {/each}
        </ul>

    </div>

</div>
