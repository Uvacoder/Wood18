<template>
    <v-container>
        <v-row class="justify-center">
            <v-card tile elevation="1" class="mt-10">
                <v-col>
                <v-card-title class="justify-center"> 
                    <h3>Login</h3>
                </v-card-title>
                <v-form>
                    <!-- <v-alert
                        v-if="error"
                        dense
                        border="left"
                        type="warning"
                        >
                        {{error}}
                    </v-alert> -->
                    <v-card-text>
                        <v-text-field
                        label="email@mail.com"
                        prepend-icon="mdi-account-circle"
                        v-model="email">
                        </v-text-field>
                        <v-text-field
                        label="Password"
                        type="password"
                        prepend-icon="mdi-lock"
                        v-model="password">
                        </v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="success" @click="handleLogin">Login</v-btn>
                    </v-card-actions>
                </v-form>
                </v-col>
                <v-col>
                    Belum punya akun?
                    <router-link to="/register">Register</router-link>
                </v-col>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        email: '',
        password: '',
        error: ''
    }),
    methods: {
        handleLogin() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>