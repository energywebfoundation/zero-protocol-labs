import { PurchaseDto } from "../api";

export const mockPurchase: PurchaseDto = {
  id: '123',
  seller: {
    id: '1',
    name: 'John',
    addressLine1: 'Address 1',
    addressLine2: 'Address 2',
    contactPerson: 'James'
  },
  buyer: {
    id: '2',
    name: 'Jane',
    filecoinNodes: [{id: '3', buyerId: '5'}]
  },
  certificate: {
    id: '455454',
    generatorName: 'Generator 1',
    generatorId: '444',
    country: 'GB',
    energySource: 'Wind',
    generationStart: '20 Nov 2021',
    generationEnd: '23 Nov 2021'
  },
  recsSold: 20,
  recsTransactions: [{year: 2020, amount: 100}],
  filecoinNodes: [{
    id: '443',
    buyerId: '2'
  }],
  files: [],
}
