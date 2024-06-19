<script lang="ts" setup>
defineProps<{
    to: string,
    image: string,
}>();
</script>

<template>
    <div class="card" :style="`background-image: url(${image});`">
        <NuxtLink :to="to">
            <label>
                <slot />
            </label>
        </NuxtLink>
    </div>
</template>

<style lang="scss">
.card {
    aspect-ratio: 4 / 3;
    border: 0.25rem solid var(--accent-color);
    margin: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;

    &>a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &>label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all var(--hover-time);
            width: 100%;
            height: 100%;
            backdrop-filter: blur(2px) brightness(50%);
            cursor: inherit;
            color: var(--text-accent-color);
            user-select: none;
            font-size: 1.5rem;
        }

        &:hover,
        &:focus-visible {
            &>label {
                width: 50%;
                height: 50%;
                border-radius: 1rem;
            }
        }
    }
}
</style>
