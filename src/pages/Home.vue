<script setup lang="ts">
import { ref, computed } from 'vue';
import Card from '../components/Card.vue';
import InputText from 'primevue/inputtext';
import router from "@/router";
import Button from 'primevue/button';

interface CardData {
  id: string;
  title: string;
  description: string;
}

const searchTerm = ref<string>('');
const cards = ref<CardData[]>([
  { id: 'racionalismo', title: 'Racionalismo', description: 'Uma corrente filosófica que enfatiza o papel da razão.' },
  { id: 'empirismo', title: 'Empirismo', description: 'Uma corrente filosófica que enfatiza a experiência sensorial.' },
  { id: 'ciencia', title: 'Ciência', description: 'Uma forma de conhecimento baseada na observação, experimentação e sistematização.' },
  { id: 'senso_comum', title: 'Senso Comum', description: 'Uma forma de conhecimento assistemática e subjetiva utilizada no cotidiano para resolver problemas práticos.' },
  { id: 'conhecimento_cientifico', title: 'Conhecimento Científico', description: 'Conhecimento produzido de forma sistemática, verificável e baseado em métodos científicos.' },
  { id: 'metodo_cientifico', title: 'Método Científico', description: 'Um processo sistemático utilizado para produzir e testar hipóteses por meio da observação e experimentação.' },
  { id: 'verificabilidade', title: 'Verificabilidade', description: 'A característica do conhecimento científico de ser testado e comprovado.' },
  { id: 'falibilidade', title: 'Falibilidade', description: 'A capacidade do conhecimento científico de ser revisado e refutado com base em novas evidências.' },
  { id: 'objetividade', title: 'Objetividade', description: 'O princípio de minimizar interferências subjetivas na produção do conhecimento científico.' },
  { id: 'racionalidade', title: 'Racionalidade', description: 'O uso da razão e do pensamento lógico para interpretar e compreender a realidade.' },
  { id: 'sistematicidade', title: 'Sistematicidade', description: 'A organização e estruturação do conhecimento científico de forma coerente e lógica.' },
  { id: 'conhecimento_empirico', title: 'Conhecimento Empírico', description: 'Conhecimento baseado na experiência sensorial e na observação direta da realidade.' },
  { id: 'filosofia', title: 'Filosofia', description: 'Um campo do conhecimento que busca compreender questões fundamentais sobre existência, conhecimento e razão.' },
  { id: 'religiao', title: 'Religião', description: 'Uma forma de conhecimento baseada na fé, em dogmas e na transcendência.' },
  { id: 'arte', title: 'Arte', description: 'Uma expressão criativa e emocional que comunica experiências estéticas e subjetivas.' },
  { id: 'filosofia_natural', title: 'Filosofia Natural', description: 'O estudo da natureza e de seus fenômenos por meio da observação e do raciocínio antes da ciência moderna.' },
  { id: 'antiguidade_classica', title: 'Antiguidade Clássica', description: 'Período histórico em que surgiram as primeiras ideias racionais e sistemáticas sobre o mundo.' },
  { id: 'tales_de_mileto', title: 'Tales de Mileto', description: 'Filósofo que introduziu a matemática na Grécia e propôs explicações racionais para fenômenos naturais.' },
  { id: 'pitagoras', title: 'Pitágoras', description: 'Filósofo que acreditava na representação matemática do universo e no pensamento racional como fonte de conhecimento.' },
  { id: 'democrito', title: 'Demócrito', description: 'Filósofo que idealizou o atomismo, propondo que o universo é formado por partículas indivisíveis.' },
  { id: 'socrates', title: 'Sócrates', description: 'Filósofo que destacou a importância do diálogo e da argumentação para o autoconhecimento e a ética.' },
  { id: 'platao', title: 'Platão', description: 'Filósofo que desenvolveu o idealismo, enfatizando o mundo das ideias como verdadeira realidade.' },
  { id: 'aristoteles', title: 'Aristóteles', description: 'Filósofo que desenvolveu a lógica e defendeu a reflexão como principal fonte de conhecimento.' },
  { id: 'roger_bacon', title: 'Roger Bacon', description: 'Filósofo medieval que enfatizou a importância da lógica aristotélica e da experimentação na busca do conhecimento.' },
  { id: 'atomismo', title: 'Atomismo', description: 'Teoria filosófica que afirma que o universo é composto por partículas indivisíveis chamadas átomos.' },
  { id: 'idealismo', title: 'Idealismo', description: 'Corrente filosófica que enfatiza o mundo das ideias como a verdadeira realidade.' },
  { id: 'racionalismo', title: 'Racionalismo', description: 'Corrente filosófica que prioriza o uso da razão como meio principal para adquirir conhecimento.' },
  { id: 'experimentacao', title: 'Experimentação', description: 'Método utilizado para testar hipóteses e validar teorias por meio da prática e observação controlada.' },
  { id: 'positivismo', title: 'Positivismo', description: 'Corrente filosófica que defende a ciência como única fonte válida de conhecimento.' },
  { id: 'epistemologia', title: 'Epistemologia', description: 'Estudo filosófico sobre a natureza, as origens e os limites do conhecimento.' },
  { id: 'interdisciplinaridade', title: 'Interdisciplinaridade', description: 'Integração de conhecimentos e métodos de diferentes áreas para abordar problemas complexos.' },
  { id: 'ciencias_humanas', title: 'Ciências Humanas', description: 'Campo do conhecimento que estuda o comportamento humano, a cultura e as relações sociais.' },
  { id: 'ciencias_sociais', title: 'Ciências Sociais', description: 'Área científica que investiga os fenômenos sociais e as dinâmicas das sociedades humanas.' },
  { id: 'tecnologia', title: 'Tecnologia', description: 'Aplicação prática do conhecimento científico para o desenvolvimento de ferramentas e soluções.' },
  { id: 'impacto_cultural', title: 'Impacto Cultural', description: 'Influência que a ciência e a tecnologia exercem sobre a cultura e os valores sociais.' },
  { id: 'transformacoes_cientificas', title: 'Transformações Científicas', description: 'Mudanças nas práticas e paradigmas científicos ao longo do tempo.' },
  { id: 'critica_cientifica', title: 'Crítica Científica', description: 'Análise reflexiva sobre os fundamentos, métodos e impactos das práticas científicas.' },
  { id: 'paradigmas_cientificos', title: 'Paradigmas Científicos', description: 'Conjuntos de pressupostos e práticas que orientam a produção científica em um determinado período.' },
  { id: 'teologia_natural', title: 'Teologia Natural', description: 'O estudo racional sobre Deus e o universo, baseado em observações da natureza e não em revelações divinas.' },
  { id: 'universo', title: 'Universo', description: 'O conjunto total de espaço, tempo, matéria e energia, incluindo todos os astros, galáxias e formas de vida.' },
  { id: 'cosmos', title: 'Cosmos', description: 'A totalidade ordenada e harmoniosa do universo, frequentemente associada a conceitos de grandiosidade e beleza.' },
  { id: 'evolucao', title: 'Evolução', description: 'O processo de mudanças acumulativas ao longo do tempo que resultam no desenvolvimento de organismos e sistemas mais complexos.' },
  { id: 'astronomia', title: 'Astronomia', description: 'A ciência que estuda corpos celestes como estrelas, planetas e galáxias, bem como os fenômenos que os envolvem.' },
  { id: 'razao', title: 'Razão', description: 'A capacidade humana de pensar de forma lógica e analítica, utilizada para compreender e resolver problemas.' },
  { id: 'evidencia', title: 'Evidência', description: 'Dados ou informações que apoiam ou refutam uma hipótese ou crença, sendo essencial para o método científico.' },
  { id: 'antropocentrismo', title: 'Antropocentrismo', description: 'A visão de que o ser humano é o centro ou o mais importante elemento do universo.' },
  { id: 'via_lactea', title: 'Via Láctea', description: 'A galáxia que contém o sistema solar, composta por bilhões de estrelas, planetas e outros corpos celestes.' },
  { id: 'darwinismo', title: 'Darwinismo', description: 'Teoria de Charles Darwin que explica a evolução das espécies por meio da seleção natural.' },
  { id: 'copernico', title: 'Copérnico', description: 'Astrônomo que propôs o modelo heliocêntrico, retirando a Terra do centro do universo.' },
  { id: 'criacionismo', title: 'Criacionismo', description: 'Crença de que o universo e a vida foram criados por um ser divino, frequentemente em oposição às teorias científicas de evolução.' },
  { id: 'carl_sagan', title: 'Carl Sagan', description: 'Astrônomo e divulgador científico que popularizou a ciência e a exploração espacial por meio de livros e programas de televisão.' },
]);

const normalize = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const filteredCards = computed(() =>
    cards.value.filter(card =>
        normalize(card.title).includes(normalize(searchTerm.value))
    )
);

const goAbout = () => {
  router.push('/about');
}


</script>

<template>
  <div class="w-full h-full bg-[#0D1317] text-white flex flex-col items-center p-4 min-h-screen">
    <div class="bg-[#1B232A] w-full max-w-screen-lg p-6 gap-4 rounded-lg shadow-md flex flex-col items-center md:justify-between md:items-center mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-center md:text-left">Memorabilia Filosofia da Ciência</h1>
      <Button
          class="bg-[#101D42] hover:bg-[#232ED1] text-white py-2 px-6 mt-4 md:mt-0 rounded"
          label="Sobre Mim"
          @click="goAbout"
      />
    </div>
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
      <p v-if="filteredCards.length === 0" class="text-gray-400 col-span-full text-center">
        Nenhum resultado encontrado.
      </p>
    </div>
  </div>
</template>


<style scoped>
</style>
