import React from 'react'
import MyAlgoConnect from "@randlabs/myalgo-connect";
import { useState } from 'react'
import './Wallet.css'

export default function Wallet() {

    const [address, setAddress] = useState(null);
    // const [products, setProducts] = useState([]);


  const connectWallet = async () => {
    new MyAlgoConnect().connect()
        .then(accounts => {
            const _account = accounts['DME3A6WYDX7A7K5636CXIIJP7NRVZKJNXBN2ZQFRGBNMHA43BVKNVD2OHA'];
            setAddress(accounts);
        }).catch(error => {
        console.log('Could not connect to MyAlgo wallet');
        console.error(error);
    })
};
  return (
    <div className='button'>
        <button onClick={connectWallet}>CONNECT WALLET</button>
    </div>
  )
}
