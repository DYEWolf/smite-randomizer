import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GodsComponent } from '../gods/gods.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { GodService } from 'src/app/services/god.service';
import { God } from 'src/app/models/god';
import { Pantheon } from 'src/app/models/pantheon';
import { GodClass } from 'src/app/models/god-class';

@Component({
  selector: 'smite-randomizer-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    GodsComponent,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  selectedPlayers: number = 1;
  selectedPantheon: Pantheon = { name: '' };
  selectedClass: GodClass = { name: '' };
  godsClasses!: GodClass[];
  godsPantheons!: Pantheon[];
  gods!: God[];
  filteredGods!: God[];

  constructor(private godService: GodService) {}

  ngOnInit(): void {
    this.gods = this.godService.getGods();
    this.godsPantheons = this.godService.getPantheon();
    this.godsClasses = this.godService.getClass();
  }

  generate() {
    const params = {
      class: this.selectedClass?.name ? this.selectedClass.name : '',
      pantheon: this.selectedPantheon?.name ? this.selectedPantheon?.name : '',
      players: this.selectedPlayers,
    };
    this.filteredGods = this.godService.randomizeGame(params);
  }
}
