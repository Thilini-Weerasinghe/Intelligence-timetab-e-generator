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

  lectureId : number;
  l_name:string;
  email:string;
  phone : number;

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
    this.lecturer.lectureId=this.lectureId;
    this.lecturer.lecturer_name= this.l_name;
    this.lecturer.email=this.email;
    this.lecturer.telephone_no=this.phone;

    this.lecList.push(this.lecturer);
    console.log(this.lecList);
    this.lecturerService.addLecturer(this.lecList).subscribe((data)=> {
       console.log(data);
    
    }, err => {
      console.log(err);
    });
  }

}
