<template>
  <main class="bg-gray-100 min-h-screen flex flex-col justify-between">
    <AboutMe />
    <Footer />
  </main>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    AboutMe,
    Footer,
  },
};
</script>
