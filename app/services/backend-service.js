var Kinvey = require('kinvey-nativescript-sdk');

Kinvey.init({
//     apiHostname: 'CUSTDEP_HOST',
//     micHostname: 'CUSTDEP_MIC_HOST',
     appKey: 'kid_Bk1FSBkRB',
     appSecret: '1de8871f31674662b0684effaf4af10b'
});
//
export default class BackendService {

    working() {
        return Kinvey.DataStore.collection('Inventory').find();
        //return !!Kinvey.Inventory.all();
    }
}
