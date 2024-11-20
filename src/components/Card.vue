<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import {Card} from "primevue";
import {Button} from "primevue";

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
      class="hover:shadow-lg bg-[#0D1317] text-white border border-[#374151]"
  >
    <template #title>
      <h3 class="text-xl font-bold">{{ title }}</h3>
    </template>
    <template #content>
      <p class="mb-4">{{ description }}</p>
      <Button
          class="bg-[#101D42] hover:bg-[#232ED1] text-white py-2 px-4 rounded"
          label="Ver Detalhes"
          @click="navigateToDetails"
      />
    </template>
  </Card>
</template>

<style scoped>
</style>
