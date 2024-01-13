/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Pantheon } from '../models/pantheon';
import gods from '../../assets/gods.json';

interface params {
  class: string;
  pantheon: string;
}

@Injectable({
  providedIn: 'root',
})
export class GodService {
  pantheon: Pantheon[] = [
    { name: 'Arthurian' },
    { name: 'Babylonian' },
    { name: 'Celtic' },
    { name: 'Chinese' },
    { name: 'Egyptian' },
    { name: 'Great Old Ones' },
    { name: 'Greek' },
    { name: 'Hindu' },
    { name: 'Japanese' },
    { name: 'Maya' },
    { name: 'Norse' },
    { name: 'Polynesian' },
    { name: 'Roman' },
    { name: 'Slavic' },
    { name: 'Voodoo' },
    { name: 'Yoruba' },
  ];

  godClass = [
    { name: 'Hunter' },
    { name: 'Warrior' },
    { name: 'Assassin' },
    { name: 'Guardian' },
    { name: 'Mage' },
  ];

  gods = gods;

  private randomNumberGod(size: number) {
    const min = 0;
    return Math.floor(Math.random() * (size - min + 1) + min);
  }

  private filterGodsByProperties(arr: any, filters: any) {
    return arr.filter(
      (character: any) =>
        (!filters.class ||
          character.summary.class
            .toLowerCase()
            .includes(filters.class.toLowerCase())) &&
        (!filters.pantheon ||
          character.summary.pantheon
            .toLowerCase()
            .includes(filters.pantheon.toLowerCase()))
    );
  }

  getPantheon() {
    return this.pantheon;
  }

  getClass() {
    return this.godClass;
  }

  getGods() {
    return this.gods;
  }

  randomizeGame(parameters: params) {
    const currentArray = [...this.gods];
    const filteredGods = this.filterGodsByProperties(currentArray, parameters);
    return filteredGods[this.randomNumberGod(filteredGods.length - 1)];
  }
}
