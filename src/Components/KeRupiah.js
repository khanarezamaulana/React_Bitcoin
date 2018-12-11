import React from 'react';
import axios from 'axios';

class KeRupiah extends React.Component {
    state = { rupiah: "", btc: "", infousd: "" }

    componentDidMount() {
        const url = "https://blockchain.info/ticker";
        axios.get(url).then(
            (x) => {
                this.setState({
                    infousd: x.data.USD.buy
                })
            }
        )
    }

    onHandleChange = (e) => {
        var val = e.target.value;
        this.setState({
            btctemp: val * this.state.infousd,
            btc: val,
        })
    }

    display() {
        if (this.state.btc) {
            return (
                <h2>BTC {this.state.btc} = Rp {Math.round(this.state.btctemp * 14000)} </h2>
            )
        }
        else {
            return (
                <h4 className="Currency pt-4">Silakan input nominal bitcoin</h4>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <h2 className="Currency">Konversi Bitcoin ke Rupiah</h2>
                    <h4 className="Currency">Kurs 1 USD = 14.000 IDR </h4>
                    <input type="number" className="form-control" placeholder="Ketik nominal bitcoin.." onChange={this.onHandleChange} />
                    {this.display()}
                </div>
            </React.Fragment>
        )
    }
}

export default KeRupiah;