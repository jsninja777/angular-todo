import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../backend.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  tasks = this.backend.tasks();
  users = this.backend.users();

  modalReference = null;

  constructor(
    private backend: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  createTask(content) {
    this.modalReference = this.modalService.open(content);
  }

  onCancel = () => {
    this.modalReference.close();
  };
}
