import styled from 'styled-components';
import NavData from '../navdata/navdata';
/* eslint-disable-next-line */
export interface NavbarProps { }

const StyledNavbar = styled.div`
    width: 100%;
    height: 110px;
    background-color: rgb(245,245,245);;
    color: #726466;
    font-size: 20px;
    padding: 0.5rem;

`;

const NavItems = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`
const Box = styled.div`
    border: 1px solid white;
    padding: 10px 25px;
    border-radius: 20px;
    background-color: white;

    &:hover {
      background-color: rgb(182,208,226)
    }
`
const InnerBox = styled.span`
    margin-left: 10px;
    border: 1px solid rgb(240,240,240);
    padding: 0 5px;
    border-radius: 10px;
    background-color: rgb(240,240,240);
    color: #665b5b;
`
const Content = styled.div`
    cursor: pointer;
`

export function Navbar(props: NavbarProps) {
  return (
    <StyledNavbar>
      <NavItems>
        {NavData.map((item, index) => {
          return (
            <Content key={index}>
              <Box>
                <span>{item.icon}</span>
                <span> {item.title}</span>
                <InnerBox> {item.count}</InnerBox>
              </Box>
            </Content>
          )
        })}
      </NavItems>
    </StyledNavbar>
  );
}

export default Navbar;
