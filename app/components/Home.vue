<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

	<ScrollView>
		<StackLayout class="events">
			<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>
	<label>Test</label>
			<label>Test2</label>
			<label>Test3</label>

		</StackLayout>
	</ScrollView>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Hello World";
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/purple';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
	background-color: #ffa500;
    }

	.einfo {
		font-size: 20;
	}

	ActionBar {
		background-color: #ffa500;
	}
</style>
