<template>
    <Page>
        <ActionBar>
            <Label text="Pick Up Events" color="#18261F" />
        </ActionBar>
	<ScrollView>
		<StackLayout class="events">
			<StackLayout backgroundColor="#ffffff" class="test">
				<Label text="Volleyball" height="100" width="100" />
			</StackLayout>
			<AbsoluteLayout backgroundColor="#ffffff">
				<Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
			</AbsoluteLayout>
			<AbsoluteLayout backgroundColor="#ffffff">
				<Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
			</AbsoluteLayout>
		</StackLayout>
	</ScrollView>
    </Page>
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

AbsoluteLayout {
	margin: 10px 10px 0px 10px;
	border-style: solid;
	border-width: 5px;
}

.test {
	margin: 10px 10px 0px 10px;
	border-style: solid;
	border-width: 5px;
}

.events {
}

ActionBar {
	background-color: #ffa500;
}
</style>
