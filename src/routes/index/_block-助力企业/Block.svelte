<script context="module" lang="ts">
    import rawData from "./data.json";
</script>

<script lang="ts">
    import Button from "$lib/Button.svelte";

    let data = rawData;
    let active = -1;

    function setActive(index) {
        active = index;
    }
</script>

<div class="py-16">
    <div class="title-container flex flex-col items-center mb-16">
        <h2 class="text-2xl text-gray-800">凡科商城助力企业抓住风口</h2>
        <h2 class="text-2xl text-gray-800">轻松搭建3端商城</h2>
    </div>
    <div class="flex justify-center ">
        <div class="w-104 rounded-2xl overflow-hidden shadow-xl mr-148">
            <div class="p-8 bg-orange-400">
                <span class="text-white text-2xl">
                    <p>1站3端轻松管理</p>
                    <p>多渠道流量铺货</p>
                </span>
            </div>
            <div class="items-container my-3">
                {#each data as item, index}
                    <div
                        class="item-container px-6 py-3 flex"
                        class:active={active === index}
                        on:mouseenter={() => setActive(index)}
                    >
                        <div class="icon-container">
                            <div
                                class="w-10 h-10 center flex justify-center items-center bg-gray-200 rounded-full mr-6"
                            >
                                A
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between items-center mb-3">
                                <p class="title text-xl text-gray-700">
                                    {item.title}
                                </p>
                                <div class="item-button">
                                    <Button size="small">{item.btn}</Button>
                                </div>
                            </div>
                            <p class="text-gray-400">{item.subtitle}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .item-container {
        @apply cursor-pointer;

        .item-button {
            @apply opacity-0 transition-opacity duration-500;
        }

        &.active,
        &:hover {
            @apply bg-red-200  bg-opacity-25;

            .title {
                @apply text-orange-400;
            }

            .item-button {
                @apply opacity-100;
            }
        }
    }
</style>
