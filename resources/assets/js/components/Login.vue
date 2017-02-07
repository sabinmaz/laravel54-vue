<template>
    <div class="row">
        <div class="col-md-offset-4 col-md-4">
         <form id="test" @submit.prevent="onSubmitted">
            <md-card>
                <md-card-header>
                    <div class="md-title">
                        {{$lang.messages.LOGIN}}
                    </div>
                </md-card-header>
                <md-card-content>
                    <md-input-container>
                        <label for="username">{{$lang.messages.USERNAME}}</label>
                        <md-input type="text" name="username" id="username" v-model="username" placeholder=""></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label for="password">Password</label>
                        <md-input type="password" name="password" id="password"  v-model="password" placeholder=""></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label for="role">Role</label>
                        <md-select name="role" id="role" v-model="role">
                            <md-option value="1">Receiption</md-option>
                            <md-option value="2">Cashier</md-option>
                            <md-option value="3">Administrator</md-option>
                        </md-select>
                    </md-input-container>
                </md-card-content>
                <md-card-actions>
                    <md-button class="md-raised md-accent md-flex-offset-70" type="submit">Login</md-button>
                </md-card-actions>
            </md-card>
         </form>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                username: '',
                password: '',
                role: ''
            }
        },
        methods:{
            onSubmitted()
            {
                if(this.role==1)
                {
                   this.$parent.user=this.username;
                   this.$parent.role=this.role;
                   this.$router.push('/receiption/dashboard');




                }
//                this.pdf=new Pdf();
//                this.pdf.text(20,10,this.username);
//                this.pdf.text(20,20,this.password);
//                this.pdf.save('test.pdf');

                //axios.post('')
               // console.log(this.username)
               // console.log(this.username)
            }
        }
    }
</script>