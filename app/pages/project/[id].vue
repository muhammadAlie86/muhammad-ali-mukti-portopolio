<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectsStore } from '@/stores/projects';

const route = useRoute();
const projectsStore = useProjectsStore();

const projectId = parseInt(route.params.id);
const project = computed(() => projectsStore.getProjectById(projectId));
</script>
<template>
  <section class="bg-slate-800 min-h-screen py-12 text-gray-200">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
      
      <div class="flex flex-col items-center gap-8">
        <div class="w-full">
          <img
            :src="`/${project.image}`"
            :alt="project.title"
            class="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>


        <div class="w-full text-center"> <h1 class="text-3xl font-bold text-yellow-400 mb-4">
            {{ project.title }}
          </h1>

          <p class="text-gray-300 mb-6 leading-relaxed">
            {{ project.description }}
          </p>

          <h3 class="text-lg font-semibold text-white mb-2">Tech Stack:</h3>
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="px-3 py-1 bg-slate-600 text-gray-200 text-sm rounded"
            >
              {{ tech }}
            </span>
          </div>

         
      </div>

      </div>
    </div>
  </section>
</template>