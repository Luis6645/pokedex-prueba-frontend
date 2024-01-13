export interface PokemonLista {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonTarjeta[];
}

export interface PokemonTarjeta {
    name: string;
    url: string;
    id: number;
    img: string;
}