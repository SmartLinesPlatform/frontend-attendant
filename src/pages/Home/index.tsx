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
                    <table>
                        <tr>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>34</td>
                            <td>35</td>
                            <td>36</td>
                            <td>37</td>
                        </tr>
                    </table>

                    <h3>Total de Pessoas na Fila: <p>15 pessoas</p></h3>
                    <h3>Tempo por atendimento: <p>3 min</p></h3>
                </div>
           </div>
       </div> 
    );
}

export default Home;