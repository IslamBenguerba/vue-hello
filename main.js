const { createApp } = Vue

createApp({
    data() {
        return {
            titleClass: 'titolo',
            message: 'Benvenuto',
            name: '',
            btnTitle: 'btn btn-primary'
        }
    },
    methods: {
        eseguiLogin() {
            //aggiungo il nome quando accedi
            this.message +=' '+this.name
            this.styleUser()

            this.logOut()

            document.querySelector('.btn-danger').addEventListener('click', function () {
                // ricavo il titolo trammite classe 
                document.querySelector('.text-primary').textContent ='Benvenuto'
                //rimuovo il bottone di logout
                document.getElementById('app').removeChild(this)
            })
            
        },
        styleUser() {
            this.titleClass = 'text-primary'
            this.btnTitle = 'btn btn-success'
            



        },
        logOut() {
            //cerca il div padre
            const app = document.getElementById('app')
            //creo un bottone
            let logOutbtn = document.createElement('button')
            logOutbtn.classList.add('btn', 'btn-danger')
            logOutbtn.textContent = 'Esci'
            //lo aggiungo al div
            app.append(logOutbtn)

        }
    }
}).mount('#app')

