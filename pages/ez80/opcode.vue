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
                cycles="1"
                :size="1"
                verbal-mnemonic="No Operation"
            >
                Nothing is ran during this instruction.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld bc, Mmn"
                opcode="01 n m M"
                cycles="3"
                :adl-cycles="4"
                :size="3"
                :adl-size="4"
                verbal-mnemonic="Load"
            >
                Loads the 24-bit value <code>Mmn</code> into register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld (bc), a"
                opcode="02"
                :size="1"
                cycles="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in register <code>a</code> into the memory position
                pointed to by register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc bc"
                opcode="03"
                cycles="1"
                :size="1"
                verbal-mnemonic="Increment"
            >
                Increments register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc b"
                opcode="04"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec b"
                opcode="05"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                verbal-mnemonic="Decrement"
            >
                Decrement register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld b, n"
                opcode="06 n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>b</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rlca"
                opcode="07"
                cycles="1"
                :size="1"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Rotate Left Carry Accumulator"
            >
                Register <code>a</code> is rotated left by one bit; bit <code>7</code>
                is copied into the carry flag and bit <code>0</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ex af, af'"
                opcode="08"
                cycles="1"
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
                cycles="1"
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
                cycles="2"
                :size="1"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in the memory position pointed to by register <code>bc</code>
                into register <code>a</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec bc"
                opcode="0B"
                cycles="1"
                :size="1"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>bc</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc c"
                opcode="0C"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec c"
                opcode="0D"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld c, n"
                opcode="0E n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>c</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rrca"
                opcode="0F"
                cycles="1"
                :size="1"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Rotate Right Carry Accumulator"
            >
                Register <code>a</code> is rotated right by one bit; bit <code>7</code>
                is copied into the carry flag and bit <code>0</code>.
            </OpcodeCard>
        </OpcodeTableRow>

        <OpcodeTableRow header-name="1">
            <OpcodeCard
                instruction="djnz d"
                opcode="10 d"
                cycles="2/4"
                :size="2"
                verbal-mnemonic="Decrement Jump Not Zero"
            >
                Register <code>b</code> is decremented. If register <code>b</code> wasn't set to zero, then the 8-bit
                signed displacement <code>d</code> is added to register <code>pc</code>. The displacement is measured
                from the next opcode.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld de, Mmn"
                opcode="11 n m M"
                cycles="3"
                :adl-cycles="4"
                :size="3"
                :adl-size="4"
                verbal-mnemonic="Load"
            >
                Loads the 24-bit value <code>Mmn</code> into register <code>de</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld (de), a"
                opcode="12"
                :size="1"
                cycles="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in register <code>a</code> into the memory position
                pointed to by register <code>de</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc de"
                opcode="13"
                cycles="1"
                :size="1"
                verbal-mnemonic="Increment"
            >
                Increments register <code>de</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc d"
                opcode="14"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>d</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec d"
                opcode="15"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                verbal-mnemonic="Decrement"
            >
                Decrement register <code>d</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld d, n"
                opcode="16 n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>d</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rla"
                opcode="17"
                cycles="1"
                :size="1"
                verbal-mnemonic="Rotate Left Accumulator"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
            >
                Rotates register <code>a</code> and the carry flag left. Bit <code>7</code> is copied into
                the carry flag; the carry flag is copied into bit <code>0</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="jr d"
                opcode="18 d"
                cycles="3"
                :size="2"
                verbal-mnemonic="Jump Relative"
            >
                Adds the 8-bit signed displacement <code>d</code> to register <code>pc</code>. The displacement is
                measured from the next opcode.
            </OpcodeCard>

            <OpcodeCard
                instruction="add hl, de"
                opcode="19"
                cycles="1"
                :size="1"
                flag-half-carry="as defined"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Add"
            >
                Calculates the sum of register <code>hl</code> and <code>de</code>; the sum is put into
                register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld a, (de)"
                opcode="1A"
                cycles="2"
                :size="1"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in the memory position pointed to by register <code>de</code>
                into register <code>a</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec de"
                opcode="1B"
                cycles="1"
                :size="1"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>de</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc e"
                opcode="1C"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>e</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec e"
                opcode="1D"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>e</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld e, n"
                opcode="1E n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>e</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="rra"
                opcode="17"
                cycles="1"
                :size="1"
                verbal-mnemonic="Rotate Right Accumulator"
                flag-half-carry="reset"
                flag-add-sub="reset"
                flag-carry="as defined"
            >
                Rotates register <code>a</code> and the carry flag right. Bit <code>0</code> is copied into
                the carry flag; the carry flag is copied into bit <code>7</code>.
            </OpcodeCard>
        </OpcodeTableRow>

        <OpcodeTableRow header-name="2">
            <OpcodeCard
                instruction="jr nz, d"
                opcode="20"
                cycles="2/3"
                :size="2"
                verbal-mnemonic="Jump Relative"
            >
                Adds the 8-bit signed displacement <code>d</code> to register <code>pc</code> if the zero flag is
                set low. The displacement is measured from the next opcode.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld hl, Mmn"
                opcode="21 n m M"
                cycles="3"
                :adl-cycles="4"
                :size="3"
                :adl-size="4"
                verbal-mnemonic="Load"
            >
                Loads the 24-bit value <code>Mmn</code> into register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld (hl), a"
                opcode="22"
                :size="1"
                cycles="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in register <code>a</code> into the memory position
                pointed to by register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc hl"
                opcode="23"
                cycles="1"
                :size="1"
                verbal-mnemonic="Increment"
            >
                Increments register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc h"
                opcode="24"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>h</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec h"
                opcode="25"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                verbal-mnemonic="Decrement"
            >
                Decrement register <code>h</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld h, n"
                opcode="26 n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>h</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="daa"
                opcode="27"
                cycles="1"
                :size="2"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="as defined"
                flag-carry="as defined"
                verbal-mnemonic="Decimal Adjust Accumulator"
            >
                Adjusts register <code>a</code> after doing BCD arithmetic.
            </OpcodeCard>

            <OpcodeCard
                instruction="jr z, d"
                opcode="28"
                cycles="2/3"
                :size="2"
                verbal-mnemonic="Jump Relative"
            >
                Adds the 8-bit signed displacement <code>d</code> to register <code>pc</code> if the zero flag is
                set high. The displacement is measured from the next opcode.
            </OpcodeCard>

            <OpcodeCard
                instruction="add hl, hl"
                opcode="29"
                cycles="1"
                :size="1"
                flag-half-carry="as defined"
                flag-add-sub="reset"
                flag-carry="as defined"
                verbal-mnemonic="Add"
            >
                Calculates the sum of register <code>hl</code> and <code>hl</code>; the sum is put into
                register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld a, (hl)"
                opcode="2A"
                cycles="2"
                :size="1"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value in the memory position pointed to by register <code>hl</code>
                into register <code>a</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec hl"
                opcode="2B"
                cycles="1"
                :size="1"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>hl</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="inc l"
                opcode="2C"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Increment"
            >
                Increments register <code>l</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="dec l"
                opcode="2D"
                cycles="1"
                :size="1"
                flag-sign="as defined"
                flag-zero="as defined"
                flag-half-carry="as defined"
                flag-parity-overflow="overflow"
                verbal-mnemonic="Decrement"
            >
                Decrements register <code>l</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="ld l, n"
                opcode="2E n"
                cycles="2"
                :size="2"
                verbal-mnemonic="Load"
            >
                Loads the 8-bit value <code>n</code> into register <code>l</code>.
            </OpcodeCard>

            <OpcodeCard
                instruction="cpl"
                opcode="2F"
                cycles="1"
                :size="1"
                flag-half-carry="set"
                flag-add-sub="set"
                verbal-mnemonic="Complement Accumulator"
            >
                Inverts all bits in register <code>a</code> (one's complement).
            </OpcodeCard>
        </OpcodeTableRow>

        <OpcodeTableRow v-for="row in 15" :header-name="(row + 2).toString(16).toUpperCase()">
            <OpcodeCard v-for="column in 16" :opcode="(((row + 2) << 4) | column - 1).toString(16)" />
        </OpcodeTableRow>
    </OpcodeTable>
</template>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
</style>
