import { render } from '@testing-library/react';

import NotificationStrip from './notification-strip';

describe('NotificationStrip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationStrip />);
    expect(baseElement).toBeTruthy();
  });
});
