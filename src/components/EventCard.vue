<script setup lang="ts">
import { Event } from '../stores/Event';

const props = defineProps<{
  items: Event;
}>();
</script>

<template>
  <div class="event-card">
    <span>@ {{ props.items.time }} on {{ props.items.date }}</span>
    <h4>{{ props.items.title }}</h4>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
