<script lang="ts" setup>
    useHead({
        title: "EZ80 Opcode Table"
    });
</script>

<template>
    <h1>EZ80 Opcode Table</h1>

    <OpcodeTable caption="Main Instructions">
        <OpcodeTableRow header-name="0">
            <OpcodeCard
                instruction="nop"
                opcode="00"
                :cycles="1"
                :size="1"
                verbal-mnemonic="No Operation"
            >
                Nothing is ran during this instruction.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld bc, nnn"
                opcode="01 n n n "
                :cycles="3"
                :adl-cycles="4"
                :size="3"
                :adl-size="4"
                verbal-mnemonic="Load"
            >
                Loads the 24-bit value <code>nnn</code> into register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld (bc), a"
                opcode="02"
                :size="1"
                :cycles="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in register <code>a</code> into the memory position
                pointed to by register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc bc"
                opcode="03"
                :cycles="1"
                :size="1"
                verbal-mnemonic="Increment"
            >
                Increments register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc b"
                opcode="04"
                :cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                flag-add-sub="unaffected"
                verbal-mnemonic="Increment"
            >
                Increments register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec b"
                opcode="05"
                :cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                flag-add-sub="unaffected"
                verbal-mnemonic="Decrement"
            >
                Decrement register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld b, n"
                opcode="06 n"
                :cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rlca"
                opcode="07"
                :cycles="1"
                :size="1"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Rotate Left Carry Accumulator"
            >
                Register <code>a</code> is rotated left by one bit; bit <code>7</code>
                is copied into the carry flag; the previous value of the carry flag is
                put into bit <code>0</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ex af, af'"
                opcode="08"
                :cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                flag-add-sub="as defined"
                flag-carry="as defined"
                verbal-mnemonic="Exchange"
            >
                Register <code>af</code> is swapped with it's shadow counterpart <code>af'</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="add hl, bc"
                opcode="09"
                :cycles="1"
                :size="1"
                flag-half-carry="as defined"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Add"
            >
                Calculates the sum of register <code>hl</code> and <code>bc</code>; the sum is put into
                register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld a, (bc)"
                opcode="0A"
                :cycles="2"
                :size="1"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in the memory position pointed to by register <code>bc</code>
                into register <code>a</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec bc"
                opcode="0B"
                :cycles="1"
                :size="1"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc c"
                opcode="0C"
                :cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                flag-add-sub="unaffected"
                verbal-mnemonic="Increment"
            >
                Increments register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec c"
                opcode="0D"
                :cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                flag-add-sub="unaffected"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld c, n"
                opcode="0E n"
                :cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rrca"
                opcode="0F"
                :cycles="1"
                :size="1"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Rotate Right Carry Accumulator"
            >
                Register <code>a</code> is rotated right by one bit; bit <code>7</code>
                is copied into the carry flag; the previous value of the carry flag is
                put into bit <code>0</code>.
            </OpcodeCard>
        </OpcodeTableRow>

        <OpcodeTableRow v-for="row in 15" :header-name="row.toString(16).toUpperCase()">
            <OpcodeCard v-for="column in 16" :opcode="((row << 4) | column - 1).toString(16)" />
        </OpcodeTableRow>
    </OpcodeTable>
</template>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
</style>
