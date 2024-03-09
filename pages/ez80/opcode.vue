<template>
    <h1>EZ80 Opcode Table</h1>

    <OpcodeTable caption="Main Instructions">
        <OpcodeTableRow v-for="i in 16" :header-name="(i - 1).toString(16).toUpperCase()">
            <OpcodeCard v-for="_ in 16" />
        </OpcodeTableRow>
    </OpcodeTable>

    <p>This page is building off <a href="https://clrhome.org/table">ClrHome's Z80 opcode table</a>.</p>
</template>
