import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-templates',
  templateUrl: './layout-templates.component.html',
  styleUrls: ['./layout-templates.component.css']
})
export class LayoutTemplatesComponent {
  layout = localStorage.getItem("Layout")
}
