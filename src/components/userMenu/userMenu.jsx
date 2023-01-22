import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUserName } from 'redux/auth/selectors';
import { LogOutButton, Salutation, UserMenuContainer, UserName } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);

  const handleClick = () => {
    return dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <Salutation>
        Welcome <UserName>{userName}</UserName>
      </Salutation>
      <LogOutButton type="button" onClick={handleClick}>
        Log Out
      </LogOutButton>
    </UserMenuContainer>
  );
};
