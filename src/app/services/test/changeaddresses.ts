
    import {Injectable, OnInit} from '@angular/core';
    import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
    import {map} from "rxjs/operators";
    
    declare const Liferay: any;
    @Injectable({
        providedIn: 'root'
    })
    export class changeaddressesService {
        constructor(private http:HttpClient) { }
        
    public deleteByExternalReferenceCode (externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/c/changeaddresses/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getByExternalReferenceCode (externalReferenceCode:any,fields:any=null,nestedFields:any=null,restrictFields:any=null)
    {
    
        let queryParams = new HttpParams();
       if(fields)
          queryParams = queryParams.append('fields', fields);
       
       if(nestedFields)
          queryParams = queryParams.append('nestedFields', nestedFields);
       
       if(restrictFields)
          queryParams = queryParams.append('restrictFields', restrictFields);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/c/changeaddresses/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    
//To Do Create Handler for method type PATCH

    public putByExternalReferenceCode (externalReferenceCode:any,ChangeAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/c/changeaddresses/by-external-reference-code/${externalReferenceCode}`,ChangeAddress,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getChangeAddressesPage (aggregationTerms:any=null,fields:any=null,flatten:any=null,nestedFields:any=null,restrictFields:any=null,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(aggregationTerms)
          queryParams = queryParams.append('aggregationTerms', aggregationTerms);
       
       if(fields)
          queryParams = queryParams.append('fields', fields);
       
       if(flatten)
          queryParams = queryParams.append('flatten', flatten);
       
       if(nestedFields)
          queryParams = queryParams.append('nestedFields', nestedFields);
       
       if(restrictFields)
          queryParams = queryParams.append('restrictFields', restrictFields);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/c/changeaddresses/`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postChangeAddress (ChangeAddress:any)
    {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/c/changeaddresses/`,ChangeAddress,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteChangeAddressBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyobject
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/c/changeaddresses/batch`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postChangeAddressBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/c/changeaddresses/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putChangeAddressBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/c/changeaddresses/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postChangeAddressesPageExportBatch (filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/c/changeaddresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOpenAPI (type:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/c/changeaddresses/openapi.${type}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteChangeAddress (changeAddressId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/c/changeaddresses/${changeAddressId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getChangeAddress (changeAddressId:any,fields:any=null,nestedFields:any=null,restrictFields:any=null)
    {
    
        let queryParams = new HttpParams();
       if(fields)
          queryParams = queryParams.append('fields', fields);
       
       if(nestedFields)
          queryParams = queryParams.append('nestedFields', nestedFields);
       
       if(restrictFields)
          queryParams = queryParams.append('restrictFields', restrictFields);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/c/changeaddresses/${changeAddressId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    
//To Do Create Handler for method type PATCH

    public putChangeAddress (changeAddressId:any,ChangeAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/c/changeaddresses/${changeAddressId}`,ChangeAddress,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getChangeAddressPermissionsPage (changeAddressId:any,fields:any=null,nestedFields:any=null,restrictFields:any=null,roleNames:any=null)
    {
    
        let queryParams = new HttpParams();
       if(fields)
          queryParams = queryParams.append('fields', fields);
       
       if(nestedFields)
          queryParams = queryParams.append('nestedFields', nestedFields);
       
       if(restrictFields)
          queryParams = queryParams.append('restrictFields', restrictFields);
       
       if(roleNames)
          queryParams = queryParams.append('roleNames', roleNames);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/c/changeaddresses/${changeAddressId}/permissions`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putChangeAddressPermissionsPage (changeAddressId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/c/changeaddresses/${changeAddressId}/permissions`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putChangeAddressTesting (changeAddressId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/c/changeaddresses/${changeAddressId}/object-actions/testing`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }

    
    }
