
   (async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log("balance", web3.utils.fromWei(balance, "ether"));
  })();
