<template>
    <div>
        <p>Event List</p>
        <EventCard></EventCard>
        <router-link :to="{name:'event-show',params:{id:'1'}}">Show Event #1</router-link>
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue';

    export default {
        components: {
            EventCard
        }
    }
</script>

<style scoped lang="scss">


</style>