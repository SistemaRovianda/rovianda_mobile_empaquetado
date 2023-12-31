import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./shared/services/auth.service";
import { Router } from "@angular/router";
import * as splash from "@capacitor/core";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.ready().then(() => {
        this._authService
          .isAuth()
          .pipe(
            mergeMap(
              (val) => this._authService.verifyRole(),
              (val1, val2) => {
                return val1 && val2 ? true : false;
              }
            )
          )
          .subscribe((res) => {
            if (res) {
              console.log("product/list");
              this._router.navigate(["packaged-layout", "orders"]);
            } else {
              console.log("login");
              this._router.navigate(["login"]);
            }
            splash.SplashScreen.hide();
          });
      });
    });
  }
}
