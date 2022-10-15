const App = Vue.createApp({
    data() {
        return {
            alertText: 'Vuejs',
            keyDownText: '',
            keyDownTwoEventText:'',
            confirmedkeyDownTwoEventText:''
        }

    }, methods: {
        alert() {
            window.alert(this.alertText)
        },
        keyDownEvent(){
           this.keyDownText = event.target.value; 
        },
        keyDownEventTwo(){
            this.keyDownTwoEventText = event.target.value;
        },
        keyDownEventTwoConfirmed(){
            this.confirmedkeyDownTwoEventText =  this.keyDownTwoEventText;
        }
    }
});

App.mount('#assignment');

