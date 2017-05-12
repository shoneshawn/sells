import Vue from 'vue'
//引入一个vue模块,叫Vue
var myHeaderChild={
    template:'<p>child</p>'
}
var myHeader = {
    template: '<div><my-header-child></my-header-child>></div>',
    components: {
        'my-header-child': myHeaderChild
    }
}
new Vue({
    el: '#app',
    data: {
        test: 'test'
    },
    components: {
        'my-header': myHeader
    }
});





Vue.component('my-header', {
    template: '<div></div>'


})

import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        hehe: 'haha',
        haha: 'hehe'
    },
    components: {
        'my-header': myHeader
    }

})

Vue.component('my-header', {
    template: '<div>{{}}</div>',
    data: {
        message: 'hahahaha'
    }
});

