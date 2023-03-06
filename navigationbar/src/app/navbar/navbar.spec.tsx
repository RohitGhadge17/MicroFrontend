import { render } from '@testing-library/react';

import Navbar from './navbar';
import "jest-styled-components";
import renderer from 'react-test-renderer';
import {StyledNavbar} from "./navbar"
import styled from 'styled-components';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });

it('StyledNavbar should render successfully',() => {
    // eslint-disable-next-line react/jsx-no-undef
    const tree = renderer.create(<StyledNavbar />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width','100%')
  })
});
