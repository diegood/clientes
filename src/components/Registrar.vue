<template>
    <div>
        <h3>Crear una nueva Cuenta</h3>
        <label for="email">email</label>
        <input type="email" name="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="registrar">Registrar</button>
        <br>
        <span>Volver al <router-link to="login">login</router-link> </span>
    </div>
</template>
<script>
/* eslint-disable */
    import firebase from 'firebase/app'
    import 'firebase/auth'
    export default {
        name: "registrar",
        data: () => {
            return {
                email:'',
                password:''
            };
        },
        methods: {
            registrar : function(){
               firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('cuenta Creada');
                    },
                    function(err){
                        alert('Error. '+ err.message);
                    }
                );
            }
        }
    };
</script>

