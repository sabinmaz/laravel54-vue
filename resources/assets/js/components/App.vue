<template>
  <div class="container">
      <div class="header">
      <md-card>
          <md-card-header>
              <md-card-media>
                  <img src="images/leegi.png" alt="Logo">
              </md-card-media>
              <md-card-header-text >
                  <div class="md-title">{{$lang.messages.COMPANY_NAME}}</div>
                  <div class="md-subhead">{{$lang.messages.COMPANY_ADDRESS}}</div>
                  <div class="md-subhead">Phone: 143141274</div>


              </md-card-header-text>
                <md-card-content>
                    <div class="md-subhead">Pan. No: 1242341491</div>
                    <md-input-container>

                        <md-select name="language" id="language" v-model="language" v-on:change="changeLang" >
                            <md-option value="np">Nepali</md-option>
                            <md-option value="en">English</md-option>
                            <md-option value="fr">French</md-option>
                        </md-select>
                    </md-input-container>
                </md-card-content>

          </md-card-header>
      </md-card>
      </div>

      <nav class="navbar navbar-default" >
          <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#"><img src="images/itg-logo1.png" alt="ITGlance" width="100px"></a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav" v-if="role==1">
                      <li class="dropdown" >
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Create Account <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                              <li><router-link to="/receiption/create-account">User Account</router-link></li>
                              <li><router-link to="/receiption/create-saving">Saving Account</router-link></li>
                              <li><router-link to="/receiption/create-loan">Loan Account</router-link></li>
                              <li><router-link to="/receiption/create-share">Share Account</router-link></li>

                          </ul>
                      </li>

                  </ul>
              </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
      </nav>
      <router-view></router-view>
  </div>

</template>
<script>
   // this.$lang.setLang('en')
    export default {
        mounted() {
            //this.$lang.setLang('np');
            
//            if(this.role !=0 )
//            {
//                this.$router.push('/')
//            }
            console.log(this.$lang.getLang());
            console.log('Component mounted.')
        },
        data(){
            return {
                language: this.$lang.getLang(),
                user: 'sabin',
                role: ''
            }
        },
        methods:
            {
                changeLang()
                {
                    this.$lang.setLang(this.language);
                   // localStorage.setItem('language', this.language)

                }
            }
    }
</script>
