import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import  { Headers, Request, Http, Response, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class ApiService {
  headers: Headers = new Headers({
    'Content-type': 'applicaiton/json;charset=utf-8'
  });

  options: RequestOptions = new RequestOptions({headers: this.headers});

  api_url: string = 'http://localhost:3500';

  constructor(private http: Http) {

  }

  private getJson(resp: Response) {
      
      return resp.json();
  }

  private checkError(resp: Response): Response {
     if (resp.status >= 200 && resp.status < 300 ) {
         return resp;
     } else {
         const error = new Error(resp.statusText);
         error['response'] = resp;
         console.error(error);
         throw error;
     }
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, this.headers)
                    .map(this.checkError)
                    .catch(error => Observable.throw(error))
                    .map(this.getJson);
  }
  

  post(path: string, body: JSON): Observable<any> {
    /* return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), this.options)
                    .map(this.checkError)
                    .catch(error => Observable.throw(error))
                    .map(this.getJson);
    const requestOptions: RequestOptions = new RequestOptions({
          method: RequestMethod.Post,
          url: `${this.api_url}${path}`,
          headers : this.headers,
          body: {"title":"eat","value":"value","color": "white"}
    });
    return this.http.request(new Request(requestOptions))
                    .map(this.checkError)
                    .catch(error => Observable.throw(error))
                    .map(this.getJson);*/

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.api_url}${path}`,body,{headers:headers})
             .map(this.checkError)
             .catch(error => Observable.throw(error))
             .map(this.getJson)
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`,
      { headers: this.headers }
    )
    .map(this.checkError)
    .catch(err => Observable.throw(err))
    .map(this.getJson)
  }
}