<script setup lang="ts">
import { Image } from "primevue";

function goBack() {
  window.history.back();
}
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0D1317] text-white min-h-screen">
    <h1 class="text-4xl font-bold mb-6">Sobre Mim</h1>

    <div class="bg-[#1B232A] border border-gray-600 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col items-center">
      <Image
          src="src/assets/perfil.jpg"
          alt="Foto de Deivisson"
          width="150"
          class="mb-4 rounded-full rounded-md"
      />
      <p class="text-base leading-relaxed text-gray-300 text-center">
        Olá! Meu nome é  Deivisson da Silva Rocha. Sou estudante de
        <em>Ciência da Computação</em> e criador deste projeto, que representa uma
        <strong>Memorabilia</strong> da disciplina <strong>Filosofia da Ciência</strong>, solicitada pelo professor <strong>Arary</strong>.
        Este trabalho foi desenvolvido com o objetivo de explorar conceitos fundamentais da disciplina.
      </p>
    </div>

    <div class="mt-6">
      <button
          class="bg-[#101D42] hover:bg-[#232ED1] text-white font-medium py-2 px-6 rounded transition-all duration-200"
          @click="goBack"
      >
        Voltar
      </button>
    </div>
  </div>
</template>
