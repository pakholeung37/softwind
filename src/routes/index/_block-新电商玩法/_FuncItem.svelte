<script lang="ts">
    import Button from "$lib/Button.svelte";

    export let url: string;
    export let title: string;
    export let subtitle: string;
    export let btn: string;
</script>

<action class="action-placeholder">
    <a
        class="item-container block w-60 flex flex-col items-center rounded-2xl overflow-hidden -mb-16"
        href={url}
        target="_blank"
    >
        <div class="icon-container flex justify-center items-center">
            <div class="h-36 w-36 flex justify-center items-center">
                <div class="icon w-24 h-24 flex justify-center items-center">
                    A
                </div>
            </div>
        </div>
        <p class="title text-lg text-gray-500 mt-6 mb-2">{title}</p>
        <div class="content flex flex-col items-center pb-6">
            <p class="text-gray-400 mb-4 text-sm">{subtitle}</p>
            <div class="flex justify-center">
                <Button>{btn}</Button>
            </div>
        </div>
    </a>
</action>

<style lang="scss">
    .item-container {
        @apply relative transition-all top-0 duration-200 delay-100 shadow-none;

        .icon-container {
            @apply w-36 h-36 bg-gray-100 rounded-24 transition-all duration-500;
        }

        .content {
            @apply opacity-0 transition-all duration-200;
        }
    }

    .action-placeholder {
        &:hover {
            .item-container {
                @apply -top-12  shadow-xl;
            }
            .icon-container {
                @apply w-full h-full rounded-none;
            }

            .content {
                @apply opacity-100;
            }
        }
    }
</style>
