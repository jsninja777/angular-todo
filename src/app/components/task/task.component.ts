import { Component, OnInit, Input } from "@angular/core";
import { BackendService, Task } from "src/app/backend.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  @Input() data: Task;
  assigneeName: string = null;
  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit(): void {
    this.getUserName(this.data.assigneeId);
  }

  async getUserName(userId) {
    if (!userId) {
      return (this.assigneeName = null);
    }
    const user = await this.backend.user(userId).toPromise();
    if (user) {
      return (this.assigneeName = user.name);
    } else {
      return (this.assigneeName = null);
    }
  }

  goToDetails(id) {
    this.router.navigate([`/details/${id}`]);
  }
}
