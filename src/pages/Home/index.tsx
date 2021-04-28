import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import sline from '../../assets/sline.png';

const Home: React.FC = () => {
    return (
       <div className="container">
           <div className="nav-bar">
               <img src={logo} alt="smartlines" className="logo"/>
               <h2>O próximo da Fila: <p>22</p></h2>
           </div>

           <div className="row">
                <div className="col-1">
                    <p className="text-1">Atendendo no Momento</p>
                    <h2 className="num-line">21</h2>
                    <button type="button" className="btn-1">Confirmar atendimento</button>
                    <button type="button" className="btn-2">Chamar o próximo</button>
                    <img src={sline} alt="smartlines" className="sline"/>
                </div>

                <div className="col-2">
                    <img src={arrow} alt="smartlines" className="arrow"/>
                </div>

                <div className="col-3">
                <table>
                        <tbody>
                            <tr>
                                <th>23</th>
                                <th>24</th>
                                <th>25</th>
                                <th>26</th>
                                <th>27</th>
                            </tr>
                            <tr>
                                <th>28</th>
                                <th>29</th>
                                <th>30</th>
                                <th>31</th>
                                <th>32</th>
                            </tr>
                            <tr>
                                <th>33</th>
                                <th>34</th>
                                <th>35</th>
                                <th>36</th>
                                <th>37</th>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div className="text-2">
                        <div className="subtext-1">
                            <h2>Total de Pessoas na Fila: <p className="num">15 pessoas</p></h2>
                        </div>
                        <div className="subtext-2">
                            <h2>Tempo por atendimento: <p className="num">3 min</p></h2>
                        </div>
                    </div>
                </div>
           </div>
       </div> 
    );
}

export default Home;