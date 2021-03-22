<script lang="ts">
    export let type: "default" | "primary" = "default";
    export let size: "default" | "small" | "large" = "small";
    export let className: string = "";
</script>

<button class="button t-{type} s-{size} py-2 px-6 rounded-full {className}">
    <slot />
</button>

<style lang="scss">
    .button {
        @apply border border-orange-400 text-orange-400 transition-all duration-200;
        &:hover {
            @apply bg-orange-400 text-white;
        }
    }

    button.t-primary {
        @apply bg-orange-400 text-white;
        &:hover {
            @apply bg-orange-600 border-orange-600;
        }
    }

    button.s-small {
        @apply text-sm px-4 py-1;
    }
    button.s-large {
        @apply text-lg px-10 py-2;
    }
</style>
