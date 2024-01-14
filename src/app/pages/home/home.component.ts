import { Component } from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: []
})
export class HomeComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // mouse event

    document.body.addEventListener('pointermove', (e) => {
      document.documentElement.style.setProperty('--x', Math.round(e.clientX).toString());
      document.documentElement.style.setProperty('--y', Math.round(e.clientY).toString());
    });

  }


}
