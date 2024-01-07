import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gods from '../../../assets/gods.json';

@Component({
  selector: 'smite-randomizer-gods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gods.component.html',
  styleUrl: './gods.component.css',
})
export class GodsComponent implements OnInit {
  ngOnInit(): void {
    console.log(gods);
  }
}
