<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import {Card} from "primevue";

const props = defineProps<{
  title: string;
  description: string;
  id: string;
}>();

const router = useRouter();

function navigateToDetails() {
  router.push(`/details/${props.id}`);
}
</script>

<template>
  <Card
      class="cursor-pointer hover:shadow-lg"
      @click="navigateToDetails"
      style="background-color: #0D1317; color: white; border: 1px solid #374151;"
  >
    <template #title>
      <h3 class="text-xl font-bold">{{ title }}</h3>
    </template>
    <template #content>
      <p class="mb-4">{{ description }}</p>
      <button
          class="bg-[#101D42] hover:bg-[#232ED1] text-white py-2 px-4 rounded"
          @click.stop="navigateToDetails"
      >
        Ver Detalhes
      </button>
    </template>
  </Card>
</template>

<style scoped>
</style>
