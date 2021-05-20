import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import sline from '../../assets/sline.png';

const Login: React.FC = () => {
  return (
    <div className="logincontainer">

      <div className="logincontainer" >
      <img src={logo} alt="smartlines" className="loginlogo"/>
        <a className="links" id="paracadastro"></a>
        <a className="links" id="paralogin"></a>
        
        <div className="content">
          <div id="login">
            <form method="post" action="">
            
              <p>
                <label htmlFor="nome_login">Seu email:</label>
                <input id="nome_login" name="nome_login" type="text" placeholder="ex. contato@htmlecsspro.com" />
              </p>

              <p>
                <label htmlFor="email_login">Sua senha:</label>
                <input id="email_login" name="email_login" type="password" placeholder="ex. senha" />
              </p>

              <p>
                <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                <label htmlFor="manterlogado">Manter-me logado</label>
              </p>

              <p>
              <a href="/index"><button type="button" className="btn-1">Logar</button></a>
              </p>

              <p className="link">
                Ainda não tem conta?
              <a href="/cadastro">Cadastre-se</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;