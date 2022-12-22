/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati.
https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (ritorna un array di items numeri, contenuti nel range min-max)
*/

const { createApp } = Vue

    createApp({
        data() {
            return {
                inputNumber : null,
                sum : 0,
            }
        },
        methods : {
            getSum(){
                if (this.inputNumber > 1 && this.inputNumber < 100) {
                    axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.inputNumber}`)
                    .then( (result) => {
                        const number = result.data.response;
                        for (let index = 0; index < number.length; index++) {
                            this.sum += number[index];
                        }
                        console.log(number)
                    })
                } else {
                    alert('Inserisci un numero nel range richiesto!!')
                }
            },
            resetAll(){
                this.sum = 0;
                this.inputNumber = null;
            }
        },
        mounted(){
        }
}).mount('#app')