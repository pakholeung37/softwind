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
    export type SwiprableOptions = {
        autoPlay?: boolean;
        interval?: number;
        duration?: number;
        loop?: boolean;
        startIndex?: number;
    };
</script>

<script lang="ts">
    import Swiper from "siema";
    import { createEventDispatcher } from "svelte";

    export let autoPlay = false;
    export let interval = 3000;
    export let duration = 500;
    export let loop = true;
    export let startIndex = 0;
    // export let height = 300; //px
    export let adaptive = false; //是否适应容器

    let options;

    let swiperElement;
    const dispatch = createEventDispatcher();

    $: options = { autoPlay, interval, duration, loop, startIndex };

    function swiperable(el, options) {
        let autoPlayTimer = null;
        let index;
        function init(el, options) {
            index = options.startIndex;
            instance = new Swiper({
                selector: el,
                ...options,
                onInit: () => {
                    const { autoPlay, interval, duration } = options;
                    if (autoPlay) {
                        console.log(instance);
                        autoPlayTimer = setInterval(() => {
                            instance.next();
                        }, interval + duration);
                    }
                    dispatch("init", options);
                },
                onChange: () => {
                    dispatch("change", { index: instance.currentSlide });
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
                }
                if (autoPlayTimer) {
                    clearInterval(autoPlayTimer);
                }
                dispatch("destroy");
            },
        };
    }
</script>

<div
    class="swiper overflow-hidden"
    use:swiperable={options}
    style={adaptive && "height: 100%"}
>
    <slot />
</div>
