import { LayoutComponent } from "./layout/layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "statistics",
        loadChildren: () =>
          import("./statistics/statistics.module").then(
            m => m.StatisticsModule
          ),
        data: { preload: true }
      },
      {
        path: "",
        loadChildren: () =>
          import("./homepage/homepage.module").then(m => m.HomepageModule),
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
