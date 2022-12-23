/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

//dichiaro una variabile con un nuovo Vue
createApp({
    data(){
        return{
            guestList: [],
            guestName: '',
            isGuestInvited: false,
        }
    },

    methods:{
        checkIfGuestIsInvited(guestName){
            this.isGuestInvited=this.guestList.includes(guestName);
        }
    },

    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((result)=>{
                console.log(result.data.response);
                this.guestList.push(result.data.response);
            })
        }
    }
}).mout('#app')