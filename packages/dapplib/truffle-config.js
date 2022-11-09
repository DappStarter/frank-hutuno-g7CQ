require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone story deny spike punch hundred light army gate'; 
let testAccounts = [
"0xca454391f67e196cec776af74d08eb8352672590540bcd2b8f14f3bfaa4b3e66",
"0x26dac0a95d87343f419e4554fb2f76c85010be1690096b86c1c04df6ca18af5e",
"0x29df59916a59e5911edfeb1cb8834582a0bebfeaa0e61fc07166dc2344edfe68",
"0x5f29dc4a110e8ca653387efea13a302a38a2ed4429fdbb4849a52fba7ba23dd3",
"0xddabc4a0e8bf0d117f382ba4ab673fadac178e4418da027457ae9707686a98be",
"0x5963b8f07c73c34ab3977a84cc86a150b50410fe1745a227963614fab4018650",
"0xcff72b982d3def68167f605c36c2cee5370bfd6dd98529e531e9a403882c385b",
"0x44dac77404a4bdaa38e7e47fdcd7fa411737e012e454023e347d00572b75ee23",
"0x2b967b11a288f9bc6290694f830d5d7fc87f599ffe1b6513706e8df7edb914b4",
"0xd130a1bc6c444c0ed898bcf18dd3b9a560943de4e0f2fee10ee9af050e6c5ae8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

