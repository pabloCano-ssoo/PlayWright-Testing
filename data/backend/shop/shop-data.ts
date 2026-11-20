import {
    PlaceOrderRequest,
} from './shop-model';

export const PLACE_ORDER_DATA: PlaceOrderRequest = {
    items: [{
        productId: 1,
        qty: 2
    }],
    customer: {
        name: "Jane Tester",
        email: "jane@example.test",
        address: "1 Test Street"
    }
};
