import mongoose from "mongoose"

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
    moves: Move[]
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

export interface Move {
    move: Resource
    version_group_details: VersionGroupDetail[]
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

// Functions to build mongoose schema

export const buildPokemonSchema = () => {
    return new mongoose.Schema({
        id: Number,
        name: String,
        base_experience: Number,
        height: Number,
        is_default: Boolean,
        order: Number,
        weight: Number,
        abilities: [buildAbilitySchema()],
        forms: [buildResourceSchema()],
        game_indices: [buildIndexSchema()],
        held_items: [buildHeldItemSchema()],
        location_area_encounters: String,
        moves: [buildMovesSchema()],
        species: buildResourceSchema(),
        sprites: buildSpritesSchema(),
        cries: buildCriesSchema(),
        stats: [buildStatSchema()],
        types: [buildTypesSchema()],
        past_types: [buildPastTypesSchema()],
        past_abilities: [buildPastAbilitySchema()]
    })
}

const buildResourceSchema = () => {
    return new mongoose.Schema({
        name: String,
        url: String
    }, { _id: false })
}

const buildAbilitySchema = () => {
    return new mongoose.Schema({
        isHidden: Boolean,
        slot: Number,
        ability: buildResourceSchema(),
    }, { _id: false })
}

const buildIndexSchema = () => {
    return new mongoose.Schema({
        game_index: Number,
        version: buildResourceSchema()
    }, { _id: false })
}

const buildHeldItemSchema = () => {
    return new mongoose.Schema({
        item: buildResourceSchema(),
        version_details: [buildVersionDetailSchema()]
    }, { _id: false })
}

const buildVersionDetailSchema = () => {
    return new mongoose.Schema({
        rarity: Number,
        version: buildResourceSchema()
    }, { _id: false })
}

const buildMovesSchema = () => {
    return new mongoose.Schema({
        move: buildResourceSchema(),
        version_group_details: [buildVersionGroupDetailSchema()],
    }, { _id: false })
}

const buildVersionGroupDetailSchema = () => {
    return new mongoose.Schema({
        level_learned_at: Number,
        version_group: buildResourceSchema(),
        move_learned_method: buildResourceSchema(),
        order: Number
    }, { _id: false })
}

const buildSpritesSchema = () => {
    return new mongoose.Schema({
        back_default: String,
        back_female: String,
        back_shiny: String,
        back_shiny_female: String,
        front_default: String,
        front_female: String,
        front_shiny: String,
        front_shiny_female: String
    }, { _id: false })
}

const buildCriesSchema = () => {
    return new mongoose.Schema({
        latest: String,
        legacy: String
    }, { _id: false })
}

const buildStatSchema = () => {
    return new mongoose.Schema({
        base_stat: Number,
        effort: Number,
        stat: buildResourceSchema()
    }, { _id: false })
}

const buildTypesSchema = () => {
    return new mongoose.Schema({
        slot: Number,
        type: buildResourceSchema()
    }, { _id: false })
}

const buildPastTypesSchema = () => {
    return new mongoose.Schema({
        generation: buildResourceSchema(),
        types: [buildTypesSchema()]
    }, { _id: false })
}

const buildPastAbilitySchema = () => {
    return new mongoose.Schema({
        generation: buildResourceSchema(),
        abilities: [buildAbilitySchema()]
    }, { _id: false })
}
