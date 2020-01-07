<template>
    <ScrollView>
            <RadListView class="eventContainer"
            for="e in events"
            pullToRefresh="true"
            @pullToRefreshInitiated="onPullToRefresh" >
                <v-template>
                    <StackLayout class="eventItem" @tap="onEventTap( e )">
                        <Label class="category" :text="checkNull( e.category, 'No Category' )" width="100%"/>
                        <Label class="title" :text="checkNull( e.title, '{Null Title}' )" width="100%"/>
                        <Label class="text description" :text="checkNull( e.description, 'No Description' )" width="100%"/>
                        <StackLayout class="text" orientation="horizontal" width="100%" padding="0" >
                            <Label width="50%" textAlignment="left" >{{ checkNull( formatDate( e.date ), "Date not given" ) }}</Label>
                            <Label width="50%" textAlignment="right" >{{ checkNull( e.location, "Location not given" ) }}</Label>
                        </StackLayout>
                        <StackLayout class="text" orientation="horizontal" width="100%" padding="0">
                            <StackLayout v-if="e.start_time || e.end_time" width="50%" orientation="horizontal" textAlignment="left" padding="0" >
                                    <Label >{{ checkNull( formatTime( e.start_time ), "..." ) }}</Label>
                                    <Label text=" -> "/>
                                    <Label >{{ checkNull( formatTime( e.end_time ), "..." ) }}</Label>
                            </StackLayout>
                                <Label v-else width="50%" textAlignment="left" text="No times given" />
                                <Label width="50%" textAlignment="right" >{{ numPeople( e.people ) }} people going</Label>
                        </StackLayout>
                    </StackLayout>
                </v-template>
            </RadListView>
    </ScrollView>
</template>

<script>
    import * as http from "http";
    import moment from "moment";

        export default {
        data() {
            return {
                events: [],
                console: "Hello World"
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
                    //console.log( "Sorting Data" );
                    //this.events.sort( sortData ); // sort data
                    //console.log( "Data Sorted" );
                } ), error => {
                    console.log( "Could not get events" );
                }
            },
            onPullToRefresh( { object } ) {
                console.log( "Pulling..." );
                // Following method prevents race conditions in ios where ui isn't updated yet
                this.$nextTick( () => {
                    this.getEvents();
                    object.notifyPullToRefreshFinished(); // Clears reloading icon
                });
            },
            onEventTap ( e ) {
                console.log( "Event item: " + e.title + " tapped." );
            },
            checkNull ( item, description) {
                return ( item ? item : description );
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
            },
            numPeople ( people ) {
                if ( people != null ) {
                    return people.split( ',' ).length;
                } else { return 0; }
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
                 * {
                     border-width: 0px;
                 }
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
        margin-bottom: -40px;
        margin-right: 40px;
    }

    .text {
        font-size: 15em;
    }

    .description {
        color: #606060;
        text-align: center;
    }

    .border {
        border-style: solid;
        border-width: 1px;
    }

</style>
