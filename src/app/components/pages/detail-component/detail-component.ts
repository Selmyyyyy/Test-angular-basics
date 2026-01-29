import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../../header-component/header-component";
import { FooterComponent } from "../../footer-component/footer-component";
import { ActivatedRoute } from '@angular/router';
import { SpellService } from '../../../services/spell-service/spell-service';
import { Spell } from '../../../model/spell';
import { SpellDetail } from '../../../model/spell.detail';

@Component({
  selector: 'app-detail-component',
  imports: [],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.scss',
})
export class DetailComponent {

  route = inject(ActivatedRoute);
  spellServ = inject(SpellService);
  spell: WritableSignal<SpellDetail | null> = signal(null);

  constructor() {
    const leonardo = this.route.snapshot.params['leonardo'];
    this.spellServ.getSpellByindex(leonardo).then(data => this.spell.set(data));
    
  }
}