const algosdk = require ('algosdk');

//function to check address details

const checkbalance = () => {
    const token = {
        "x-api-key" : process.env.API
    }

    const port = ""
    const Testserver = "https://testnet-algorand.api.purestake.io/ps2"

    let client = new algosdk.Algodv2(token,Testserver,port)

    //Account details
    let account = "DME3A6WYDX7A7K5636CXIIJP7NRVZKJNXBN2ZQFRGBNMHA43BVKNVD2OHA";

    (async () => {
        let account_info = (await
        client.accountInformation(account).do()
        )
        JSON.stringify(account_info.amount)
        console.log("Account Balance: " + JSON.stringify(account_info.amount))
        return [JSON.stringify(account_info.amount)]
        
    })().catch(e =>{
        console.log(e)
    })
}

module.exports = checkbalance