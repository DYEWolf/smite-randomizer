export interface God {
  name: string;
  summary: Summary;
  stats: Stats;
}

interface Stats {
  health: string;
  mana: string;
  speed: string;
  range: string;
  attack_sec: string;
  basic_attack: Basicattack;
  protection: Protection;
  regen: Regen;
}

interface Regen {
  hp5: string;
  mp5: string;
}

interface Protection {
  physical: string;
  magical: string;
}

interface Basicattack {
  damage: string;
  progression: string;
}

interface Summary {
  title: string;
  pantheon: string;
  type: string;
  class: string;
  pros: string;
  difficulty: string;
  release_date: string;
  favor?: number | null | undefined;
  gems?: number | null | undefined;
  voicelines: string;
  voice_actor: string;
}
