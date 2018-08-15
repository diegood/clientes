<template>
    <div>
        <h3>Ingresar</h3>
        <label for="email"></label>
        <input type="text" name="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="login">Ingresar</button>
        <br>
        <span> <router-link to="/registrar"> crear nueva cuenta</router-link></span>
    </div>
</template>
<script>
/* eslint-disable */
    import firebase from 'firebase'
    let self = this
    export default {
        name: 'login',
        data: function(){
            return {
                email:'',
                password:''
            };
        },
        methods:{
            login: function(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        self.$router.replace('/HelloWorld')
                    },
                    function(err){
                        alert('Error. '+ err.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>

