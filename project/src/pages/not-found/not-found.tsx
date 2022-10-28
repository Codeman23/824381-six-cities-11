import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';

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
      <div style={{ textAlign: 'center' }}>
        <h1><span style={ {fontSize: '90px'}}>404</span><br></br>Страница не найдена!</h1>
        <Link style={{ color: 'blue' }} to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFound;
