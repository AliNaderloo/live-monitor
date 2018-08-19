
Vue.component('box', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['box'],
    template: ' <div class="card"><div class="gray">{{box.baghalData}}</div><div class="green">{{box.vorodData}}</div><div class="red">{{box.khorojData}}</div><div class="in-card" >{{box.city}}</div></div>'
})
var globObj = {} ;
globObj.lines = [];
var line1 ={
    items :  [
        {
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        }
    ]
};
var line2 ={
    items :  [
        {
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        }
    ]
};
var line3 ={
    items :  [
        {
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        },{
            "city" : "تهران",
            "baghalData" : 320 ,
            "vorodData" : 50 ,
            "khorojData" : 22
        }
    ]
};
globObj.lines.push(line1,line2,line3);
var app = new Vue({
    el: '#app',
    data: globObj
})