import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import sline from '../../assets/sline.png';

const Home: React.FC = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img className="logo-image" src={logo} alt="SmartLine"/>
                </header>
                <main>
                    <p>Atendendo no Momento</p>
                    <h1>--</h1>

                    <a className="btn01" href="">
                        <span>
                            Confirmar Atendimento
                        </span>
                    </a>
                    <br/>
                    <a className="btn02" href="">
                        <span>
                            <p>Chamar o próximo</p>
                        </span>
                    </a>
                    <br/>
                    <img className="sline-image" src={sline} alt="SmartLine"/>
                </main>
            </div>
        </div>
        
    );
}

export default Home;