<template>
    <Label text="Didn't Work" color="#18261F" />
</template>

<script>
    export default {
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/purple';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }
</style>
