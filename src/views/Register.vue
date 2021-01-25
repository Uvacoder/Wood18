<template>
    <v-app>
        <v-container>
            <v-row justify="center" class="mt-10">
                <v-col class="col-lg-4">
                <v-card>
                    <v-col>
                        <v-form ref="form">
                            <v-alert
                                :value="alert"
                                dense
                                text
                                type="success"
                                >
                                Register success!
                            </v-alert>
                            <!-- <v-alert
                                v-if="error"
                                dense
                                border="left"
                                type="warning"
                                >
                                {{error}}
                            </v-alert> -->
                            <v-card-title class="justify-center">
                                <h3>Register</h3>
                            </v-card-title>
                            <v-card-text>
                                <v-text-field
                                    label="Fullname"
                                    prepend-icon="mdi-account"
                                    v-model="woodworker.fullname"
                                    :rules="nameRules">
                                </v-text-field>
                                <v-text-field
                                    label="email@mail.com"
                                    prepend-icon="mdi-email"
                                    v-model="woodworker.email"
                                    :rules="emailRules">
                                </v-text-field>
                                <v-text-field
                                    label="Password"
                                    type="password"
                                    prepend-icon="mdi-lock"
                                    v-model="woodworker.password"
                                    :rules="passwordRules">
                                </v-text-field>
                            </v-card-text>
                            <v-card-actions class="justify-center">
                                <div v-if="woodworker.fullname === '' || woodworker.email === '' || woodworker.password === ''">
                                    <v-btn :disabled='isDisabled' @click="handleRegister" color="success">Submit</v-btn>
                                </div>
                                <div v-else>
                                    <v-btn @click="handleRegister" color="success">Submit</v-btn>
                                </div>
                            </v-card-actions>     
                        </v-form>
                    </v-col> 
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

export default {
    data: () => ({
        woodworker: {
            fullname: '',
            email: '',
            password: '',
        },
        error: '',
        alert: false,
        nameRules: [
            value => value != '' || 'Fullname harus diisi'
        ],
        emailRules: [
            value => value != '' || 'Email harus diisi',
            value => /.+@.+\..+/.test(value) || 'E-mail harus valid',
        ],
        passwordRules: [
            value => value != '' || 'Password harus diisi'
        ],
    }),
    computed: {
        isDisabled: function() {
            return !this.data
        }
    },
    methods: {
        handleRegister() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('register', {
                    fullname: this.woodworker.fullname,
                    email: this.woodworker.email,
                    password: this.woodworker.password
                })
            }
        }
    }
}
</script>