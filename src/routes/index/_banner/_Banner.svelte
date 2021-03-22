<script lang="ts">
    import Swiper from "$lib/swiper/Swiper.svelte";
    import SwiperItem from "$lib/swiper/SwiperItem.svelte";
    import Slide1 from "./_小程序制作.svelte";
    import Slide2 from "./_凡科商城.svelte";
    import Slide3 from "./_凡客营销节.svelte";

    const slides = [Slide1, Slide2, Slide3];
    let currentIndex = 0;
    function swiperChange({ detail: { index = 0 } }) {
        console.log("swiper change: ", index);
    }
    function handleIndicatorClick(index) {
        currentIndex = index;
    }
</script>

<div class="banner relative w-full bg-red-400">
    <Swiper interval={5000} bind:value={currentIndex} on:change={swiperChange}>
        {#each slides as slide}
            <SwiperItem>
                <svelte:component this={slide} />
            </SwiperItem>
        {/each}
    </Swiper>
    <div class="flex justify-center">
        <ul class="flex items-center justify-between absolute bottom-4 mx-auto">
            {#each slides as _, index}
                <li
                    class="dot"
                    class:active={index === currentIndex}
                    on:click={() => handleIndicatorClick(index)}
                />
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .dot {
        @apply w-2 h-2 bg-white rounded-full mx-1 bg-opacity-70 transition-all cursor-pointer;
        &.active {
            @apply bg-opacity-100 w-4;
        }
    }
</style>
