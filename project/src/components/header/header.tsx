import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, APIRoute } from '../../const';
import { Offer } from '../../types/offer';
import { api } from '../../store';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserData } from '../../services/user-data';

import HeaderLogo from '../header-logo/header-logo';

function Header(): JSX.Element {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const dispatch = useAppDispatch();
  const userData = getUserData();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const getFavoriteOffers = async () => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    setFavoriteCount(data.length);
  };

  const isAuth = () => authorizationStatus === AuthorizationStatus.Auth;

  if(isAuth()) {
    getFavoriteOffers();
  }

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
                        <span className="header__favorite-count">{favoriteCount}</span>
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

export default Header;
