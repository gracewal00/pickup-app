<template>
    <Page>
        <ActionBar>
            <Label text="Pick Up Events" color="#ffffff" />
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
        background-color: #525252;
        height: 11%;
                label {
                    font-size: 25em;
                }
    }

</style>
