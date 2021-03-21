<script context="module" lang="ts">
    import rawData from "./numbers.json";
</script>

<script lang="ts">
    import { onMount } from "svelte";

    type Item = typeof rawData[number] & { value?: number };
    let data: Item[] = rawData;
    data.forEach((item) => {
        item.value = 0;
    });
    onMount(() => {
        const duration = 1500;
        const interval = 20;
        const k = (duration * duration) / interval / interval; // k = (d/i)^2
        let times = 0;
        let timerId = setInterval(() => {
            if (times >= duration / interval) {
                clearInterval(timerId);
                timerId = null;
            } else {
                times++;
                data.forEach((item) => {
                    // y = item.n * times^2 * (1 / duration ) / k
                    item.value = Math.min(
                        Math.floor((item.n * times * times) / k),
                        item.n
                    );
                });
                data = [...data];
            }
        }, interval);

        return () => {
            clearInterval(timerId);
        };
    });
</script>

<div class="w-full shadow-md">
    <ul class="flex items-center justify-center">
        {#each data as item}
            <li class="flex flex-col items-center my-8 px-16">
                <div class="flex items-start">
                    <div class="text-4xl mr-1 font-thin">
                        {item.value}
                    </div>
                    <div class="text-sm font-light mt-1">
                        {item.unit}<span class="text-gray-400">+</span>
                    </div>
                </div>
                <div class="text-sm text-gray-600 mt-6">{item.title}</div>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    li ~ li {
        @apply border-l border-gray-200;
    }
</style>
