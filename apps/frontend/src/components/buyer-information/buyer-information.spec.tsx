import { render } from '@testing-library/react';

import BuyerInformation from './buyer-information';

describe('BuyerInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuyerInformation />);
    expect(baseElement).toBeTruthy();
  });
});
