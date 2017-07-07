import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zootopia</h1>
      <h3>{{currentFocus}}</h3>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'An Animal Sanctuary';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Giraffe', 'Gertrude', 6, 'Herbivore', 'Savanna', 3, "Female", "Leaves", "Lions"),
    new Animal('Penguin', 'Percival', 1, 'Carnivore', 'Arctic', 1, "Male", "Fish", "Seals"),
    new Animal('Jaguar', 'Jesus', 3, 'Carnivore', 'Rain Forest', 2, "Male", "Sloths", "Anacondas"),
    new Animal('Mouse', 'Matilda', .5, 'Herbivore', 'Field', 1, "Female", "Cheese", "Cats")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
