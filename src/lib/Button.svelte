<script lang="ts">
    export let type = "default";
    export let className;
</script>

<button class="{type} py-2 px-6 {className}"><slot /></button>

<style lang="scss">
    .default {
        @apply border border-orange-400 rounded-full text-orange-400;
    }

    .default:hover {
        @apply bg-orange-400 text-white;
    }

    .primary {
        @apply bg-orange-400 text-white rounded-full;
    }

    .primary:hover {
        @apply bg-orange-500;
    }
</style>
