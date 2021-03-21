<script lang="ts">
    import Swiper from "$lib/swiper/Swiper.svelte";
    import Slide from "$lib/swiper/Slide.svelte";
</script>

<div class="banner w-full h-128">
    <Swiper adaptive>
        <Slide>
            <div class="bg-red-100">helloworld</div>
        </Slide>
        <Slide>
            <div class="bg-blue-100">helloworld2</div>
        </Slide>
        <Slide>
            <div class="bg-green-100">helloworld3</div>
        </Slide>
    </Swiper>
</div>
