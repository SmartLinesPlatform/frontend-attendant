import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import sline from '../../assets/sline.png';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  return (
    <div className="loginContainer" >
      <img src={logo} alt="smartlines" className="loginlogo" />

      <form method="post" action="">
        <div className="loginInput">
          <label htmlFor="nome_login">Seu email:</label>
          <input id="nome_login" name="nome_login" type="text" placeholder="ex. contato@htmlecsspro.com" />
        </div>

        <div className="loginInput">
          <label htmlFor="email_login">Sua senha:</label>
          <input id="email_login" name="email_login" type="password" placeholder="ex. senha" />
        </div>

        <div className="loginCheckbox">
          <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
          <label htmlFor="manterlogado">Manter-me logado</label>
        </div>
        <button type="button" className="btnLogin" onClick={() => history.push('/index')}>Logar</button>
      </form>
    </div>
  );
}

export default Login;
