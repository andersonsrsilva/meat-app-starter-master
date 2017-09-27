class Order {
  constructor(public id: string,
              public address: string,
              public number: number,
              public optinalAddress: string,
              public paymentOption: string,
              public orderItems: OrderItem[] = []) {

  }
}

class OrderItem {
  constructor(public quantity: number,
              public menuId: string) {
  }
}

export {Order, OrderItem}
