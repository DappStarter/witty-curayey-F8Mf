require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stomach rival sister connect grace sister army genius'; 
let testAccounts = [
"0x1366ecbe63f8d45cbff0aa01d779eeb0fe035a5130aef1db4f1f6722104758d7",
"0x4a7bc8d089f8bf380893295a59cc2127e60fcabf28e99b4a5ce4d0cd4b76eb46",
"0x6d57b1ff784ddc8eaaf2f03eec2ca661d83d409fcc28f2b20202a90eed44a072",
"0x3a23d4ef60d64d14bc96876ed89be44a2e6e9af9214c46b6ed52cbaabbce0e0b",
"0x7a6c60b11f150a6b7bd4cad3eed5603ab60e408c917e84e9839a159e9fb44666",
"0xc8f50b9267d008e6b8abda335088dad1b8087949358d712891d9470ec7578eb6",
"0xdbd4f7a0d0f3ae8aade57bcd6d24d68213d843351988427553095f2feb240c66",
"0x6ae58dd49b18b86c48cf44860fcfd3296d596ae8bbd6126a686ae79617bc563b",
"0x1b46fd5370d4be9eecc722769bdace5d90a1dfa870f8d1bce4f09ea7c24a8608",
"0xc39b77811b2f179257cf21e53561d83261a2ca88dd6ae0bf501042baf124b486"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


