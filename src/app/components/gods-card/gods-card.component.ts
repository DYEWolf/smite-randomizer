import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { God } from 'src/app/models/god';

@Component({
  selector: 'smite-randomizer-gods-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gods-card.component.html',
  styleUrl: './gods-card.component.css',
})
export class GodsCardComponent {
  @Input() god!: God;
}
