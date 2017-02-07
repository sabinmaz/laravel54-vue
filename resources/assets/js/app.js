
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);
//Vue.use(Pdf);
Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);
Vue.component('app', require('./components/App.vue'));

//Vue.component('Example', require('./components/Example.vue'));
const Login = (resolve) => require(['./components/Login.vue'], resolve);

// receiption routes //
const ReceiptionDash=(resolve)=>require(['./components/receiption/dashboard.vue'],resolve);
const ReceiptionCreateAccount=(resolve)=>require(['./components/receiption/member.vue'],resolve);
const ReceiptionCreateSavingAccount=(resolve)=>require(['./components/receiption/dashboard.vue'],resolve);
const ReceiptionCreateLoanAccount=(resolve)=>require(['./components/receiption/dashboard.vue'],resolve);
const ReceiptionCreateShareAccount=(resolve)=>require(['./components/receiption/dashboard.vue'],resolve);
var router = new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/receiption/dashboard', component: ReceiptionDash },
        { path: '/receiption/create-account', component: ReceiptionCreateAccount },
        { path: '/receiption/create-saving',component:ReceiptionCreateSavingAccount},
        { path: '/receiption/create-loan',component:ReceiptionCreateLoanAccount},
        { path: '/receiption/create-share',component:ReceiptionCreateShareAccount}
    ]
});
const app = new Vue({
    el: '#app',
    router: router,
});
