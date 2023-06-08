import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ProductInformationService} from "../../../services/commerce/product-information.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

declare const document: any;
declare const Liferay: any;

@Component({
    selector: 'commerce-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    animations: [
        trigger('cardAnimation', [
            state('hidden', style({ transform: 'scale(0)' })),
            state('visible', style({ transform: 'scale(1)' })),
            transition('hidden => visible', animate('300ms ease-in')),
        ])
    ]
})
export class ProductComponent implements OnInit {

    public productDetails: any;
    public isLoading = false;
    public isAddedToCompare: boolean = false;

    constructor(private productSrv: ProductInformationService) {
    }



    @Input('productId')
    productId: string = "";
    @Input('cpdId')
    cpdId: string = "";

    async loadProductDetails() {
        this.isLoading = true;
        this.productDetails = await this.productSrv.getProductInformationById(this.productId);
        this.AddedToCompare();
        this.isLoading = false;
    }

    public setCookie(name: string, value: string, days: number) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);

        const cookieValue = `${encodeURIComponent(name)}=${(value)};expires=${expirationDate.toUTCString()};path=/`;
        document.cookie = cookieValue;
    }

    public getCookie(name: string): string | null {
        const encodedName = encodeURIComponent(name) + '=';
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(encodedName)) {
                return decodeURIComponent(cookie.substring(encodedName.length));
            }
        }

        return null;
    }

    deleteCookie(name: string) {
        document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }

    public fixProductImage() {

        let url = new URL(this.productDetails["urlImage"]);
        return url.pathname;
    }

    public addToCompareTable() {
        let channelId = parseInt(Liferay.CommerceContext.commerceChannelId) + 1;
        let cookieName = `COMMERCE_COMPARE_cpDefinitionIds_${channelId}`;
        let cookie = this.getCookie(cookieName);
        if (cookie) {
            if (cookie.indexOf(this.cpdId) == -1) {
                let newCookieValue = cookie + `:${this.cpdId}`;
                this.setCookie(cookieName, newCookieValue, 1);
                this.isAddedToCompare = true;
            } else {
                let newCookieValue = cookie.replace(this.cpdId, "");
                this.setCookie(cookieName, newCookieValue, 1);
                this.isAddedToCompare = false;
            }

        } else {
            this.setCookie(cookieName, this.cpdId, 1);
        }
        this.reloadPage();
    }

    reloadPage() {
        document.location.reload()
    }
    getAddToCompareColor()
    {
      return this.isAddedToCompare?'red':'green';
    }
    AddedToCompare() {
        let channelId = parseInt(Liferay.CommerceContext.commerceChannelId) + 1;
        let cookieName = `COMMERCE_COMPARE_cpDefinitionIds_${channelId}`;
        let cookie = this.getCookie(cookieName);
        this.isAddedToCompare = (cookie && cookie.indexOf(this.cpdId) != -1)?true:false;
    }

  ngOnInit(): void {
    this.loadProductDetails();
    this.showComponent();
  }
  animationState: 'hidden' | 'visible' = 'hidden';
  showComponent()
  {
      setTimeout(() => {
          this.animationState = 'visible';
      }, 350 );
  }

}
