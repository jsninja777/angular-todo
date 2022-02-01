import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { TaskComponent } from "./components/task/task.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { FormsModule } from "@angular/forms";
import { TaskDetailsComponent } from "./pages/task-details/task-details.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "details/:id",
    component: TaskDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
