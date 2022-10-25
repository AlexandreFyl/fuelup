import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  dockItems!: MenuItem[];

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Classement',
              icon: "assets/sidebar/trophee.png"
          },
          {
              label: 'Carte',
              icon: "assets/sidebar/espace-reserve.png"
          },
          {
              label: 'Comparateur',
              icon: "assets/sidebar/calculatrice.png"
          },
          {
              label: 'Parametres',
              icon: "assets/sidebar/parametres.png"
          },
          {
              label: 'Nous contacter',
              icon: "assets/sidebar/discuter.png"
          }
      ];

  }

}
