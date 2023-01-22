import { NavItem, NavList } from 'components/appBar/appBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  
  return (
    <NavList>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavList>
  );
};
