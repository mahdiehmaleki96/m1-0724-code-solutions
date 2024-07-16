'--no-ignore';
'use strict';
const orderHistory = [
  {
    numberOfOrders: 1,
    orderPlacedDate: new Date('August 4, 2020'),
    totalAmount: 34,
    shipToLocation: 'JS Masher',
    orderNumber: 11439416898772232,
    deliveredDate: new Date('Aug 8, 2020'),
    items: [
      {
        itemPicture: 'item1picture.jpg',
        productName: 'Javascript for impatient programmers',
        productInformation: 'Rauschmayer, Dr. Axel',
        returnWindowClosedDate: new Date('Sep 7, 2020'),
        productPrice: 31.55,
      },
    ],
  },
  {
    numberOfOrders: 1,
    orderPlacedDate: new Date('July 19, 2020'),
    totalAmount: 44.53,
    shipToLocation: 'JS Masher',
    orderNumber: 11399842681280257,
    deliveredDate: new Date('July 20, 2020'),
    items: [
      {
        itemPicture: 'item1picture.jpg',
        productName: 'The Timeless Way of Building',
        productInformation: 'Alexander, Christopher',
        returnWindowClosedDate: new Date('Aug 19, 2020'),
        productPrice: 41.33,
      },
    ],
  },
  {
    numberOfOrders: 1,
    orderPlacedDate: new Date('July 4, 2020'),
    totalAmount: 17.22,
    shipToLocation: 'JS Masher',
    orderNumber: 114287555579059409,
    deliveredDate: new Date('Jul 7, 2020'),
    items: [
      {
        itemPicture: 'item1picture.jpg',
        productName:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U,PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindowClosedDate: new Date('Aug 5, 2020'),
        productPrice: 15.98,
      },
    ],
  },
  {
    numberOfOrders: 2,
    orderPlacedDate: new Date('July 3, 2020'),
    totalAmount: 138.93,
    shipToLocation: 'JS Masher',
    orderNumber: 11328831772648248,
    deliveredDate: new Date('Jul 5, 2020'),
    items: [
      {
        itemPicture: 'item1picture.jpg',
        productName:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindowClosedDate: new Date('Aug 4, 2020'),
        productPrice: 94.95,
      },
      {
        itemPicture: 'item2picture.jpg',
        productName: 'The Art of Sql',
        productInformation: 'Faroult, Stephane',
        returnWindowClosedDate: new Date('Aug 4, 2020'),
        productPrice: 33.99,
      },
    ],
  },
];
console.log('Order History:');
for (let i = 0; i < orderHistory.length; i++) {
  const order = orderHistory[i];
  console.log(`  Order Placed Date: ${order.orderPlacedDate}`);
  console.log(`  Total Amount: $${order.totalAmount}`);
  console.log(`  Ship To Location: ${order.shipToLocation}`);
  console.log(`  Order Number: #${order.orderNumber}`);
  console.log(`  Delivered Date: ${order.deliveredDate}`);
  console.log(`  Items:`);
  for (let j = 0; j < order.items.length; j++) {
    const item = order.items[j];
    console.log(`      Item Picture: ${item.itemPicture}`);
    console.log(`      Product Name: ${item.productName}`);
    if (item.productInformation) {
      console.log(`      Product Information: ${item.productInformation}`);
    }
    console.log(
      `      Return Window Closed Date: ${item.returnWindowClosedDate}`
    );
    console.log(`      Product Price: $${item.productPrice}`);
  }
}
