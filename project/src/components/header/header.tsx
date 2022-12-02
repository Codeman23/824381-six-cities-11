import { memo } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserData } from '../../services/user-data';
import HeaderLogo from '../header-logo/header-logo';

type HeaderProps = {
  count: number;
}

function Header({ count }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = getUserData();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = () => authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth() ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userData.avatarUrl})`}}></div>
                  {
                    isAuth() ?
                      <>
                        <span className="header__user-name user__name">{userData.name}</span>
                        <span className="header__favorite-count">{count !== undefined ? count : ''}</span>
                      </> :
                      <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {
                isAuth() ?
                  <li className="header__nav-item">
                    <Link className="header__nav-link" onClick={()=>{dispatch(logoutAction());}} to={AppRoute.Login}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li> : ''
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
