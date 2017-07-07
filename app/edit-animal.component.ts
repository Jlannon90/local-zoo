import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>Edit {{childSelectedAnimal.name}}'s Info</h3>
          <div class="edit">
            <div class="small-edit">
              <label>Enter Animal Species:</label>
              <input [(ngModel)]="childSelectedAnimal.species">
              <label>Enter Animal Name:</label>
              <input [(ngModel)]="childSelectedAnimal.name">
              <label>Enter Animal Age:</label>
              <input [(ngModel)]="childSelectedAnimal.age">
              <label>Enter Animal Diet:</label>
              <input [(ngModel)]="childSelectedAnimal.diet">
              <label>Enter Animal Location:</label>
              <input [(ngModel)]="childSelectedAnimal.location">
            </div>
            <div class="small-edit">
              <label>Enter Animal Caretakers:</label>
              <input [(ngModel)]="childSelectedAnimal.caretakers">
              <label>Enter Animal Sex:</label>
              <input [(ngModel)]="childSelectedAnimal.sex">
              <label>Enter Animal Likes:</label>
              <input [(ngModel)]="childSelectedAnimal.likes">
              <label>Enter Animal Dislikes:</label>
              <input [(ngModel)]="childSelectedAnimal.dislikes">
            </div>
          </div>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
        <hr>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
