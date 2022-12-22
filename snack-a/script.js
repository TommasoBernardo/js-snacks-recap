/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. 
https://flynn.boolean.careers/exercises/api/random/sentence (ritorna una frase)
*/

const { createApp } = Vue

    createApp({
        data() {
            return {
                messageInput : '',
                listMessage : [],
                replyMessage : '',
            }
        },
        methods : {
            addNewMessage(){
                if (this.messageInput != ''){
                    this.listMessage.push({message : this.messageInput, status: 'sent' });
                    this.setReply()            
                }
                this.clearmessageInput();
            },
            clearmessageInput(){
                this.messageInput = '';
            },
            setReply(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then( (result) => {
                        this.replyMessage = result.data.response;
                        this.listMessage.push({message : this.replyMessage, status : 'received'})
                })
            },
        },
        mounted(){
        }
}).mount('#app')