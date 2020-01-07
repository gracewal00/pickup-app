<template>
    <ScrollView>
        <RadListView/>
        <StackLayout class="eventContainer" >
            <StackLayout class="eventItem" @tap="onEventTap( e )" v-for="e in events" >
                <Label height="20px" />
                <Label class="category" :text="e.category" width="100%"/>
                <Label class="title" :text="e.title" width="100%"/>
                <Label class="text description" :text="e.description" width="100%"/>
                <Label class="spacer" />
                <StackLayout  class="hbox" orientation="horizontal" >
                    <Label class="date textLeft" width="45%">{{ checkNull( formatDate( e.date ), "Date" ) }}</Label>
                    <Label class="location textRight" width="55%">{{ checkNull( e.location, "Location" ) }}</Label>
                </StackLayout>
                <StackLayout class="text hbox " orientation="horizontal">
                    <Label class="time textLeft" width="65%">{{ checkNull( formatTime( e.start_time ), "Start Time" ) }} -> {{ checkNull( formatTime( e.end_time ), "End Time" ) }}</Label>
                    <Label class="people textRight" width="35%">P: {{ e.people }}</Label>
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import * as http from "http";
    import moment from "moment";

        export default {
        data() {
            return {
                events: []
            };
        }, 
        mounted() {
            this.getEvents();
        },
        methods: {
            getEvents() {
                http.getJSON( "https://pickup-app-backend.herokuapp.com/api/events" ).then( result => {
                    this.events = result;
                    console.log( "Data pulled" );
                } ), error => {
                    console.log( "Could not get events" );
                }
            },
            onEventTap( e ) {
                console.log( "Event item: " + e.title+ " tapped" )
            },
            checkNull ( item, name ) {
                return ( item != null ? item : ( "No " + name ) );
            },
            formatTime: function( time ) {
                if ( time ) {
                    return moment( time ).format( 'h:mm a' );
                }
            },
            formatDate: function( date ) {
                if ( date ) {
                    return moment( date ).format( 'MM/DD/YYYY' );
                } 
            }
        }
    };
</script>

<style scoped lang="scss">

    .eventContainer {
        background-color: #ff7b00;
    }

    .eventItem {
        margin-bottom: 50px;
        margin-right: 55px;
        margin-left: 55px;
        border-style: solid;
        border-radius: 50px;
        background-color: #ffffff;
        android-elevation: 5;
        padding: 10;
    }

    .title {
        font-size: 22em;
        text-align: center;
        font-weight: bold;
    }

    .category {
        font-size: 13em;
        color: #7e7070;
        text-align: right;
        margin-right: 30em;
    }

    .text {
        font-size: 15em;
        margin-left: 28em;
        margin-right: 15em;
    }

    .description {
        color: #606060;
        text-align: center;
    }

    .textLeft {
        text-align: left;
        font-size: 15em;
    }

    .textRight {
        text-align: right;
        font-size: 15em;
    }

    .hbox {
        margin-left: 15px;
        margin-right: 15px;
    }

</style>
