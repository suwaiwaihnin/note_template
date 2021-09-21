<template>
    <Master>
        <div class="row">
            <div class="col-md-6 offset-3">
                <div class="card">
                    <div class="card-header bg-dark">
                        <h3 class="text-white">Login</h3>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="">Enter Email</label>
                                <input type="text" name='email' v-model="email" class="form-control" placeholder="Email....">
                            </div>
                            <div class="form-group">
                                <label for="">Enter Password</label>
                                <input type="password" name='password' v-model="password" class="form-control" placeholder="*****">
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from './Layout/Master.vue'
export default {
    name: 'Login',
    components: {Master}
}
</script>