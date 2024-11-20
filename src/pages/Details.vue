<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {Fieldset} from "primevue";
import router from "@/router";

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
  ciencia: {
    title: 'Ciência',
    content:
        'A ciência é uma forma de conhecimento que utiliza métodos sistemáticos, baseados na observação, experimentação e análise crítica, para compreender e explicar fenômenos naturais e sociais. Caracteriza-se por sua objetividade, verificabilidade e capacidade de revisão. Divide-se em ciências naturais, formais e sociais.',
  },
  senso_comum: {
    title: 'Senso Comum',
    content:
        'O senso comum é uma forma de conhecimento baseada em experiências cotidianas e tradições culturais. É assistemático, subjetivo e essencial para resolver problemas práticos do dia a dia, mas carece da rigorosidade e verificabilidade da ciência.',
  },
  metodo_cientifico: {
    title: 'Método Científico',
    content:
        'O método científico é um conjunto sistemático de etapas usadas para investigar fenômenos e gerar conhecimento. Inclui a observação, formulação de hipóteses, experimentação e análise de resultados. É amplamente utilizado nas ciências para validar teorias e buscar explicações racionais para os fenômenos.',
  },
  verificabilidade: {
    title: 'Verificabilidade',
    content:
        'A verificabilidade é uma característica essencial do conhecimento científico, que exige que uma hipótese ou teoria possa ser testada e comprovada por meio de experimentos ou observações repetíveis.',
  },
  falibilidade: {
    title: 'Falibilidade',
    content:
        'A falibilidade é o princípio de que o conhecimento científico nunca é definitivo e pode ser revisado ou refutado à luz de novas evidências ou descobertas, garantindo sua evolução contínua.',
  },
  objetividade: {
    title: 'Objetividade',
    content:
        'A objetividade é um princípio científico que busca eliminar interferências subjetivas, baseando-se em dados concretos e metodologias rigorosas para alcançar conclusões imparciais.',
  },
  racionalidade: {
    title: 'Racionalidade',
    content:
        'A racionalidade é a capacidade de utilizar o pensamento lógico e crítico para interpretar informações e tomar decisões fundamentadas, sendo uma base fundamental para a ciência e a filosofia.',
  },
  filosofia: {
    title: 'Filosofia',
    content:
        'A filosofia é um campo do conhecimento que investiga questões fundamentais sobre existência, ética, razão, e conhecimento. Utiliza a reflexão e o debate lógico como principais ferramentas, diferenciando-se da ciência pelo foco na especulação e na análise conceitual.',
  },
  religiao: {
    title: 'Religião',
    content:
        'A religião é uma forma de conhecimento baseada na fé, na transcendência e em dogmas. Oferece explicações para questões existenciais e um sentido de propósito, sendo amplamente influenciada por práticas culturais e espirituais.',
  },
  arte: {
    title: 'Arte',
    content:
        'A arte é uma expressão criativa que comunica emoções e experiências subjetivas. Baseada na intuição e na estética, proporciona uma forma única de interpretar e experimentar o mundo, transcendente à lógica e à ciência.',
  },
  epistemologia: {
    title: 'Epistemologia',
    content:
        'A epistemologia é o ramo da filosofia que estuda a natureza, as origens e os limites do conhecimento. Investiga questões como "O que podemos saber?" e "Como sabemos que algo é verdadeiro?"',
  },
  positivismo: {
    title: 'Positivismo',
    content:
        'O positivismo é uma corrente filosófica que enfatiza o uso da ciência como única fonte válida de conhecimento. Fundada por Auguste Comte, defende que o conhecimento deve ser baseado em observações empíricas e experimentação, rejeitando explicações metafísicas.',
  },

  conhecimento_cientifico: {
    title: 'Conhecimento Científico',
    content:
        'O conhecimento científico é uma forma de conhecimento produzida de maneira sistemática, verificável e baseada em métodos científicos. Caracteriza-se por sua objetividade, verificabilidade e capacidade de revisão. Distingue-se do conhecimento empírico e do senso comum por sua rigorosidade e fundamentação teórica.',
  },

  sistematicidade: {
    title: 'Sistematicidade',
    content:
        'A sistematicidade é a característica do conhecimento científico de ser organizado e estruturado de forma coerente e lógica, seguindo princípios e métodos específicos para a produção e validação de teorias.',
  },

  conhecimento_empirico: {
    title: 'Conhecimento Empírico',
    content:
        'O conhecimento empírico é uma forma de conhecimento baseada na experiência sensorial e na observação direta da realidade. Diferencia-se do conhecimento científico por sua natureza assistemática e subjetiva, sendo comumente associado ao senso comum e à tradição cultural.',
  },

  filosofia_natural: {
    title: 'Filosofia Natural',
    content:
        'A filosofia natural é o estudo da natureza e de seus fenômenos por meio da observação e do raciocínio, antecedendo a ciência moderna. Filósofos como Tales de Mileto e Aristóteles contribuíram para o desenvolvimento de conceitos fundamentais da física, da biologia e da astronomia.',
  },

  antiguidade_classica: {
    title: 'Antiguidade Clássica',
    content:
        'A antiguidade clássica é um período histórico marcado pelo surgimento das primeiras ideias racionais e sistemáticas sobre o mundo. Destaca-se pela filosofia grega, a democracia ateniense, a arquitetura romana e a literatura épica.',
  },

  tales_de_mileto: {
    title: 'Tales de Mileto',
    content:
        'Tales de Mileto foi um filósofo pré-socrático que introduziu a matemática na Grécia e propôs explicações racionais para fenômenos naturais, como a origem da água e a previsão de eclipses. Sua abordagem racional influenciou o desenvolvimento da filosofia e da ciência ocidental.',
  },

  pitagoras: {
    title: 'Pitágoras',
    content:
        'Pitágoras foi um filósofo e matemático grego que acreditava na representação matemática do universo e no pensamento racional como fonte de conhecimento. Fundou a escola pitagórica, que influenciou o desenvolvimento da matemática e da filosofia na Grécia antiga.',
  },

  democrito: {
    title: 'Demócrito',
    content:
        'Demócrito foi um filósofo grego que idealizou o atomismo, uma teoria que propõe que o universo é formado por partículas indivisíveis chamadas átomos. Sua abordagem materialista e determinista influenciou o desenvolvimento da física e da filosofia ocidental.',
  },

  socrates: {
    title: 'Sócrates',
    content:
        'Sócrates foi um filósofo grego que destacou a importância do diálogo e da argumentação para o autoconhecimento e a ética. Sua abordagem socrática, baseada na ironia e na maiêutica, influenciou o desenvolvimento da filosofia ocidental e o pensamento crítico.',
  },

  platao: {
    title: 'Platão',
    content:
        'Platão foi um filósofo grego que desenvolveu o idealismo, enfatizando o mundo das ideias como a verdadeira realidade. Fundou a Academia de Atenas e escreveu diálogos filosóficos, como "A República" e "O Banquete", que influenciaram o pensamento ocidental.',
  },

  aristoteles: {
    title: 'Aristóteles',
    content:
        'Aristóteles foi um filósofo grego que desenvolveu a lógica e defendeu a reflexão como principal fonte de conhecimento. Fundou o Liceu e escreveu tratados sobre ética, política, metafísica, física e biologia, influenciando a filosofia e a ciência ocidental.',
  },

  roger_bacon: {
    title: 'Roger Bacon',
    content:
        'Roger Bacon foi um filósofo medieval que enfatizou a importância da lógica aristotélica e da experimentação na busca do conhecimento. Suas obras sobre ciência, matemática e filosofia anteciparam o método científico e influenciaram o pensamento renascentista.',
  },

  atomismo: {
    title: 'Atomismo',
    content:
        'O atomismo é uma teoria filosófica que afirma que o universo é composto por partículas indivisíveis chamadas átomos. Desenvolvida por Leucipo e Demócrito na Grécia antiga, influenciou o pensamento científico e filosófico ocidental, contribuindo para a física moderna.',
  },

  idealismo: {
    title: 'Idealismo',
    content:
        'O idealismo é uma corrente filosófica que enfatiza o mundo das ideias como a verdadeira realidade. Filósofos como Platão e George Berkeley defendem que a mente e as ideias são fundamentais para a existência, influenciando a metafísica e a epistemologia.',
  },

  experimentacao: {
    title: 'Experimentação',
    content:
        'A experimentação é um método utilizado para testar hipóteses e validar teorias por meio da prática e observação controlada. Fundamenta-se na observação sistemática, na manipulação de variáveis e na replicação de resultados para garantir a confiabilidade dos experimentos.',
  },

  interdisciplinaridade: {
    title: 'Interdisciplinaridade',
    content:
        'A interdisciplinaridade é a integração de conhecimentos e métodos de diferentes áreas para abordar problemas complexos e promover uma compreensão mais ampla e integrada dos fenômenos. Contribui para a inovação, a criatividade e a resolução de desafios interdisciplinares.',
  },

  ciencias_humanas: {
    title: 'Ciências Humanas',
    content:
        'As ciências humanas são um campo do conhecimento que estuda o comportamento humano, a cultura e as relações sociais. Incluem disciplinas como sociologia, psicologia, antropologia, história e filosofia, que buscam compreender a complexidade da experiência humana.',
  },

  ciencias_sociais: {
    title: 'Ciências Sociais',
    content:
        'As ciências sociais são uma área científica que investiga os fenômenos sociais e as dinâmicas das sociedades humanas. Incluem disciplinas como sociologia, antropologia, ciência política, economia e geografia, que buscam compreender as estruturas e processos sociais.',
  },

  tecnologia: {
    title: 'Tecnologia',
    content:
        'A tecnologia é a aplicação prática do conhecimento científico para o desenvolvimento de ferramentas, máquinas e sistemas que facilitam a vida humana. Inclui áreas como informática, engenharia, biotecnologia e nanotecnologia, que transformam a sociedade e a economia.',
  },

  impacto_cultural: {
    title: 'Impacto Cultural',
    content:
        'O impacto cultural é a influência que a ciência e a tecnologia exercem sobre a cultura, os valores sociais e as práticas cotidianas. Pode gerar mudanças significativas na forma como as pessoas vivem, se relacionam e compreendem o mundo.',
  },

  transformacoes_cientificas: {
    title: 'Transformações Científicas',
    content:
        'As transformações científicas são mudanças nas práticas e paradigmas científicos ao longo do tempo, resultantes de descobertas, inovações e debates na comunidade científica. Podem gerar avanços significativos no conhecimento e na tecnologia.',
  },

  critica_cientifica: {
    title: 'Crítica Científica',
    content:
        'A crítica científica é uma análise reflexiva sobre os fundamentos, métodos e impactos das práticas científicas. Busca identificar falhas, vieses e limitações na produção do conhecimento, promovendo a transparência e a qualidade da pesquisa.',
  },

  paradigmas_cientificos: {
    title: 'Paradigmas Científicos',
    content:
        'Os paradigmas científicos são conjuntos de pressupostos e práticas que orientam a produção científica em um determinado período. Podem influenciar a forma como os cientistas formulam hipóteses, interpretam dados e constroem teorias, moldando a evolução da ciência.',
  },

  teologia_natural: {
    title: 'Teologia Natural',
    content:
        'A teologia natural é o estudo racional sobre Deus e o universo, baseado em observações da natureza e não em revelações divinas. Filósofos como Tomás de Aquino e William Paley argumentam que a complexidade e a ordem do mundo são evidências da existência de um Criador.',
  },

  universo: {
    title: 'Universo',
    content:
        'O universo é o conjunto total de espaço, tempo, matéria e energia, incluindo todos os astros, galáxias e formas de vida. Estuda-se em disciplinas como astronomia, física e cosmologia, que buscam compreender sua origem, evolução e estrutura.',
  },

  cosmos: {
    title: 'Cosmos',
    content:
        'O cosmos é a totalidade ordenada e harmoniosa do universo, frequentemente associada a conceitos de grandiosidade e beleza. Filósofos e cientistas exploram sua natureza e significado por meio de disciplinas como astronomia, filosofia e estética.',
  },

  evolucao: {
    title: 'Evolução',
    content:
        'A evolução é o processo de mudanças acumulativas ao longo do tempo que resultam no desenvolvimento de organismos e sistemas mais complexos. A teoria da evolução de Charles Darwin propõe que as espécies evoluem por meio da seleção natural e da adaptação ao ambiente.',
  },

  astronomia: {
    title: 'Astronomia',
    content:
        'A astronomia é a ciência que estuda corpos celestes como estrelas, planetas e galáxias, bem como os fenômenos que os envolvem. Utiliza observações, cálculos e teorias para compreender a origem, a evolução e a estrutura do universo.',
  },

  metodo_cientifico: {
    title: 'Método Científico',
    content:
        'O método científico é um processo sistemático de investigação baseado em observação, formulação de hipóteses, experimentação e análise. Utilizado nas ciências naturais e sociais, permite validar teorias e buscar explicações racionais para os fenômenos.',
  },

  razao: {
    title: 'Razão',
    content:
        'A razão é a capacidade humana de pensar de forma lógica e analítica, utilizada para compreender e resolver problemas. Filósofos como Immanuel Kant e René Descartes destacam a razão como fonte de conhecimento e princípio ético fundamental.',
  },

  evidencia: {
    title: 'Evidência',
    content:
        'A evidência são dados ou informações que apoiam ou refutam uma hipótese ou crença, sendo essencial para o método científico. Pode ser obtida por meio de observações, experimentos, medições e análises, contribuindo para a validade e a confiabilidade das teorias.',
  },

  antropocentrismo: {
    title: 'Antropocentrismo',
    content:
        'O antropocentrismo é a visão de que o ser humano é o centro ou o mais importante elemento do universo. Filósofos como Pico della Mirandola e René Descartes defendem a superioridade humana em relação à natureza e aos demais seres vivos.',
  },

  via_lactea: {
    title: 'Via Láctea',
    content:
        'A Via Láctea é a galáxia que contém o sistema solar, composta por bilhões de estrelas, planetas e outros corpos celestes. Estuda-se em disciplinas como astronomia e astrofísica, que buscam compreender sua origem, estrutura e evolução.',
  },

  darwinismo: {
    title: 'Darwinismo',
    content:
        'O darwinismo é a teoria de Charles Darwin que explica a evolução das espécies por meio da seleção natural. Propõe que os organismos mais adaptados ao ambiente têm maior probabilidade de sobreviver e se reproduzir, influenciando a diversidade biológica.',
  },

  copernico: {
    title: 'Copérnico',
    content:
        'Copérnico foi um astrônomo que propôs o modelo heliocêntrico, retirando a Terra do centro do universo e colocando o Sol como o ponto central do sistema solar. Sua teoria revolucionou a astronomia e influenciou o desenvolvimento da ciência moderna.',
  },

  criacionismo: {
    title: 'Criacionismo',
    content:
        'O criacionismo é a crença de que o universo e a vida foram criados por um ser divino, frequentemente em oposição às teorias científicas de evolução. Defende que a complexidade e a ordem do mundo são evidências da existência de um Criador.',
  },

  carl_sagan: {
    title: 'Carl Sagan',
    content:
        'Carl Sagan foi um astrônomo e divulgador científico que popularizou a ciência e a exploração espacial por meio de livros, programas de televisão e palestras. Defendeu a importância da educação científica e da curiosidade intelectual para a compreensão do cosmos.',
  },
};


const route = useRoute();
const details = computed(() => cardDetails[route.params.id as string]);


function goBack() {
  router.back();
}

</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-4 bg-[#0D1317] text-white min-h-screen">
    <Fieldset
        :legend="details.title"
        class="border border-gray-600 rounded-lg p-6 shadow-md bg-[#1B232A] max-w-lg w-full"
    >
      <p class="text-base leading-relaxed text-gray-300">
        <strong class="text-gray-100">{{ details.content }}</strong>
      </p>
    </Fieldset>


    <div class="mt-4">
      <button
          class="bg-[#101D42] hover:bg-[#232ED1] text-white py-2 px-4 rounded"
          @click="goBack"
      >
        Voltar
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>
