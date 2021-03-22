<script context="module" lang="ts">
    export type SwiprableOptions = {
        autoPlay?: boolean;
        interval?: number;
        duration?: number;
        loop?: boolean;
        startIndex?: number;
    };
</script>

<script lang="ts">
    import Swiper from "./Siema";
    import { createEventDispatcher } from "svelte";
    // for binding
    export let value = 0;

    export let autoPlay = false;
    export let interval = 3000;
    export let duration = 500;
    export let loop = true;
    export let startIndex = 0;
    // export let height = 300; //px
    export let adaptive = false; //是否适应容器

    let instance;
    let hasMounted = false;
    let options: SwiprableOptions;

    const dispatch = createEventDispatcher();

    $: options = { autoPlay, interval, duration, loop, startIndex };

    function valueUpdate(value: number) {
        instance && instance.goTo(value);
    }
    $: valueUpdate(value);

    function swiperable(el, options) {
        let autoPlayTimer = null;
        function init(el, options) {
            value = options.startIndex;
            instance = new Swiper({
                selector: el,
                ...options,
                onInit: () => {
                    hasMounted = true;
                    dispatch("init", options);
                },
                onChange: () => {
                    const v = instance.currentSlide;
                    value = v;
                    dispatch("change", { index: v });
                },
            });
        }
        init(el, options);
        return {
            update(options) {
                instance && instance.destroy();
                init(el, options);
                dispatch("update");
            },
            destroy() {
                if (instance) {
                    instance && instance.destroy();
                    instance = null;
                }
                if (autoPlayTimer) {
                    clearInterval(autoPlayTimer);
                }
                dispatch("destroy");
            },
        };
    }
</script>

<div class="swiper relative" use:swiperable={options}>
    <slot />
</div>
