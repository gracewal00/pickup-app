<template>
    <StackLayout class="addButton">
        <GridLayout rows="2, auto" horizontalAlignment="center" class="fab-icon">
            <Label row="1" class="fab-dash--1" />
            <Label row="1" class="fab-dash--2" />
        </GridLayout>
    </StackLayout>
</template>

<style>
.addButton {
background-color: #ff7b00;
height: 56;
width: 56;
border-radius: 28;
margin-top: 88%;
margin-left: 75%;
vertical-align: center;
}

.fab-icon {
    height: 16;
    width: 16;
}

.fab-dash--1,
    .fab-dash--2 {
        background-color: #ffffff;
        transform: translate( 0, -2 );
        height: 16;
        width: 3;
    }
.fab-dash--1 {
    transform: rotate( 90deg ) translate( 0, -2 );
}
</style>
