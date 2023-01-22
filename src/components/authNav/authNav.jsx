import { NavItem, NavList } from 'components/appBar/appBar.styled';

export const AuthNow = () => {
    return (
      <NavList>
        <NavItem to="/register">Register</NavItem>
        <NavItem to="/login">Login</NavItem>
      </NavList>
    );
}