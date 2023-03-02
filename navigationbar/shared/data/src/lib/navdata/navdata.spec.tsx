import { render } from '@testing-library/react';

import Navdata from './navdata';

describe('Navdata', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navdata />);
    expect(baseElement).toBeTruthy();
  });
});
