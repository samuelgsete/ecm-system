import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export abstract class HttpRequest {
    
    protected http = inject(HttpClient);
    protected localUrl: string = 'http://localhost:8090/api/v1/';
}