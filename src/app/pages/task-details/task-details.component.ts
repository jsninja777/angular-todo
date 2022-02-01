import { Component, OnInit } from "@angular/core";
import { BackendService, Task } from "src/app/backend.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"],
})
export class TaskDetailsComponent implements OnInit {
  data: Task = {
    description: null,
    id: null,
    assigneeId: null,
    completed: false,
  };
  taskId;
  assigneeName: string = null;
  constructor(private backend: BackendService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getTask(id);
  }

  async getTask(id) {
    if (id) {
      const data = await this.backend.task(id).toPromise();
      if (data) {
        this.data = data;
        if (data.assigneeId) {
          this.getUserName(this.data.assigneeId);
        }
      }
    }
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
}
