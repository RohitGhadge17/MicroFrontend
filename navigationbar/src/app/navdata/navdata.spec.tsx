// import { render } from '@testing-library/react';

import Navdata from './navdata';
import { render } from '@testing-library/react';

describe('Navdata', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navdata />);
    expect(baseElement).toBeTruthy();
  });
});
