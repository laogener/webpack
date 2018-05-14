var path = require("path"),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, "app");

/**
 * [exports 入口文件集]
 * @type {Array}
 * 不用更新的文件，不用解开注释，加快编译速度
 */
module.exports = [
    /*index*/
    // path.resolve(APP_PATH, 'mobile/js/index.js'),
    /*login*/
    // path.resolve(APP_PATH, 'mobile/js/login/login.js'),
    /*lottery*/
    // path.resolve(APP_PATH, 'mobile/js/lottery/lottery.js'),
    // path.resolve(APP_PATH, 'mobile/js/lottery/lotteryFootBall.js'),
    // path.resolve(APP_PATH, 'mobile/js/lottery/resultFootBall.js'),
    // path.resolve(APP_PATH, 'mobile/js/lottery/result.js'),
    // path.resolve(APP_PATH, 'mobile/js/lottery/betSuccess.js'),
    /*other*/
    // path.resolve(APP_PATH, 'mobile/js/other/download.js'),
    // path.resolve(APP_PATH, 'mobile/js/other/bankList.js'),
    //
    /*mall*/
    // path.resolve(APP_PATH, 'mobile/js/mall/buyMall.js'),
    // path.resolve(APP_PATH, 'mobile/js/mall/innerHtml.js'),
    // path.resolve(APP_PATH, 'mobile/js/mall/preferActive.js'),
    // path.resolve(APP_PATH, 'mobile/js/mall/resultList.js'),
    // path.resolve(APP_PATH, 'mobile/js/mall/resultDetailList.js'),
    // /*service*/
    // path.resolve(APP_PATH, 'mobile/js/service/service.js'),
    /*mine*/
    // path.resolve(APP_PATH, 'mobile/js/mine/mine.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/recharge.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/rechargeList.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/rechargeListDetail.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/rechargeMesEdit.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/rechargeOrder.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/withdrawals.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/orderList.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/orderListDetail.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/accountList.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/editPwd.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/appAbout.js'),
    // path.resolve(APP_PATH, 'mobile/js/mine/notices.js'),
    // /*football*/
    // path.resolve(APP_PATH, 'mobile/js/football/football.js'),
    // path.resolve(APP_PATH, 'mobile/js/football/match.js'),
    // path.resolve(APP_PATH, 'mobile/js/football/choose.js'),
    // /*order*/
    // path.resolve(APP_PATH, 'mobile/js/order/order.js'),
    // path.resolve(APP_PATH, 'mobile/js/order/details.js'),
    // path.resolve(APP_PATH, 'mobile/js/order/details1.js'),
    // path.resolve(APP_PATH, 'mobile/js/order/details2.js'),
    // path.resolve(APP_PATH, 'mobile/js/order/toorder.js'),
    // path.resolve(APP_PATH, 'mobile/js/order/bill.js'),
    // /*agent*/
    // path.resolve(APP_PATH, 'mobile/js/agent/achievement.js'),
    path.resolve(APP_PATH, 'mobile/js/agent/memberlist.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/statistics.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/extensionlink.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/addMember.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/agentApply.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/agentCenter.js'),
    // path.resolve(APP_PATH, 'mobile/js/agent/lotterylist.js'),

    /*plugins?*/
    // path.resolve(APP_PATH, 'mobile/js/components/vue/vue.min.js'),
    // path.resolve(APP_PATH, 'mobile/js/components/jquery/jquery.min.js'),
    // path.resolve(APP_PATH, 'mobile/js/components/flexible/flexible.js'),
];
