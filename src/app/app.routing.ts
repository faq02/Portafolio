import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import {HeaderComponent} from "././component/header/header.component";
const appRoutes = [
    { path: "", component: HeaderComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
