import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'st-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
