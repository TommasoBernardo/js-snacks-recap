const{createApp} = Vue

createApp({
    data(){
        return{
            Input:'',
            listMessage: [],
            messageR: '',
        }
    },
    methods: {
        addNewMessage(){
            if(this.Input != ''){
                this.listMessage.push({message : this.Input, status : 'sent'})
                this.setReply()
            }
            this.clearInput();
        },
        clearInput(){
            this.Input='';
        },
        setReply(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((result)=>{
                this.messageR= result.data.response;
                this.listMessage.push({message: this.messageR, status: 'received'})
            })
        }
    },
    mounted(){

    }
}).mount('#app')