<template>
  <section
  :class="[
    'w-full py-16 flex flex-col items-center transition-colors duration-500',
    isDarkMode ? 'bg-gray-900' : 'bg-slate-100'
  ]"
>
    <!-- Loader -->
    <div
      v-if="isLoading"
      :class="[
        'flex flex-col items-center justify-center w-full h-screen transition-all duration-500',
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-gray-800',
      ]"
    >
      <div class="flex space-x-2 text-4xl font-bold">
        <span
          v-for="(letter, index) in nameLetters"
          :key="index"
          :class="[
            'opacity-0 animate-fadeInLetter',
            `animation-delay-${index * 100}`,
            'text-primary',
          ]"
        >
          {{ letter }}
        </span>
      </div>
    </div>

    <div
  v-else
  :class="[
    isDarkMode ? 'text-white' : 'text-gray-800'
  ]"
>
      <div class="fixed top-6 right-6 flex items-center gap-4 z-50">
        <!-- Botón Sol/Luna -->
        <button
          @click="toggleTheme"
          class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
        >
          <span
            :class="[
              'inline-block text-2xl transition-transform duration-500',
              isDarkMode ? 'rotate-180 scale-110' : 'rotate-0 scale-100',
              'group-hover:drop-shadow-glow',
            ]"
          >
            {{ isDarkMode ? "🌙" : "☀️" }}
          </span>
        </button>

        <!-- Botón de idioma -->
        <button
          @click="toggleLanguage"
          class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold"
        >
          {{ currentLanguage === "es" ? "ES" : "EN" }}
        </button>
      </div>
      <div
  :class="[
    'w-full max-w-6xl px-6 transition-opacity duration-500',
    isLoaded ? 'opacity-100' : 'opacity-0'
  ]"
>
        <!-- About Me Title -->
        <h2
          class="text-4xl font-bold mb-12 text-center md:text-left"
          data-aos="fade-right"
        >
          About Me
        </h2>

        <!-- About Me Content -->
        <div
          class="flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <!-- Imagen + Solo Iconos Interactivos + Pop al Click -->
          <div class="flex flex-col items-center flex-shrink-0">
            <img
              src="/src/assets/perfil.png"
              alt="Profile Picture"
              class="w-48 h-48 rounded-full object-cover shadow-xl"
            />

            <!-- Mini ficha solo íconos -->
            <div class="mt-6 flex items-center justify-center gap-6">
              <!-- Ubicación -->
              <a
                href="https://www.google.com/maps/place/Santiago,+Chile"
                target="_blank"
                class="text-yellow-500 text-2xl hover:scale-125 hover:text-yellow-400 active:scale-90 hover:shadow-lg transition-all duration-300"
              >
                <i class="fas fa-map-marker-alt"></i>
              </a>

              <!-- Email -->
              <a
                href="mailto:blancoopazoa@gmail.com"
                class="text-red-500 text-2xl hover:scale-125 hover:text-red-400 active:scale-90 hover:shadow-lg transition-all duration-300"
              >
                <i class="fas fa-envelope"></i>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/alexander-blanco-opazo-911041193"
                target="_blank"
                class="text-blue-700 text-2xl hover:scale-125 hover:text-blue-500 active:scale-90 hover:shadow-lg transition-all duration-300"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <!-- Card with Info + Skills -->
          <div class="flex-1 bg-white p-8 rounded-2xl shadow-lg">
            <p
              :class="[
                'text-gray-700 mb-6 leading-relaxed text-justify transition-opacity duration-500',
                isLanguageFading ? 'opacity-0' : 'opacity-100',
              ]"
            >
              <span v-if="currentLanguage === 'es'">
                Soy Full Stack Developer, especializado en el desarrollo de
                microservicios escalables usando Node.js y NestJS, y en
                aplicaciones frontend modernas con React.js, Vue.js y Angular.
                He trabajado en proyectos para grandes empresas de los sectores
                automotriz, retail y financiero, optimizando plataformas
                digitales y creando experiencias de usuario innovadoras.
                Apasionado por el clean code, la arquitectura de software y el
                diseño centrado en el usuario, busco siempre crear soluciones
                que no solo funcionen — sino que también encanten.
              </span>
              <span v-else>
                I am a Full Stack Developer specialized in building scalable
                backend services with Node.js and NestJS, and modern frontend
                applications using React.js, Vue.js and Angular. I have
                contributed to projects for major companies in the automotive,
                retail, and financial sectors, optimizing digital experiences
                through innovative platforms and microservices architecture.
                Passionate about clean code, software architecture, and
                user-centered design, I aim to create solutions that not only
                work — but delight.
              </span>
            </p>

            <button
              class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 mb-8"
            >
              Download CV
            </button>

            <!-- Skills con animación de cascada -->
<div
  class="space-y-5 overflow-hidden transition-all duration-500"
  :style="{ maxHeight: isExpanded ? '2000px' : '300px' }"
>
  <div
    v-for="(skill, index) in skills"
    :key="index"
    data-aos="fade-up"
    data-aos-duration="600"
    :data-aos-delay="index * 100"
  >
    <div class="flex justify-between mb-1 text-sm font-semibold">
      <span class="text-gray-600">{{ skill.name }}</span>
      <span class="text-gray-500">{{ skill.percentage }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div
        class="h-2 rounded-full"
        :class="skill.color"
        :style="{ width: skill.percentage + '%' }"
      ></div>
    </div>
  </div>
</div>

<!-- Botón Expandir/Achicar con ícono animado -->
<div class="flex justify-center mt-4">
  <button
    @click="toggleExpand"
    class="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform"
  >
    <i
      class="fas fa-chevron-down transition-transform duration-500"
      :class="{
        'rotate-180': isExpanded,
        'rotate-0': !isExpanded
      }"
    ></i>
  </button>
</div>


          </div>
        </div>

        <!-- Stats -->
        <div
          class="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div
            class="flex flex-col items-center transition-transform hover:scale-105 hover:text-blue-600 duration-300"
          >
            <div class="text-5xl mb-3">
              <i class="fas fa-briefcase"></i>
            </div>
            <span class="text-3xl font-bold">198</span>
            <p class="text-gray-500">Projects completed</p>
          </div>

          <div
            class="flex flex-col items-center transition-transform hover:scale-105 hover:text-green-600 duration-300"
          >
            <div class="text-5xl mb-3">
              <i class="fas fa-sync-alt"></i>
            </div>
            <span class="text-3xl font-bold">102</span>
            <p class="text-gray-500">Running project</p>
          </div>

          <div
            class="flex flex-col items-center transition-transform hover:scale-105 hover:text-yellow-500 duration-300"
          >
            <div class="text-5xl mb-3">
              <i class="fas fa-smile"></i>
            </div>
            <span class="text-3xl font-bold">90</span>
            <p class="text-gray-500">Satisfied clients</p>
          </div>

          <div
            class="flex flex-col items-center transition-transform hover:scale-105 hover:text-purple-500 duration-300"
          >
            <div class="text-5xl mb-3">
              <i class="fas fa-trophy"></i>
            </div>
            <span class="text-3xl font-bold">85</span>
            <p class="text-gray-500">Nominees winner</p>
          </div>
        </div>

        <!-- Services -->
        <div class="w-full max-w-6xl text-center mt-20 mb-16">
          <h2
            class="text-4xl font-bold mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Services
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div
              v-for="(service, index) in services"
              :key="index"
              :class="[
                'p-8 rounded-2xl shadow-md transition-colors transition-all duration-500',
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-slate-100',
              ]"
              data-aos="flip-left"
              data-aos-duration="1000"
              :data-aos-delay="index * 150"
            >
              <div class="text-5xl mb-5 text-blue-400">
                <i :class="service.icon"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
              <p class="text-gray-400 text-sm">{{ service.description }}</p>
            </div>
          </div>
        </div>
<!-- Timeline Mejorado: Contraste Nítido -->
<div class="w-full max-w-6xl text-center mb-16">
  <h2
    class="text-4xl font-bold mb-12"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="100"
  >
    Experience
  </h2>

  <div class="relative border-l-2 border-gray-300 dark:border-gray-600 ml-4">
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      class="mb-10 ml-6 relative"
      data-aos="fade-up"
      data-aos-duration="1000"
      :data-aos-delay="index * 200"
    >
      <!-- Círculo animado -->
      <div
        class="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full mt-1.5 -left-2 border-2 border-white dark:border-gray-800 animate-pop"
      ></div>

      <!-- Tiempo -->
      <time class="block mb-2 text-xs font-semibold text-gray-900 dark:text-gray-400 uppercase">
        {{ exp.period }}
      </time>

      <!-- Título -->
      <h3 class="text-gray-800 dark:text-gray-400 text-sm mt-2 leading-relaxed">
  {{ exp.title }}
</h3>


      <!-- Descripción -->
      <p class="text-gray-800 dark:text-gray-400 text-sm mt-2 leading-relaxed">
        {{ exp.description }}
      </p>
    </div>
  </div>
</div>




      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "AboutMe",
  data() {
    return {
      isDarkMode: false,
      isLoading: true,
      currentLanguage: "es",
      isLanguageFading: false,
      isExpanded: false,
      isLoaded: false,
      nameLetters: "Alex Dev".split(""),
      isFading: false,
      skills: [
        { name: "JavaScript", percentage: 95, color: "bg-yellow-400" },
        { name: "Node.js / NestJS", percentage: 90, color: "bg-green-400" },
        { name: "React.js", percentage: 85, color: "bg-blue-400" },
        { name: "Vue.js", percentage: 80, color: "bg-emerald-400" },
        { name: "Angular", percentage: 75, color: "bg-red-400" },
        { name: "MongoDB", percentage: 80, color: "bg-green-500" },
        { name: "PostgreSQL", percentage: 75, color: "bg-indigo-400" },
        { name: "SQL Server", percentage: 70, color: "bg-purple-400" },
        { name: "Express", percentage: 85, color: "bg-gray-400" },
        { name: "Jest", percentage: 70, color: "bg-pink-400" },
      ],
      services: [
        {
          title: "Microservices Development",
          description:
            "Design and build scalable backend services using Node.js, NestJS, and Express.",
          icon: "fas fa-server",
        },
        {
          title: "API Creation",
          description:
            "Development of RESTful and GraphQL APIs with efficient, secure architectures.",
          icon: "fas fa-code-branch",
        },
        {
          title: "Frontend Development",
          description:
            "Building modern, responsive UIs using React.js, Vue.js, and Angular.",
          icon: "fas fa-laptop-code",
        },
        {
          title: "Payment System Integration",
          description:
            "Implement secure, optimized payment flows for retail and fintech platforms.",
          icon: "fas fa-credit-card",
        },
        {
          title: "Enterprise Platform Integration",
          description:
            "Connect and optimize complex platforms across automotive, retail, and financial sectors.",
          icon: "fas fa-project-diagram",
        },
      ],
      experiences: [
        {
          title: "Full Stack Developer - CleverIT Group",
          period: "Oct 2024 - Present",
          description:
            "Development of scalable backend and frontend solutions for enterprise platforms using Node.js and React.js.",
        },
        {
          title: "Software Developer - Gatblac",
          period: "Oct 2022 - Aug 2024",
          description:
            "Worked on chatbots, payment systems, and microservices for retail and automotive sectors using Node.js, Vue.js, React.js, and NestJS.",
        },
        {
          title: "Backend Developer - Jumpitt",
          period: "Aug 2021 - Jul 2022",
          description:
            "Real-time service assignment algorithm development using Node.js, Java Spring Boot, and PostgreSQL.",
        },
        {
          title: "Full Stack Developer - Jummpy",
          period: "Oct 2020 - Dec 2020",
          description:
            "Development of a B2B intermediary platform with Laravel, Vue.js, and PostgreSQL.",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.isLoaded = true; 
    }, 2000); // 2 segundos de loader
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.$nextTick(() => {
        AOS.refresh(); // <<<<<<
      });
    },
    toggleLanguage() {
      this.isLanguageFading = true; // activa fade-out
      setTimeout(() => {
        this.currentLanguage = this.currentLanguage === "es" ? "en" : "es"; // cambia idioma
        this.isLanguageFading = false; // activa fade-in
      }, 300); // 300ms de fade
    },
    toggleExpand() {
  this.isExpanded = !this.isExpanded;
},
  },
};
</script>

<style scoped>
.text-primary {
  color: #3b82f6; /* azul Tailwind (blue-500) */
}

/* Si quieres un degradado aún más pro para las letras del loader: */
.text-primary {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.animation-delay-0 {
  animation-delay: 0ms;
}
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
.animation-delay-400 {
  animation-delay: 400ms;
}
.animation-delay-500 {
  animation-delay: 500ms;
}
.animation-delay-600 {
  animation-delay: 600ms;
}
.animation-delay-700 {
  animation-delay: 700ms;
}
.animation-delay-800 {
  animation-delay: 800ms;
}
.animation-delay-900 {
  animation-delay: 900ms;
}
.animation-delay-1000 {
  animation-delay: 1000ms;
}
.animation-delay-1100 {
  animation-delay: 1100ms;
}
.animation-delay-1200 {
  animation-delay: 1200ms;
}
</style>
