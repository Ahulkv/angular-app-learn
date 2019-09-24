import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  private _title = "Courses";
  private _courses = ['Angular','React', 'Vue'];
  constructor(private CourseService: CourseService) { }

  ngOnInit() {
  }

  getCourses() :string[] {
    return this.CourseService.getCourses();
  }

  get courses() : string[] {
    return this._courses;
  }
  get title() : string {
    return this._title;
  }
 

}
