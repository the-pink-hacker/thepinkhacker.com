<script lang="ts" setup>
defineProps({
    code: {
        type: String,
        default: "",
    },
    language: {
        type: String,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
});

const copied = ref<string | null>(null);

function copyCode(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    const preElement = target?.parentElement?.parentElement;
    const codeElement = preElement?.querySelector("code");
    const text = codeElement?.textContent;

    if (text == null) return;

    navigator.clipboard.writeText(text).then(() => {
        copied.value = "copied";
    });
}

function removeSelection() {
    copied.value = null;
}
</script>

<template>
    <pre
        :class="$props.class"><button class="copy-widget" :class="copied"><span class="material-icons" @click="copyCode" @mouseleave="removeSelection">content_copy</span></button><slot /></pre>
</template>

<style lang="scss" scoped>
@keyframes shake {
    0% {
        rotate: 0;
    }

    33% {
        rotate: var(--shake-amount);
    }

    67% {
        rotate: calc(-1 * var(--shake-amount));
    }

    100% {
        rotate: 0;
    }
}

pre {
    position: relative;

    code .line {
        display: block;
    }

    &>.copy-widget {
        top: 0;
        right: 0;
        position: absolute;
        color: var(--accent-color);
        user-select: none;
        padding: 0;
        background: none;
        border: none;
        margin: 16px;
        transition: color var(--hover-time);
        --shake-amount: 15deg;

        &:hover {
            color: var(--link-hover-color);
        }

        &.copied {
            animation: 100ms ease shake 2;
        }
    }
}
</style>
