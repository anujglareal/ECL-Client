import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { Observable } from 'rxjs';
import { ProfileTestModel } from '../models/test-master/profile-test/profile-test.model'
@Injectable({
    providedIn: 'root',
})
export class ProfileTestService {
    private readonly routePrefix = 'profileTest';
    constructor(private readonly httpClient: HttpClient) { }

    getProfileDetails(): Observable<ProfileTestModel[]> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.get<ProfileTestModel[]>(apiUrl, { headers: headers })
    }

    addProfileDetails(profile: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.post<any>(apiUrl, profile, { headers: headers });
    }
}
