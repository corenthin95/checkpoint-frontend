import { Link } from "react-router-dom";
import newStyled from "@emotion/styled";

export const Header = () => {

  return (
    <HeaderWrapper className="header">
        <h1>Checkpoint : frontend</h1>
        <NavLink to="/">List of countries</NavLink>
    </HeaderWrapper>
  );
}

const HeaderWrapper = newStyled.header`
    background: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 20px;
`

const NavLink = newStyled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 8px;
    border-radius: 10px;
    transition: 300ms;
    
    :hover {
        background: rgba(255, 255, 255, 0.2);
    }
`



