<script setup lang="ts">
import { ref, computed } from 'vue';
import Card from '../components/Card.vue';
import InputText from 'primevue/inputtext';

interface CardData {
  id: string;
  title: string;
  description: string;
}

const searchTerm = ref<string>('');
const cards = ref<CardData[]>([
  { id: 'racionalismo', title: 'Racionalismo', description: 'Uma corrente filosófica que enfatiza o papel da razão.' },
  { id: 'empirismo', title: 'Empirismo', description: 'Uma corrente filosófica que enfatiza a experiência sensorial.' },
]);

const filteredCards = computed(() =>
    cards.value.filter(card => card.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
);
</script>

<template>
  <div class="w-full h-full bg-[#0D1317] text-white flex flex-col items-center p-4 min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Memorabilia Filosofia da Ciência</h1>
    <div class="mb-4 w-full max-w-lg">
      <InputText
          v-model="searchTerm"
          placeholder="Pesquisar..."
          class="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded-md"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
      <Card
          v-for="card in filteredCards"
          :key="card.id"
          :id="card.id"
          :title="card.title"
          :description="card.description"
      />
      <p v-if="filteredCards.length === 0" class="text-gray-400 col-span-full text-center">Nenhum resultado encontrado.</p>
    </div>
  </div>
</template>

<style scoped>
</style>
