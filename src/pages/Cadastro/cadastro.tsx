import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import sline from '../../assets/sline.png';

const Cadastro: React.FC = () => {
  return (
    <div className="container">


      <div className="container" >
        <a className="links" id="paracadastro"></a>
        <a className="links" id="paralogin"></a>


          <div id="cadastro">
            <form method="post" action="">
              <h1>Cadastro</h1>

              <p>
                <label htmlFor="nome_cad">Seu nome:</label>
                <input id="nome_cad" name="nome_cad" type="text" placeholder="nome" />
              </p>

              <p>
                <label htmlFor="email_cad">Seu e-mail:</label>
                <input id="email_cad" name="email_cad" type="email" placeholder="contato@htmlecsspro.com" />
              </p>

              <p>
                <label htmlFor="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" type="password" placeholder="ex. 1234" />
              </p>

              <p>
              <a href="/index"><button type="button" className="btn-1">Cadastrar</button></a>
              </p>

              <p className="link">
                Já tem conta?
              <a href="/">Ir para Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Cadastro;