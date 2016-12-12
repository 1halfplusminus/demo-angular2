import { NgModule} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/publishReplay';

@NgModule()
export class PayeHttpClient{

    private baseUrl: string;
    private token: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000/'
    }

    identifie(mail: string, motPasse: string): Observable<any>
    {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('identifiant', mail);
        urlSearchParams.append('mot_passe', motPasse);
        let body = urlSearchParams.toString();
        return this.http.post(this.url('utilisateur/identification'), body, options).map((res)=>{
            if(res.status != 200)
            {
                throw res
            }
            else{
                return res.json()['token_access']
            }
        });
    }
    moi(token:string)
    {
        let headers = new Headers();
        headers.append('Authorization',`Bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url('utilisateur/moi'),options);
    }
    bulletins(token:string)
    {
        let headers = new Headers();
        headers.append('Authorization',`Bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url('utilisateur/bulletins'),options);
    }
    urlBulletin(idBulletin: number,token: string)
    {
        return this.url(`bulletin/${idBulletin}?token_acces=${token}`);
    }
    conges(token:string)
    {
        let headers = new Headers();
        headers.append('Authorization',`Bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url('utilisateur/conges'),options);
    }
    private url(path:string)
    {
        return this.baseUrl + path;
    }
    demandeMotPasse(mail: string): Observable<any>
    {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('redirectUri', window.location.host + '/connexion/reset-mot-passe');
        urlSearchParams.append('email', mail);
        let body = urlSearchParams.toString();
        return this.http.post(this.url('motpasse/demander'), body, options).timeout(3000, new Error('timeout exceeded'));
    }
    modifieMotPasse(nvMdp: string, confMdp: string, token:string): Observable<any>
    {
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        headers.append('Authorization',`Bearer ${token}`);
        let options = new RequestOptions({headers: headers});
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('mot_passe', nvMdp);
        urlSearchParams.append('mot_passe_confirmation', confMdp);
        let body = urlSearchParams.toString();
        return this.http.post(this.url('motpasse/changer'), body, options);
    }
}
