import { Component } from '@angular/core';
import { ChildComponentComponent } from "./child-component/child-component.component";

@Component({
  selector: 'app-root',
  imports: [ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayData = { value: 'Initial Value' };

  updateValueSameObject(): void {
    this.displayData.value = 'Updated Value (Same Object)';
    console.log('Parent: Updated same object');
  }

  updateValueNewObject(): void {
    this.displayData = { value: 'New Value (New Object)' };
    console.log('Parent: Created new object');
  }
}
