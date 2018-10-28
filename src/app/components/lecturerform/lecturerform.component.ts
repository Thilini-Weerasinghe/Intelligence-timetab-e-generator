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
  private lecturer = new Lecturer();
  private lecList:Lecturer[]=[];

  lec_id : number;
  lec_name:string;
  email:string;
  tel_no : number;

  constructor(private lecturerService: LecturerService) { }

  ngOnInit() {

    this.getLecturerList();
  }
  getLecturerList() {
    this.lecturerService.getLecturer().subscribe(data => {
      console.log(data);
      this.lecturerList=data;
    }, err => {
      console.log(err);
    });
  }

  saveLecturer(){
    this.lecturer.l_name = this.lec_name;
    this.lecturer.email=this.email;
    this.lecturer.Lec_id=this.lec_id;
    this.lecturer.tel_no=this.tel_no;

    this.lecList.push(this.lecturer);
    console.log(this.lecList);
    this.lecturerService.addLecturer(this.lecList).subscribe(data=> {
       console.log(data);
    
    }, err => {
      console.log(err);
    });
  }

}
