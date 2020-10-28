import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Questions } from 'src/data/questions';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class Service{
    private url :string = '/localhost:3000/';

    constructor(private http:HttpClient){

        getValues():Observable<Questions[]>{
            return this.http.get<Questions[]>(this.url);
        }

    }
}
