
Vue.component('box', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['box'],
    template: ' <div class="card"><div class="gray">{{box.baghalData}}</div><div class="green">{{box.vorodData}}</div><div class="red">{{box.khorojData}}</div><div class="in-card" >{{box.city}}</div></div>'
})
var app = new Vue({
    el: '#app',
    data: globObj ,
  methods: {
    refreshBox() {
        axios.get('http://api.parschapar.local/fetch_agent').then(response => (console.log(response.data)) )
    }
  }
});
app.refreshMessage();