import { render } from '@testing-library/react';

import BuyerSellerInformation from './buyer-seller-information';
import { BuyerDto, SellerDto } from '../../api';

describe('BuyerSellerInformation', () => {
  it('should render successfully', () => {
    const buyerMock: BuyerDto = {
      filecoinNodes: [],
      id: 'exampleId-buyer',
      name: 'John Buyer',
    };
    const sellerMock: SellerDto = {
      contactPerson: 'John Contact',
      name: 'John Seler',
      addressLine1: 'Address line 1',
      addressLine2: 'Address line 2',
      id: 'exampleId-seller',
    };
    const { baseElement } = render(
      <BuyerSellerInformation
        recsTransactions={[]}
        seller={sellerMock}
        buyer={buyerMock}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});