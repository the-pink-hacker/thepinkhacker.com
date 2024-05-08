<script lang="ts" setup>
defineProps<{ date: string }>();

const DATE_FORMAT_LONG = new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "long",
        timeStyle: "long",
    },
);

const DATE_FORMAT = new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "long",
    },
);


function formatPostDateLong(date: string) {
    let parsedDate = new Date(date);
    return DATE_FORMAT_LONG.format(parsedDate);
}

function formatPostDate(date: string) {
    let parsedDate = new Date(date);
    return DATE_FORMAT.format(parsedDate);
}
</script>

<template>
    <ClientOnly>
        <time :datetime="date" :title="formatPostDateLong(date)">{{ formatPostDate(date)
            }}</time>
    </ClientOnly>
</template>
