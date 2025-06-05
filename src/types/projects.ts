export interface Project {
  title: string,
  description: string,
  picture: string,
  skills: Skill[],
  link_github: string,
  link_demo: string,
  color_effect: string,
  creation_date: string,
}

export interface Skill{
  name: string,
  logo: string
  type: 'DEVELOPMENT' | 'TOOL'
}