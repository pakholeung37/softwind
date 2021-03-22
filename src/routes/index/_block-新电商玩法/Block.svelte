<script context="module" lang="ts">
    import rawData from "./data.json";
</script>

<script lang="ts">
    import FuncItem from "./_FuncItem.svelte";
    import Button from "$lib/Button.svelte";
    let data = rawData;
</script>

<div class="py-16">
    <div class="title-container flex flex-col items-center mb-16">
        <h2 class="text-2xl text-gray-800">新电商玩法来袭</h2>
        <h2 class="text-2xl text-gray-800">你，抓住红利了吗？</h2>
    </div>
    <div class="flex justify-center pb-16">
        <ul class="grid grid-cols-4 gap-12">
            {#each data as item}
                <li><FuncItem {...item} /></li>
            {/each}
        </ul>
    </div>
    <div class="flex justify-center">
        <Button size="large">免费体验</Button>
    </div>
</div>
