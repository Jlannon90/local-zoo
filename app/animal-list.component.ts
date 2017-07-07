import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals (under 2 years)</option>
      <option value="oldAnimals">Old Animals (2 years or older)</option>
    </select>
    <ul>
      <li (click)="isEmpty(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | years:filterByAge">{{currentAnimal.name}} {{currentAnimal.age}}
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() pourButtonClickedSender = new EventEmitter();

  editButtonHasBeenClicked(AnimalToEdit: Animal) {
    this.clickSender.emit(AnimalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  filterByAge: string = "ageAnimals";
}
