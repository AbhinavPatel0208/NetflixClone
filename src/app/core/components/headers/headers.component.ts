import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
  @Input({ required: true }) userImg: string = '';
  navList = ["Home","TV Shows","News & Popular","Browse & Language"]
}
