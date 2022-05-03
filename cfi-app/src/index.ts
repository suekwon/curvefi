import curve from "@curvefi/api";

console.log("Curve!!!");
//async-wait

(async () => {
    // await curve.init('JsonRpc', {url: 'http://localhost:7545/', privateKey: '0x2e4734aa809ccada53ca5922e9c64fc292600dca06778bd511f340e438973d10'}, { gasPrice: 0, maxFeePerGas: 0, maxPriorityFeePerGas: 0, chainId: 1 });
    // OR
    // await curve.init('JsonRpc', { url: 'http://localhost:7545/', privateKey: 'd1b158249c44f7e890d42129225f44fe883be50194641da1aa12c9d903e7ff1d' }, { gasPrice: 0, maxFeePerGas: 0, maxPriorityFeePerGas: 0, chainId: 1 });
    // 1. 초기 설정 : Infura 계정과 연결
    await curve.init('Infura', { network: "homestead", apiKey: "625bd8bd9b47415e8c0c77ab1ff1cba0" }, { chainId: 1 });
    // 2. Curve의 현재 pool list를 가져온다.
    console.log(curve.getPoolList());
    // 3. stats pool의 파라미터, 유동성, 볼륨
    const aave = new curve.Pool('aave');
    const threepool = new curve.Pool('3pool');

    //    console.log(await aave.stats.getParameters());
    //    console.log(await aave.stats.getPoolBalances());
    //    console.log(await aave.stats.getTotalLiquidity());
    //    console.log(await aave.stats.getVolume());
    //    console.log(await aave.stats.getBaseApy());
    console.log(await aave.allCoinBalances());
    console.log(aave.underlyingCoins); //해당 풀의 기초자산을 조회
    console.log(aave.coins); //해당 풀 조회
    console.log(await aave.balances());

    //4. Factory Pool list 가져오기
    await curve.fetchFactoryPools();
    await curve.fetchCryptoFactoryPools();
    const factoryPools = curve.getFactoryPoolList();
    const cryptoFactoryPools = curve.getCryptoFactoryPoolList();
    console.log(factoryPools);
    console.log(cryptoFactoryPools);
})()

console.log("Before paging");
//// var express = require('express');
// var app = express();
// app.use(express.static('src'));
// app.use(express.static('../ballot-contract/build/contracts'));
// app.get('/', function (req, res) {
//     res.render('index.html');
// });
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

export { };