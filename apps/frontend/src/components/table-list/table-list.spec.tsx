import { render } from '@testing-library/react';

import TableList from './table-list';
import { FuelTypeEnum } from '../fuel-type/fuel-type';
import { PurchaseDto } from '../../api';

describe('TableList', () => {
  it('should render successfully', () => {
    const mockData: PurchaseDto = {
      files: [],
      seller: {
        id: 'SellerId',
        contactPerson: 'John Doe',
        addressLine1: 'Address line 1',
        addressLine2: 'Address line 2',
        name: 'An Name',
      },
      id: 'PurchaseId',
      buyer: {
        id: 'BuyerId',
        name: 'Buyer Name',
        filecoinNodes: [],
      },
      certificate: {
        id: 'CertificateId',
        generatorName: '-',
        country: 'Poland',
        generatorId: 'GeneratorId',
        energySource: FuelTypeEnum.Solar,
        generationStart: '2020-11-01T00:00:00.000Z',
        generationEnd: '2021-06-01T23:59:59.999Z',
      },
      recsTransactions: [],
      recsSold: 0,
    };
    const { baseElement } = render(
      <TableList
        sellerId={mockData.seller.id}
        recsSold={mockData.recsSold}
        data={mockData.certificate}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
