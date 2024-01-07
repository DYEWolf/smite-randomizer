import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GodsComponent } from '../gods/gods.component';
import { DropdownModule } from 'primeng/dropdown';
import { Pantheon } from 'src/app/models/pantheon';
import { ButtonModule } from 'primeng/button';

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
export class HomeComponent {
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

  selectionType: string = 'single-player';
  selectedPantheon: undefined;
  selectedClass: undefined;

  generate() {
    console.log(this.selectedClass, this.selectionType, this.selectedPantheon);
  }
}
