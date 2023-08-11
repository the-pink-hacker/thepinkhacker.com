<script setup lang="ts">
defineProps({
    alt: {
        type: String,
        default: "",
    },
    src: String,
    to: {
        type: String,
        default: "/",
    },
});

const imageOffsetX = ref(0);
const imageOffsetY = ref(0);

function isRoute(url: string) {
    return url.startsWith("/");
}

function hover(event: MouseEvent) {
    const target = <HTMLElement>event.currentTarget;
    const relativeMouseX = event.clientX - target.getBoundingClientRect().x;
    const relativeMouseY = event.clientY - target.getBoundingClientRect().y;
    imageOffsetX.value = -(relativeMouseX - (target.clientWidth / 2)) / target.clientWidth;
    imageOffsetY.value = -(relativeMouseY - (target.clientHeight / 2)) / target.clientHeight;
}

function resetHover() {
    imageOffsetX.value = 0;
    imageOffsetY.value = 0;
}
</script>

<template>
    <div class="carousel-image-wrapper" @mousemove="hover" @mouseleave="resetHover">
        <a v-if="isRoute(to)" class="carousel-image-link" :href="to" />
        <NuxtLink v-else :to="to" class="carousel-image-link" />
        <div class="carousel-image-title-wrapper">
            <div class="carousel-image-title">
                <slot />
            </div>
        </div>
        <img class="carousel-image" v-if="src != null" :alt="alt" :src="src"
            :style="`--image-offset-x: ${imageOffsetX}; --image-offset-y: ${imageOffsetY};`" />
    </div>
</template>

<style lang="scss">
.carousel-image-wrapper {
    cursor: pointer;
    position: relative;
    display: flex;
    flex: 0 0 auto;
    width: 300px;
    height: 100%;
    user-select: none;
    overflow: hidden;
    transition-duration: var(--ui-move-time);
    transition-property: width, min-width;
    justify-content: center;
    align-items: center;

    &:hover {
        .carousel-image-title::after {
            width: 100%;
        }

        .carousel-image {
            transform: translate(calc(var(--image-offset-x) * var(--image-zoom-move)), calc(var(--image-offset-y) * var(--image-zoom-move))) scale(calc(100% + var(--image-zoom-scale)));
        }

        .carousel-image-title-wrapper {
            font-size: var(--font-large-size);
            opacity: 100%;
            background-color: rgba(0, 0, 0, 67%);
            transition-duration: var(--ui-move-time);
        }
    }
}

.carousel-image-title-wrapper {
    display: flex;
    background-color: transparent;
    transition-duration: var(--hover-time);
    transition-property: background-color, width, height;
    position: absolute;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 33%;
    width: 33%;
    min-height: fit-content;
    min-width: fit-content;
    padding: 8px;
}

.carousel-image-title {
    font-size: var(--font-large-size);
    display: flex;
    justify-content: center;
    position: relative;
    color: var(--text-accent-color);
    transition: font-size var(--hover-time);

    &::after {
        transition-duration: var(--hover-time);
        transition-property: width;
        display: block;
        content: "";
        position: absolute;
        height: var(--underline-size);
        width: 0;
        bottom: calc(-1 * var(--underline-size) + var(--underline-offset-size));
        background-color: var(--text-accent-color);
    }
}

.carousel-image-link {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.carousel-image {
    --image-offset-x: 0;
    --image-offset-y: 0;
    transition: transform 100ms;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
    z-index: -1;
}
</style>
