<script context="module" lang="ts">
    import Button from "$lib/Button.svelte";
    import data from "./data.json";
    import NavButton from "./NavButton.svelte";
    import Logo from "$lib/assets/mall_logo.svg";
    import Divider from "$lib/Divider.svelte";
</script>

<div class="header-placeholder w-full h-16" />

<header
    class="header fixed top-0 w-full h-16 bg-white shadow-md flex px-8 justify-between z-10"
>
    <div class="left flex items-center">
        <div class="logo">
            <img src={Logo} width="140" height="64" alt="凡科商城" />
        </div>
        <Divider h="4" />
        <button
            class="default border border-gray-300 py-1 px-2 rounded-full text-xs"
            >凡科网旗下产品</button
        >
    </div>
    <div class="right flex items-center">
        <nav class="nav h-full">
            <ul class="flex h-full">
                {#each data.nav as item}
                    <li><NavButton>{item.name}</NavButton></li>
                {/each}
            </ul>
        </nav>
        <Button type="primary" className="text-sm">进入管理</Button>
    </div>
</header>

<style>
    button.default:hover {
        @apply border-orange-400 text-orange-400;
    }
</style>
