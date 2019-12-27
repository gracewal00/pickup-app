<template>
    <Page>
        <ActionBar>
            <Label text="Pick Up Events" color="#18261F" />
        </ActionBar>
        <ScrollView>
            <Events />
        </ScrollView>
    </Page>
</template>

<script>
    import Events from "./Events"
    export default {
        components: { Events }
    }
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/purple';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    ActionBar {
        background-color: #ffa500;
    }
</style>
