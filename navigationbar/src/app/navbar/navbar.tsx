import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps { }


const NavData = [
  {
    title: "All",
    count: 12735,
  },
  {
    title: "Asset Failures",
    count: 47,
  },
  {
    title: "Asset Down",
    count: 1,
  },
  {
    title: "Unused Assets",
    count: 132,
  },
  {
    title: "Unassigned",
    count: 31,
  },
]

const StyledNavbar = styled.div`
    width: 100%;
    height: 110px;
    /* background-color: #edf3f8; */
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

  .box{
    border: 1px solid white;
    padding: 10px 25px;
    border-radius: 20px;
    background-color: white;
  }
  .box:hover {
    background-color: rgb(182,208,226)
  }

  .innerbox{
    margin-left: 10px;
    border: 1px solid rgb(240,240,240);
    padding: 0 5px;
    border-radius: 10px;
    background-color: rgb(240,240,240);
    color: #665b5b;
  }
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
              <div className='box'>
                <span> {item.title}</span>
                <span className='innerbox'> {item.count}</span>
              </div>
            </Content>
          )
        })}
      </NavItems>
    </StyledNavbar>
  );
}

export default Navbar;
