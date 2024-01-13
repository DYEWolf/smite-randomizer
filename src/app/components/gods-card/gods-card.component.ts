/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { GodClass } from 'src/app/models/god-class';
import { Pantheon } from 'src/app/models/pantheon';
import { God } from 'src/app/models/god';

@Component({
  selector: 'smite-randomizer-gods-card',
  standalone: true,
  imports: [CommonModule, CardModule, DropdownModule, FormsModule],
  templateUrl: './gods-card.component.html',
  styleUrl: './gods-card.component.css',
})
export class GodsCardComponent {
  @Input() players!: number;
  @Input() godsClasses!: GodClass[];
  @Input() godsPantheons!: Pantheon[];
  @Input() god!: God;
  @Output() pantheon = new EventEmitter();
  @Output() class = new EventEmitter();
  selectedClass: GodClass = { name: '' };
  selectedPantheon: Pantheon = { name: '' };
}
