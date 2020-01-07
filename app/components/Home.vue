<template>
    <Page>
        <ActionBar flat="true" width="100%">
            <Label text="Pick Up Events" color="#ffffff" horizontalAlignment="left" />
        </ActionBar>
        <GridLayout rows="*" ref="rootLayout">
            <Events row="0" />
            <addButton row="0" />
        </GridLayout>
</Page>
</template>

<script>
import Events from "./Events"
import addButton from "./addButton"
export default {
components: { Events, addButton }
}
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/purple';

// Custom styles
.fas {
@include colorize($color: accent);
}

ActionBar {
    background-color: #ff7b00;
    height: 11%;
            label {
                font-size: 25em;
            }
}
</style>
