import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsCardComponent } from '../gods-card/gods-card.component';
import { CardModule } from 'primeng/card';
import { God } from 'src/app/models/god';
import { GodClass } from 'src/app/models/god-class';
import { Pantheon } from 'src/app/models/pantheon';
import { GodService } from 'src/app/services/god.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smite-randomizer-gods',
  standalone: true,
  imports: [
    CommonModule,
    GodsCardComponent,
    CardModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './gods.component.html',
  styleUrl: './gods.component.css',
})
export class GodsComponent implements OnInit {
  @Input() gods: God[] = [];
  @Input() numberOfPlayers!: number;
  selectedPantheon: Pantheon = { name: '' };
  selectedClass: GodClass = { name: '' };
  godsClasses: GodClass[] = this.godService.getClass();
  godsPantheons: Pantheon[] = this.godService.getPantheon();

  constructor(private godService: GodService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
