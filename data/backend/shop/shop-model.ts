export interface PlaceOrderRequest {
    items: [{
        productId: number,
        qty: number
    }
    ],
    customer: {
        name: string,
        email: string,
        address: string
    }
}
