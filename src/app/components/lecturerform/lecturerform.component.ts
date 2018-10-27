import { Component, OnInit } from '@angular/core';
import {LecturerService} from '../../shared_service/lecturer.service';
import {Lecturer} from '../../lecturer';

@Component({
  selector: 'app-lecturerform',
  templateUrl: './lecturerform.component.html',
  styleUrls: ['./lecturerform.component.css']
})
export class LecturerformComponent implements OnInit {
  private lecturerList;


  constructor(private lecturerService: LecturerService) { }

  ngOnInit() {

    this.getLecturerList();
  }
  getLecturerList() {
    this.lecturerService.getLecturer().subscribe(data => {
      console.log(data);
      this.lecturerList = data;
    }, err => {
      console.log(err);
    });
  }

}
