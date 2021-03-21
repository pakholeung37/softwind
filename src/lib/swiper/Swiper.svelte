<script context="module" lang="ts">
    let instance;
    export function prev(...args) {
        return instance && instance.prev(...args);
    }
    export function next(...args) {
        return instance && instance.next(...args);
    }
    export function goto(...args) {
        return instance && instance.goTo(...args);
    }
</script>

<script lang="ts">
    import Swiper from "siema";
    import { createEventDispatcher } from "svelte";
    export let autoPlay = true;
    export let speed = 2500;
    export let duration = 500;
    export let loop = true;
    export let startIndex = 0;
    export let height = 300; //px
    export let adaptive = false; //是否适应容器

    let options;
    let swiperElement;
    const dispatch = createEventDispatcher();

    $: options = { autoPlay, speed, duration, loop, startIndex };

    function swiperable(el, options) {
        instance = new Swiper({ selector: el, ...options });
        dispatch("init");
        return {
            update(options) {
                instance && instance.destroy();
                instance = new Swiper({ selector: el, ...options });
                dispatch("update");
            },
            destroy() {
                instance && instance.destroy() && dispatch("destroy");
            },
        };
    }
</script>

<div
    class="swiper overflow-hidden"
    use:swiperable={options}
    bind:this={swiperElement}
    style="height: {adaptive ? '100%' : height + 'px'}"
>
    <slot />
</div>
