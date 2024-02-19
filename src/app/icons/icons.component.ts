import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuItems = [
    { title: "Toutes les demandes", link: "#" },
    { title: "Rechercher une demande", link: "#" },
    { title: "Extraire la demande (CSV)", link: "#" },
    { title: "Demander plus de détails", link: "#" },
    { title: "Liste des réclamations", link: "#" }
  ];
}
