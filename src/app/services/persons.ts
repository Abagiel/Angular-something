export interface ListItem {
	name: string,
	isCompleted: boolean
}

export interface PersonInfo {
	name: string,
	birthYear: number,
	deathYear?: number,
	age: number,
	gender: string,
	list: ListItem[]
}

export interface Coords {
	left: string,
	top: string
}

export interface Person extends PersonInfo {
	id: number,
	css: Coords
}

export interface Family {
	id: number,
	name: string | number,
	persons: Person[]
}