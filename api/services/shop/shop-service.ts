import { APIRequestContext } from '@playwright/test';
import { PlaceOrderRequest } from "../../../data/backend/shop/shop-model";
import { SHOP_ENDPOINTS } from "../../endpoints/shop/shop-endpoints";

export class ShopApiService {

    constructor(private request: APIRequestContext) { }

    async getListProducts() {
        return await this.request.get(SHOP_ENDPOINTS.GET_LIST_PRODUCTS);
    }

    async getProductId(id: number) {
        return await this.request.get(SHOP_ENDPOINTS.GET_PRODUCTS_WITH_ID(id));
    }

    async postPlaceOrder(body: PlaceOrderRequest) {
        return await this.request.post(SHOP_ENDPOINTS.POST_ORDER, { data: body });
    }

    async getOrderId(id: number) {
        return await this.request.get(SHOP_ENDPOINTS.GET_ORDER_WITH_ID(id));
    }

}
