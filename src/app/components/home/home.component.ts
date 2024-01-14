/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { GodService } from 'src/app/services/god.service';
import { God } from 'src/app/models/god';
import { Pantheon } from 'src/app/models/pantheon';
import { GodClass } from 'src/app/models/god-class';
import { GodsCardComponent } from '../gods-card/gods-card.component';

@Component({
  selector: 'smite-randomizer-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    GodsCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedPlayers: number = 1;
  godsClasses: GodClass[] = this.godService.getClass();
  godsPantheons: Pantheon[] = this.godService.getPantheon();
  selectedClassP1: GodClass = { name: '' };
  selectedPantheonP1: Pantheon = { name: '' };
  godP1!: God;
  selectedClassP2: GodClass = { name: '' };
  selectedPantheonP2: Pantheon = { name: '' };
  godP2!: God;

  constructor(private godService: GodService) {}

  generateP1() {
    const params = {
      class: this.selectedClassP1?.name ? this.selectedClassP1.name : '',
      pantheon: this.selectedPantheonP1?.name
        ? this.selectedPantheonP1?.name
        : '',
    };
    this.godP1 = this.godService.randomizeGame(params);
  }

  generateP2() {
    const params = {
      class: this.selectedClassP2?.name ? this.selectedClassP2.name : '',
      pantheon: this.selectedPantheonP2?.name
        ? this.selectedPantheonP2?.name
        : '',
    };
    this.godP2 = this.godService.randomizeGame(params);
  }

  onSelectedPantheonP1(pantheon: any) {
    this.selectedPantheonP1 = pantheon;
  }

  onSelectedPantheonP2(pantheon: any) {
    this.selectedPantheonP2 = pantheon;
  }

  onSelectedClassP1(godClass: any) {
    this.selectedClassP1 = godClass;
  }

  onSelectedClassP2(godClass: any) {
    this.selectedClassP2 = godClass;
  }
}
