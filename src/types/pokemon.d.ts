export type PokemonURL = {
    name: string;
    url: string;
};

export type PokemonName = {
    name: string;
};

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: any[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types:
        | [
              {
                  slot: number;
                  type: {
                      name: string;
                      url: string;
                  };
              },
              {
                  slot: number;
                  type: {
                      name: string;
                      url: string;
                  };
              }
          ]
        | undefined;
}

interface Ability {
    ability: AbilityDetail;
    is_hidden: boolean;
    slot: number;
}

interface AbilityDetail {
    name: string;
    url: string;
}

interface Form {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: Version;
}

interface Version {
    name: string;
    url: string;
}

interface Move {
    move: MoveDetail;
    version_group_details: VersionGroupDetail[];
}

interface MoveDetail {
    name: string;
    url: string;
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface MoveLearnMethod {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
        home: {
            front_default: string;
        };
    };
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
}

interface StatDetail {
    name: string;
    url: string;
}

interface Type {
    slot: number;
    type: TypeDetail;
}

interface TypeDetail {
    name: string;
    url: string;
}
