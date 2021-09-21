<template>
    <Master>
        <div class="row">
            <div class="col-md-6 offset-3">
                <div class="card">
                    <div class="card-header bg-dark">
                        <h3 class="text-white">Register</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent='register'>
                            <div class="form-group">
                                <label for="">Enter Name</label>
                                <input type="text" name='name' v-model="name" class="form-control" placeholder="Name....">
                            </div>
                            <div class="form-group">
                                <label for="">Enter Email</label>
                                <input type="text" name='email' v-model="email" class="form-control" placeholder="Email....">
                            </div>
                            <div class="form-group">
                                <label for="">Enter Password</label>
                                <input type="password" name='password' v-model="password" class="form-control" placeholder="*****">
                            </div>
                            <div class="form-group">
                                <label for="">Choose Image</label>
                                <input type="file" name='image' @change="ChooseImage" class="form-control" >
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from './Layout/Master.vue';
import axios from 'axios';
import {api_url} from '../config';
export default {
    name: 'Login',
    components: {Master},
    data(){
        return{
            name:"",
            email:"",
            password:"",
            image:'',
            error:{}
        }
    },
    methods:{
        ChooseImage(e){
            this.image = e.target.files[0];
        },
        async register(){
            const formData = new FormData();
            formData.append('name',this.name);
            formData.append('email',this.email);
            formData.append('password',this.password);
            formData.append('image',this.image);
            const res = await axios.post(`${api_url}/register`);
            console.log(res.data);
        }
    }
}
</script>