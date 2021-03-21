<script lang="ts">
    import Swiper from "$lib/swiper/Swiper.svelte";
    import Slide from "$lib/swiper/Slide.svelte";
    import Slide1 from "./_小程序制作.svelte";
    import Slide2 from "./_凡科商城.svelte";
</script>

<div class="banner w-full h-128 bg-red-400">
    <Swiper
        autoPlay={true}
        interval={5000}
        on:change={(event) => console.log(event)}
    >
        <Slide>
            <div class="h-128">
                <Slide1 />
            </div>
        </Slide>
        <Slide>
            <div class="h-128">
                <Slide2 />
            </div>
        </Slide>
        <Slide>
            <div class="bg-green-100 h-128">helloworld3</div>
        </Slide>
    </Swiper>
</div>
