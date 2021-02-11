import { web3, sf } from '../services/web3';

// myaddress -> user's address, recieverAddress -> shop address.
// This will create a subscription flow per month. (Amount per sec.)
export const userPurchaseSubscription = async (myAddress, recieverAddress, amount) => {
    var dai = "0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7"
    var usdc = "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2"
    
    function calcSec(inDollar) {
        return (inDollar * 1e18) / (3600 * 24 * 30)
    }

    const user = sf.user({
      address: myAddress,
      token: dai
    });
  
    await user.flow({
      recipient: recieverAddress,
      flowRate: calcSec(amount)
    });
    
    const details = await carol.details();
    console.log(details);

    return details
};
