import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Pay Aja',
        description: 'This is a description for Project A.',
        image: 'ic_payaja.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]


      },
      {
        id: 2,
        title: 'Josnet Salesman',
        description: 'Project B built with modern tech.',
        image: 'ic_josnet_sales.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
      {
        id: 3,
        title: 'Josnet Retail Dan Grosir',
        description: 'A personal portfolio website.',
        image: 'ic_josnet_retail.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
       {
        id: 4,
        title: 'SaiMART Pay',
        description: 'A personal portfolio website.',
        image: 'ic_saipay.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
      {
        id: 5,
        title: 'Fuel Card',
        description: 'A personal portfolio website.',
        image: 'ic_fuelcard.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
    ],
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    },
  },
});
