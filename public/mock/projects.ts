import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: 'MarvelHub',
    description: 'O site MarvelHub é uma plataforma de filmes e séries da Marvel, com visual moderno e navegação por categorias. Foi desenvolvido em React utilizando a API do The Movie Database (TMDb).',
    picture: '/projects/MarvelHub.png',
    skills: [
      {
        name: 'React',
        logo: '/skills/React.png',
        type: 'DEVELOPMENT'
      }
    ],
    link_github: 'https://github.com/Guilhermee19/react-movie-web',
    link_demo: 'https://react-movie-web-zeta.vercel.app/',
    color_effect: '#181C3C',
    creation_date: '2022-03-30'
  },
   {
    title: 'TourVirtual',
    description: 'O site TCC Tour Virtual apresenta um passeio virtual interativo como projeto de TCC. A proposta é oferecer uma experiência imersiva por meio de um tour 360° por ambientes como escolas e espaços expositivos.',
    picture: '/projects/TourVirtual.png',
    skills: [
      {
        name: 'Angular',
        logo: '/skills/Angular.png',
        type: 'DEVELOPMENT'
      },
      {
        name: 'ThreeJs',
        logo: '/skills/ThreeJs.png',
        type: 'TOOL'
      }
    ],
    link_github: 'https://github.com/Guilhermee19/TCC_Turismo_Virtual',
    link_demo: 'https://tcctourvirtual.vercel.app/home',
    color_effect: '#144D87',
    creation_date: '2021-04-18'
  },
  {
    title: 'PokéDex',
    description: 'O site PokéDex Web exibe informações de Pokémon em tempo real usando a PokéAPI. Desenvolvido em React, permite navegar por nome, tipo e habilidades de forma interativa.',
    picture: '/projects/PokeDex.png',
    skills: [
      {
        name: 'Angular',
        logo: '/skills/Angular.png',
        type: 'DEVELOPMENT'
      }
    ],
    link_github: 'https://github.com/Guilhermee19/pokedex-web',
    link_demo: 'https://pokedex-web-mocha.vercel.app/',
    color_effect: '#2B3151',
    creation_date: '2024-08-06'
  },
  // {
  //   title: '',
  //   description: '',
  //   picture: '/public/projects/',
  //   skills: [
  //     {
  //       name: 'React',
  //       logo: '/public/skills/',
  //       type: 'DEVELOPMENT'
  //     }
  //   ],
  //   link_github: 'https://github.com/Guilhermee19/',
  //   link_demo: '',
  //   color_effect: '#2B3151',
  //   creation_date: '2022-03-30'
  // },
]