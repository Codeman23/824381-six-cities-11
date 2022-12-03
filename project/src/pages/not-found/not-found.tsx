import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import './not-found.css';

function NotFound(): JSX.Element {
  return (
    <div className="page" style ={{ height: '100vh'}}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
        </div>
      </div>
      <div className="notFound">
        <h1><span className="notFound__title">404</span><br></br>Страница не найдена!</h1>
        <Link className="notFound__link" to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFound;
