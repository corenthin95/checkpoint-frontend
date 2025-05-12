export type CountryType = {
    id: number
    name: string
    emoji: string
    code: string
    continent: Continent[]
}

type Continent = {
    id: number
    name: string
}