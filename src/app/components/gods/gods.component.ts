import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsCardComponent } from '../gods-card/gods-card.component';
import { CardModule } from 'primeng/card';
import { God } from 'src/app/models/god';

@Component({
  selector: 'smite-randomizer-gods',
  standalone: true,
  imports: [CommonModule, GodsCardComponent, CardModule],
  templateUrl: './gods.component.html',
  styleUrl: './gods.component.css',
})
export class GodsComponent {
  @Input() gods: God[] = [];
}
