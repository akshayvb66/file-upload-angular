import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  
  _url;
  allowedMimeType;

  constructor(private http: HttpClient) { }
 
  pushFileToStorage(file: File) {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);

    this.allowedMimeType = ['application/pdf'];

    this._url="http://localhost:8080/post/"
    

    console.log("inside ")
 
    return this.http.post(this._url,formdata,{responseType: 'blob' as 'json' })
  

    //   reportProgress: true,
    //   responseType: 'text'
    // });
    // return this.http.request(req);
  }
 
  getFiles():Observable<any> {
    console.log("In service")
    this._url="http://localhost:8080/getallfiles/"
    return this.http.get(this._url);
  }
  
}