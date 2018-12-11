import React from 'react';
import axios from 'axios';

class KeBitcoin extends React.Component {
    state = { rupiah: "", btc: "" }

    componentDidMount() {
        const url = `https://blockchain.info/tobtc?currency=USD&value=${this.state.rupiah}`;

    }

    onHandleChange = (e) => {
        var val = e.target.value;
        const url = `https://blockchain.info/tobtc?currency=USD&value=${val / 14000}`;
        axios.get(url).then(
            (x) => {
                this.setState({
                    rupiah: val,
                    btc: x.data
                })
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    display() {
        if (this.state.rupiah) {
            return (
                <h2>Rp {this.state.rupiah} = BTC {this.state.btc} </h2>
            )
        }
        else {
            return (
                <h4 className="Currency pt-4">Silakan input nominal rupiah</h4>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <h2 className="Currency">Konversi Rupiah ke Bitcoin</h2>
                    <h4 className="Currency">Kurs 1 USD = 14.000 IDR </h4>
                    <input type="number" className="form-control" placeholder="Ketik nominal rupiah.." onChange={this.onHandleChange} />
                    {this.display()}
                </div>
            </React.Fragment>
        )
    }
}

export default KeBitcoin;