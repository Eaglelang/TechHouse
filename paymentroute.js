const router= require('route');
const express= require('express');
const payment = require('../model/schema');

route.post('pay-wallet', (req, res)=>{
    const pay= new pay ({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        phone: req.body.phone,
        amount: req.body.amount,
        amount: 1000,
        currency: req.body.currency,
        account_bank: req.body.account_bank,
        account_number: req.body.account_number,
        country: req.body.country,
        ip: req.body.ip
    })


//The endpoint for Nigerian based transaction

const charge_ng_acct = async () => {
    
    try {

        const payload = {
            "token": "flw-t1nf-f9b3bf384cd30d6fca42b6df9d27bd2f-xxxx",
            "currency": "NGN",
            "country": "NG",
            "amount": 2000,
            "email": "user@example.com",
            "first_name": "Yemi",
            "last_name": "Desola",
            "ip": "pstmn",
            "narration": "Sample tokenized charge",
            "tx_ref": "tokenized-c-001"
        }
        const response = await flw.Charge.ng(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


charge_ng_acct();

})