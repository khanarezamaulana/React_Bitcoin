import React from 'react';
import { Route, Link } from 'react-router-dom';
import Currency from './Components/Currency';
import KeBitcoin from './Components/KeBitcoin';
import KeRupiah from './Components/KeRupiah';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container text-center p-4">
                    <img className="img pb-4" src="img/BlockChain logo.png" style={{ width: "800px" }} />
                    <ul class="nav nav-tabs">
                        <li class="nav-item mx-auto">
                        <Link to="/bitcoin_today" className="btn btn-primary">Bitcoin Hari Ini</Link></li>
                        <li class="nav-item mx-auto">
                        <Link to="/ke_bitcoin" className="btn btn-primary">Rupiah ke Bitcoin</Link></li>
                        <li class="nav-item mx-auto">
                        <Link to="/ke_rupiah" className="btn btn-primary">Bitcoin ke Rupiah</Link></li>
                    </ul>
                </div>

                <div id="route">
                    <Route exact path="/" component={"Home"}></Route>
                    <Route path="/bitcoin_today" component={Currency}></Route>
                    <Route path="/ke_rupiah" component={KeRupiah}></Route>
                    <Route path="/ke_bitcoin" component={KeBitcoin}></Route>
                </div>
            </React.Fragment>
        )
    }
}


export default App;