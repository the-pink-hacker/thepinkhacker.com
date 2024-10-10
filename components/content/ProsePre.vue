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

const copied = ref<boolean>(false);

async function copyCode(event: MouseEvent | KeyboardEvent) {
    if (copied.value) return;

    if (event instanceof KeyboardEvent) {
        if (event.key != "Enter") return;
    }

    const target = event.target as HTMLElement | null;
    const preElement = target?.parentElement?.parentElement;
    const codeElement = preElement?.querySelector("code");
    const text = codeElement?.textContent;

    if (text == null) return;

    await navigator.clipboard.writeText(text);

    copied.value = true;

    setTimeout(() => copied.value = false, 750);
}
</script>

<template>
    <pre :class="$props.class"><button class="copy-widget" :class="copied ? 'copied' : ''" @keydown="copyCode"><span class="material-icons" @click="copyCode">content_copy</span></button><slot /></pre>
</template>

<style lang="scss">
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

    code {
        white-space: pre;
        overflow-x: scroll;

        .line {
            font-size: 0.9rem;
            display: block;
        }
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
        margin: 0.5rem;
        transition: color var(--hover-time);
        --shake-amount: 15deg;

        &:hover,
        &:focus-visible {
            color: var(--link-hover-color);
        }

        span {
            font-size: 1.5rem;
        }

        &.copied {
            animation: 200ms ease shake 2;
        }
    }
}
</style>
