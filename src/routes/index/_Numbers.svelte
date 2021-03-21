<script context="module" lang="ts">
    import numbers from "./numbers.json";
</script>

<div class="w-full shadow-md">
    <ul class="flex items-center justify-center">
        {#each numbers as item}
            <li class="flex flex-col items-center my-8 px-16">
                <div class="flex items-start">
                    <div class="text-4xl mr-1 font-thin">
                        {item.n}
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
