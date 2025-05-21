export interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: Resource[]
    game_indices: Index[]
    held_items: HeldItem[]
    location_area_encounters: string
    moves: Mfe[]
    species: Resource
    sprites: Sprites
    cries: Cries
    stats: Stat[]
    types: Type[]
    past_types: PastType[]
    past_abilities: PastAbility[]
}

export interface Resource {
    name: string
    url: string
}

export interface Ability {
    is_hidden: boolean
    slot: number
    ability: Resource
}

export interface Index {
    game_index: number
    version: Resource
}

export interface HeldItem {
    item: Resource
    version_details: VersionDetail[]
}

export interface Item {
    name: string
    url: string
}

export interface VersionDetail {
    rarity: number
    version: Resource
}

export interface Mfe {
    move: Resource
    version_group_details: VersionGroupDetail[]
}

export interface Move {
    name: string
    url: string
}

export interface VersionGroupDetail {
    level_learned_at: number
    version_group: Resource
    move_learn_method: Resource
    order: number
}

export interface Species {
    name: string
    url: string
}

export interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface Cries {
    latest: string
    legacy: string
}

export interface Stat {
    base_stat: number
    effort: number
    stat: Resource
}

export interface Type {
    slot: number
    type: Resource
}

export interface PastType {
    generation: Resource
    types: Type[]
}

export interface Generation {
    name: string
    url: string
}

export interface PastAbility {
    generation: Resource
    abilities: Ability[]
}
