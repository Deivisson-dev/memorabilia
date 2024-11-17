<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CardDetail from '../components/CardDetail.vue';

interface CardDetails {
  [key: string]: { title: string; content: string };
}

const cardDetails: CardDetails = {
  racionalismo: {
    title: 'Racionalismo',
    content:
        'O racionalismo é uma corrente filosófica que enfatiza o papel da razão como fonte primária do conhecimento. Principais filósofos incluem René Descartes, Baruch Spinoza e Gottfried Wilhelm Leibniz. Eles defendem a ideia de que a mente possui ideias inatas e que é possível alcançar a verdade pela lógica. Conceitos importantes incluem a dúvida metódica e ideias inatas. Críticas ao racionalismo sugerem que ele pode ignorar o papel da experiência sensorial.',
  },
  empirismo: {
    title: 'Empirismo',
    content:
        'O empirismo é uma corrente filosófica que enfatiza a experiência sensorial como base do conhecimento. Filósofos como John Locke, George Berkeley e David Hume defendem que nascemos como uma "tabula rasa" e que todo conhecimento vem da experiência. Conceitos importantes incluem o ceticismo sobre causalidade e a subjetividade da percepção. Críticas ao empirismo destacam que ele pode limitar o conhecimento a coisas observáveis, dificultando o acesso a conceitos abstratos.',
  },
};


const route = useRoute();
const details = computed(() => cardDetails[route.params.id as string]);
</script>

<template>
  <div class="w-full h-full flex items-center justify-center p-4 bg-[#0D1317] text-white min-h-screen">
    <CardDetail
        v-if="details"
        :title="details.title"
        :content="details.content"
    />
    <div v-else class="text-white">Assunto não encontrado.</div>
  </div>
</template>

<style scoped>
</style>
