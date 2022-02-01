import { Component, OnInit, Input } from "@angular/core";
import { BackendService, Task } from "src/app/backend.service";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
  users = [];

  @Input() onCancel;

  initalValues = {
    assigneeId: null,
    description: null,
    id: null,
    completed: false,
  };

  data: Task = { ...this.initalValues };
  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this.backend.users().subscribe((data) => {
      this.users = data;
    });
  }

  async save() {
    const res = await this.backend.newTask(this.data).toPromise();
    if (res) {
      alert("New task added");
      this.data = this.initalValues;
      this.onCancel();
    }
  }
}
