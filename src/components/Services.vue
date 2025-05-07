<template>
    <section class="w-full py-12 flex flex-col items-center bg-white">
      <!-- About Me -->
      <div class="flex flex-col items-center text-center mb-8">
        <img
          src="/path-to-your-image.jpg"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h1 class="text-2xl font-bold mb-2">I Am Wahid Ahmed</h1>
        <p class="max-w-md text-gray-600 mb-4">
          I am Proposal Web Designer and Video Editor. I have rich experience in web site design and building and customization, and also I am good at WordPress. I also make proposal video editor for your band.
        </p>
        <button class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Download CV
        </button>
      </div>
  
      <!-- Stats -->
      <div class="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
        <div>
          <span class="text-3xl font-bold">198</span>
          <p class="text-gray-500">Projects completed</p>
        </div>
        <div>
          <span class="text-3xl font-bold">102</span>
          <p class="text-gray-500">Running project</p>
        </div>
        <div>
          <span class="text-3xl font-bold">90</span>
          <p class="text-gray-500">Satisfied clients</p>
        </div>
        <div>
          <span class="text-3xl font-bold">85</span>
          <p class="text-gray-500">Nominees winner</p>
        </div>
      </div>
  
      <!-- Skills -->
      <div class="w-full max-w-3xl mb-16">
        <div v-for="(skill, index) in skills" :key="index" class="mb-4">
          <div class="flex justify-between mb-1">
            <span class="text-gray-700">{{ skill.name }}</span>
            <span class="text-gray-500">{{ skill.percentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
        </div>
      </div>
  
      <!-- Services -->
      <div class="w-full max-w-6xl text-center mb-16">
        <h2 class="text-3xl font-bold mb-10">Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
            <p class="text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        skills: [
          { name: 'HTML', percentage: 92 },
          { name: 'CSS', percentage: 85 },
          { name: 'JavaScript', percentage: 82 },
          { name: 'Figma', percentage: 82 },
          { name: 'Adobe Premiere Pro', percentage: 92 },
        ],
        services: [
          { title: 'PSD TO HTML', description: 'I will design a psd to html web template fully responsively', icon: 'fas fa-code' },
          { title: 'PSD TO WORDPRESS', description: 'I will design a psd to wordpress web template fully responsively', icon: 'fab fa-wordpress' },
          { title: 'PROMOTIONAL VIDEO', description: 'I will make a promotional video for your band', icon: 'fas fa-video' },
          { title: 'FIGMA DESIGN', description: 'I will design Figma web template or mobile app fully responsively', icon: 'fab fa-figma' },
          { title: 'FIGMA TO WORDPRESS', description: 'I will design a figma to wordpress web template fully responsively', icon: 'fab fa-wordpress' },
          { title: 'PROMOTIONAL VIDEO', description: 'I will make a promotional video for your band', icon: 'fas fa-video' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  