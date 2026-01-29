import { Injectable } from '@angular/core';
import { Spell } from '../../model/spell';

@Injectable({
  providedIn: 'root',
})
export class SpellService {

  spellsURL = 'https://www.dnd5eapi.co/api/2014/spells'

  getAllSpells(): Promise<Spell[]> {
    return fetch(this.spellsURL)
    .then(resp => resp.json())
    .then(spells => spells.results);
  }
  
  getSpellByindex(index: string){
    const selectedSpellURL = this.spellsURL + '/' + index;
    return fetch(selectedSpellURL)
    .then(resp => resp.json())
  }
}
