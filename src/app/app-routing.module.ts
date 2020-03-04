import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "page-not-found",
    component: NotFoundComponent
  },
  {
    path: "",
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule),
    data: { preload: true }
  },

  {
    path: "**",
    redirectTo: "page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
