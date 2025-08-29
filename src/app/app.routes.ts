import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path: "Dashboard", component: Dashboard},
    {path: "", pathMatch: "full", redirectTo: "Dashboard"}
];
