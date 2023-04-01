export interface Response<T>{
  data: T
  links: Links
  meta: Meta
}

export interface Links {
  first: string
  last: string
  prev: any
  next: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}

export interface Program  {
  id: number
  name: string
  type_code: string
  type_desc: string
  year: string
  total_task: number
}

export interface Task {
  id: number
  type: string
  program: Program
  department: Department
  regulation: Regulation
  history: RegulationHistory[]
  stage: Stage
  performance_appearance: string
  performance_statement: string
  created_at: string
  updated_at: string
}

export interface Department {
  id: number
  name: string
}

export interface ProgramType {
  id: number
  uuid: string
  type: string
  label: string
  desc: string
}

export interface Regulation {
  id: number
  type: string
  title: string
  material: string
  note: string
  initiative: string
}

export interface RegulationHistory {
  id: number
  type: string
  title: string
  material: string
  note: string
  initiative: string
  year: string
  program_name: string
  stage: Stage
  updated_at: string
}

export interface Stage {
  id: number
  name: string
}
