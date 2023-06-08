import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

declare const Liferay : any
@Injectable({
  providedIn: 'root'
})
export class ProductInformationService {

  public get ChannelId()
  {
    return Liferay.CommerceContext.commerceChannelId;
  }
  public get AuthToken()
  {
    return Liferay.authToken;
  }
  constructor(private http:HttpClient) { }

  public getProductInformationById(productId:any)
  {
    let prom = new Promise((resolve, reject)=>{
      this.http.get(`/o/headless-commerce-delivery-catalog/v1.0/channels/${this.ChannelId}/products/${productId}?p_auth=${this.AuthToken}`).subscribe((result)=>{
        resolve(result);
      }, error => {
        reject(error);
      });
    });
    return prom;
  }

}
