<template>
    <Page>
        <ActionBar>
            <Label text="Pick Up Events" color="#18261F" />
        </ActionBar>
	<ScrollView>
		<StackLayout >
			<StackLayout class="eventItem" backgroundColor="#ffffff" v-for="e in events" >
				<Label class="title" :text="e.title" width="100%"/>
				<Label class="title" :text="e.description" width="100%"/>
				<Label class="title" :text="e.people" width="100%"/>
				<Label class="title" :text="e.location" width="100%"/>
				<Label class="title" :text="e.start_time" width="100%"/>
				<Label class="title" :text="e.end_time" width="100%"/>
				<Label class="title" :text="e.date" width="100%"/>
				<Label class="title" width="100%">Category: {{ e.category }}</Label>
			</StackLayout>
		</StackLayout>
	</ScrollView>
    </Page>
</template>

<script>
   import * as http from "http";
   export default {
       data() {
           return {
               events: []
           };
       }, 
       mounted() {
           this.getEvents();
           console.log( "Mounted: getEvents processed" );
       },
       methods: {
           getEvents() {
               http.getJSON( "https://pickup-app-backend.herokuapp.com/api/events" ).then( result => {
                   this.events = result;
                   console.log( "Results received" );
                   debugger;
                   } ), error => {
                       console.log( "Could not get events" );
               }
           }
       }
   };
   // export default {
   // 	data: {
   // 		events: ''
   // 	},
   //     methods: {
   //         getEvents() {
   //             return "Hello";
   //             //this.events = this.$backendService.getEvents();
   //         }
   //     }
   // };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/purple';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .title {
        font-size: 20;
    }

    .eventItem {
        margin: 10px;
        border-style: solid;
        border-width: 5px;
    }

    ActionBar {
        background-color: #ffa500;
    }
</style>
