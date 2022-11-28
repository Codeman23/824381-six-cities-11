import { FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '../../types/auth';
import { AppRoute, CityType, TIMEOUT_PASSWORD_ERROR, RE } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/action';
import { loginAction } from '../../store/api-action';
import HeaderLogo from '../../components/header-logo/header-logo';
import './password-error.css';

function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: Auth) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setPasswordError(false);

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (passwordRef.current.value.length > 2 && RE.test(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        navigate(AppRoute.Main);
      }

      setPasswordError(true);
      setTimeout(
        () => (setPasswordError(false)),
        TIMEOUT_PASSWORD_ERROR,
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {isPasswordError ? <span className='password-error'>The input field must contain more than two character</span> : ''}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={()=>{dispatch(selectCity(CityType.Amsterdam));}} to={AppRoute.Main}>
                <span className="locations__item-link">Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
