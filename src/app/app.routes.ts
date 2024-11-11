import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SpecialistDetailsComponent } from './page/specialist-details/specialist-details.component';
import { SpecialistAgendaComponent } from './page/specialist-agenda/specialist-agenda.component';

export const routes: Routes = [
    // Creacion de rutas
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "specialist-details", component: SpecialistDetailsComponent},
    {path: "specialist-agenda", component: SpecialistAgendaComponent},
    {path: "", redirectTo: "login", pathMatch: "full"}
];
