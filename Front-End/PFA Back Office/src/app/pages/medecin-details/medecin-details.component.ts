import { Component, OnInit } from "@angular/core";
import { Medecin } from "src/app/class/medecin";
import { MedecinService } from "src/app/services/medecin.service";
import { MedecinListComponent } from "../medecin-list/medecin-list.component";
import { Router, ActivatedRoute } from "@angular/router";
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: "app-medecin-details",
  templateUrl: "./medecin-details.component.html",
  styleUrls: ["./medecin-details.component.css"],
})
export class MedecinDetailsComponent implements OnInit {
  id: number;
  medecin: Medecin;

  tabVille = {
    Tunis: { lat: 36.77, lng: 10.28 },
    BenArous: { lat: 36.74886, lng: 10.224601 },
    Bizerte: { lat: 37.272091, lng: 9.870857 },
    Beja: { lat: 36.73, lng: 9.19 },
    zahra: { lat: 33.809177, lng: 10.9907213 },
    rades: { lat: 36.774402, lng: 10.276969 },
    zaghouan: { lat: 36.4117196, lng: 10.2019798 },
    kef: { lat: 36.15364, lng: 8.6082924 },
    Sfax: { lat: 34.62814, lng: 10.758707 },
    Sousse: { lat: 35.828829, lng: 10.640525 },
    Monastir: { lat: 35.739872, lng: 10.79884 },
    Ariana: { lat: 36.968574, lng: 10.121986 },
    Manouba: { lat: 36.811597, lng: 10.085763 },
    Kairouan: { lat: 35.6710101, lng: 10.10062 },
    Jendouba: { lat: 36.5, lng: 8.77 },
    Gafsa: { lat: 34.43367, lng: 8.7907988 },
    Gabes: { lat: 33.9, lng: 10.1 },
    Siliana: { lat: 36.09, lng: 9.36 },
    Kebili: { lat: 33.7061148, lng: 8.9698376 },
    Tataouine: { lat: 32.93, lng: 10.45 },
    Djerba: { lat: 33.7733906, lng: 10.8859041 },
    SidiBouzid: { lat: 35.04, lng: 9.5 },
    Nabeul: { lat: 36.46, lng: 10.73 },
    Mahdia: { lat: 35.52, lng: 11.07 },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medecinService: MedecinService
  ) {}

  ngOnInit(): void {
    this.medecin = new Medecin();
    this.id = this.route.snapshot.params["id"];

    this.medecinService.getMedecin(this.id).subscribe(
      (data) => {
        console.log(data);
        this.medecin = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(["medecin-list"]);
  }
}