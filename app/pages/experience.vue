<script setup>
const experiences = [
  {
    title: 'Software Engineer',
    company: 'PT. Arranet Indonesia Sejahtera',
    dates: 'Aug 2022 - Present',
    location: 'Jakarta, Indonesia',
    items: [
      {
        heading: 'Projects & Achievements',
        points: [
          'Implemented PPOB bill payment and digital product purchase features, resulting in a 15% increase in monthly transaction volume and expansion to 20+ additional digital product types.',
          'Developed and launched real-time BI-FAST fund transfer capability, cutting average transfer time from 5 minutes to <10 seconds and scaling throughput to 3,000+ daily transactions.',
          'Implemented a QRIS backend-to-image data conversion module and optimized the rendering pipeline, driving a 25% increase in user adoption within the first quarter.',
          ,
        ]
      },
      {
        heading: 'EDC Integration (Topwise T3, Advan C1 Smartpeak)',
        points: [
          'Developed and unified SDK integration for four different EDC/POS device models, reducing device integration bug reports by 30%.'
        ]
      },
      {
        heading: 'Soundbox Integration (Topwise SP10)',
        points: [
          'Configured the Topwise SP10 soundbox for automated voice transaction notifications via MQTT, achieving <2-second delivery time and 99% voice notification accuracy.'
        ]
      },
    ],
    technologies: [
      'Kotlin', 'Jetpack Compose', 'MQTT', 'Retrofit', 'Hilt', 'DataStore', 'Git', 'Azure', 'Jira'
    ]
  },
  {
    title: 'Fasilitator Program Digital Talent Scholarship (DTS) 2021',
    company: 'Dicoding Indonesia',
    dates: 'Oct 2021 - Dec 2021 (Seasonal)',
    location: 'Remote',
    items: [
      {
        heading: 'Responsibilities',
        points: [
          'Mentored and facilitated Android Development learning for 26 participants of the DTS ProA 2021 program.',
          'Achieved a 69% graduation rate (18 out of 26 participants) by providing intensive technical guidance and weekly progress reviews.',
          'Assisted participants in understanding complex learning materials and completing Submission projects.',
          'Managed effective communication and coordination between participants and the organizing teams (Dicoding and Kominfo) to ensure smooth program implementation.',
          'Continuously monitored participant progress and delivered constructive feedback 2 - 3 times per week to support the development of their technical skills.'
        ]
      }
    ],
    technologies: []
  },
  {
    title: 'Fasilitator Program Baparekraf Developer Day (BDD) 2021',
    company: 'Baparekraf Digital Talent',
    dates: 'May 2021 - Jul 2021 (Seasonal)',
    location: 'Remote',
    items: [
      {
        heading: 'Responsibilities',
        points: [
          'Mentored and facilitated Android Development learning for 30 participants of the BDT 2021 program over a 3-month period.', 
          'Achieved a 73% graduation rate (22 out of 30 participants) by providing technical guidance and ensuring understanding of core learning materials.',
          'Managed effective communication and coordination between participants and the organizing team to ensure smooth and well-structured program execution.',
          'Monitored participant progress in detail and delivered constructive feedback and weekly mentoring to improve participants’ technical skills.'
        ]
      }
    ],
    technologies: []
  },
  {
    title: 'Android Developer Cohort',
    company: 'Bangkit Academy led by Google, GoTo, & Traveloka',
    dates: 'Feb 2021 - Jul 2021',
    location: 'Remote',
    items: [
      {
        heading: 'Program Focus',
        points: [
          'Graduated from an intensive Android Development training program with 500+ hours of learning (equivalent to 5 full months), focused on building industry-level skills.',
          'Gained in-depth mastery of Kotlin and Android Jetpack (ViewModel, LiveData, Navigation, Room, Retrofit, etc.) along with Software Engineering principles (Clean Code, SOLID, Git).',
          'Successfully completed a collaborative Capstone Project involving a cross-domain team (6 members) from the Machine Learning (ML) and Cloud Computing tracks.',
          'Successfully graduated from the program and earned certification, demonstrating industry readiness in both hard skills and soft skills (communication, teamwork).'
        ]
      }
    ],
    technologies: ['Kotlin', 'Android Jetpack', 'SOLID', 'Git']
  }
];
</script>

<template>
  <section id="experience" class="bg-gray-900 py-16">
    <div v-scroll-animation>
      <UContainer>
        
        <div class="text-center">
          <h2
            class="font-extrabold text-3xl uppercase tracking-widest text-sky-400"
          >
            Work Experience & Programs
          </h2>
          <div class="flex justify-center items-center mt-3 mb-12">
            <span class="w-10 h-0.5 bg-white"></span>
            <span class="w-4 h-0.5 mx-1 bg-sky-400"></span>
            <span class="w-10 h-0.5 bg-white"></span>
          </div>
        </div>

        <div class="max-w-4xl mx-auto space-y-8">
          
          <UCard
            v-for="(exp, index) in experiences" 
            :key="index" 
            :ui="{ 
              base: 'transition hover:shadow-sky-500/50 hover:shadow-xl', 
              background: 'bg-gray-800',  
              divide: 'divide-gray-700' 
            }"
          >
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white">{{ exp.title }}</h3>
              
              <p class="font-semibold text-xl text-sky-400 mt-1">{{ exp.company }}</p>
              
              <p class="text-gray-400 text-sm mt-1">
                {{ exp.dates }} | {{ exp.location }}
              </p>
            </div>

            <div class="space-y-6">
              <div v-for="(item, itemIndex) in exp.items" :key="itemIndex">
                <h4 class="text-lg font-semibold text-white mb-2">{{ item.heading }}</h4>
                <ul class="list-disc list-inside text-gray-400 space-y-1 pl-2">
                  <li v-for="(point, pointIndex) in item.points" :key="pointIndex">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="exp.technologies.length > 0" class="mt-8">
              <h4 class="text-lg font-semibold text-white mb-3">Technologies & Tools</h4>
              <div class="flex flex-wrap gap-2">
                <UBadge 
                  v-for="(tech, techIndex) in exp.technologies" 
                  :key="techIndex" 
                  color="sky" 
                  variant="subtle" 
                  size="md"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>
          </UCard>
        </div>
        
      </UContainer>
    </div>
  </section>
</template>

