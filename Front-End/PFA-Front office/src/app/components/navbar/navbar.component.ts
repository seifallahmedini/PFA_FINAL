import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";

import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(
    location: Location,
    private token: TokenStorageService,
    private element: ElementRef,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(["login"]);

    //this.router.navigate(["login"]);
  }
  gotoProfile() {
    this.router.navigate(["/user-profile", this.token.getUser().id]);
  }

  gotoUpdate() {
    this.router.navigate(["/user-update", this.token.getUser().id]);
  }
}
