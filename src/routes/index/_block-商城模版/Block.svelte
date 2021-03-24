<script context="module" lang="ts">
    import rawData from "./data.json";
</script>

<script lang="ts">
    import Button from "$lib/Button.svelte";
    import Swiper from "$lib/swiper/Swiper.svelte";
    import SwiperItem from "$lib/swiper/SwiperItem.svelte";

    let data = rawData;
    let activeIndex = 0;
</script>

<div class="hidden">hah</div>
<div class="py-16">
    <div class="title-container flex flex-col items-center mb-8">
        <h2 class="text-2xl text-gray-800">1000+行业商城模板0元免费用</h2>
    </div>
    <div class="flex flex-col items-center ">
        <!--  -->
        <nav class="mb-8">
            <ul class="flex relative">
                {#each data as navItem, index}
                    <li
                        class="nav-item py-4 px-6 border-b border-gray-100"
                        class:active={activeIndex === index}
                        on:mouseenter={() => (activeIndex = index)}
                    >
                        {navItem.title}
                    </li>
                {/each}
                <div
                    class="indicator active-{activeIndex} absolute h-1 w-8 rounded-full bg-orange-400 bottom-0"
                />
            </ul>
        </nav>
        <Swiper width="700px" height="400px">
            {#each data[activeIndex].items as item}
                <SwiperItem>
                    <div>{item.title}</div>
                </SwiperItem>
            {/each}
        </Swiper>
    </div>
    <div class="flex justify-center ">
        <Button size="large">进入管理</Button>
    </div>
</div>

<style lang="scss">
    .nav-item {
        @apply cursor-pointer;
        &.active {
            @apply text-orange-400;
        }
    }
    .indicator {
        @apply transition-left duration-200;
        &.active-0 {
            @apply left-12;
        }
        &.active-1 {
            @apply left-44;
        }
        &.active-2 {
            @apply left-78;
        }
    }
</style>
