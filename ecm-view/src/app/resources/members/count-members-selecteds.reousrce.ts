import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CountMembersSelectedsResource {
    
    private http = inject(HttpClient);
    private url: string = 'http://localhost:8090/api/v1/members/count/selecteds';

    run(): Observable<number> {
        return this.http.get<number>(this.url);
    }
}