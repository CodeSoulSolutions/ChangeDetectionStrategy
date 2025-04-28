import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent {
  @Input() data: { value: string } = { value: '' }; 
}
