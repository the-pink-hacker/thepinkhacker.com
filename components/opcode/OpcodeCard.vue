<script lang="ts" setup>
    defineProps({
        instruction: {
            type: String,
            required: true,
        },
        opcode: {
            type: String,
            required: true,
        },
        tiSupported: {
            type: Boolean,
            default: true,
        },
        cycles: {
            type: Number,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        adlSize: {
            type: Number,
            required: false,
        },
        verbalMnemonic: {
            type: String,
            required: false,
        },
        flagCarry: {
            type: String,
            default: "unaffected",
        },
        flagAddSub: {
            type: String,
            default: "unaffected",
        },
        flagParityOverflow: {
            type: String,
            default: "unaffected",
        },
        flagHalfCarry: {
            type: String,
            default: "unaffected",
        },
        flagZero: {
            type: String,
            default: "unaffected",
        },
        flagSign: {
            type: String,
            default: "unaffected",
        },
    });
</script>

<template>
    <td>
        <code>{{ instruction }}</code>
        <div>
            <dl>
                <div>
                    <dt>Opcode:</dt>
                    <dd><code>{{ opcode }}</code></dd>
                </div>

                <div>
                    <dt>Bytes:</dt>
                    <dd><code>{{ adlSize ? adlSize : size }}</code></dd>
                </div>

                <div>
                    <dt>Cycles:</dt>
                    <dd><code>{{ cycles }}</code></dd>
                </div>

                <div>
                    <dt>Carry Flag:</dt>
                    <dd><code>{{ flagCarry }}</code></dd>
                </div>

                <div>
                    <dt>Add/Sub Flag:</dt>
                    <dd><code>{{ flagAddSub }}</code></dd>
                </div>

                <div>
                    <dt>Parity/Overflow Flag:</dt>
                    <dd><code>{{ flagParityOverflow }}</code></dd>
                </div>

                <div>
                    <dt>Half-Carry Flag:</dt>
                    <dd><code>{{ flagHalfCarry }}</code></dd>
                </div>

                <div>
                    <dt>Zero Flag:</dt>
                    <dd><code>{{ flagZero }}</code></dd>
                </div>

                <div>
                    <dt>Sign Flag:</dt>
                    <dd><code>{{ flagSign }}</code></dd>
                </div>

                <div>
                    <dt>Supported on TI?</dt>
                    <dd><code>{{ tiSupported ? "yes" : "no" }}</code></dd>
                </div>
            </dl>

            <hr />

            <p v-if="verbalMnemonic">{{ verbalMnemonic }}</p>
            <p><slot /></p>
        </div>
    </td>
</template>

<style lang="scss" scoped>
    td {
        text-align: center;
        position: relative;
        border: 2px solid var(--accent-color);
        background-color: var(--background-color);
        padding: 8px;

        & > div {
            padding: 8px;
            text-align: initial;
            position: absolute;
            display: none;
            background-color: black;
            width: 300px;
            z-index: 1;
        }

        &:hover {
            & > div {
                display: block;
            }
        }
    }

    dl {
        margin: 0;
        width: 100%;

        & > div {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
