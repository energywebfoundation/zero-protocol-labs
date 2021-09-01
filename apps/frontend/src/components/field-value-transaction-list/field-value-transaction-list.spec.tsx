import { render } from '@testing-library/react';

import FieldValueTransactionList from './field-value-transaction-list';

describe('FieldValueTransactionList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FieldValueTransactionList transactionList={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
