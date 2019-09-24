import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    private _courses = ['Angular','React', 'Vue'];

    getCourses() : string[] {
        return this._courses;
    }

}