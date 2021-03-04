<template>
  <div class="hello">
    <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" 
                        :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem"/>
    <Knob v-model="knobvalue"/>
    <Rating :modelValue="val1"/>
    <Password v-model="password" :name="passwordbox" v-on:input="passwordStrength(this)">
      <template #header>
        <h5>Pick a password</h5>
      </template>
      <template #content>
        <Knob v-model="passwordSecurity" :readonly="true" :name="passwordKnob" :key="passwordKnob" :valueTemplate="passwordKnobLabel" :valueColor="passwordKnobColor" max="33"/>
      </template>
      <template #footer>
          <Divider />
          <p class="suggestions">Suggestions</p>
          <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </template>
    </Password>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';
export default {
    setup () {
      const knobvalue = ref(40);
      const password = ref('');
      const passwordKnobLabel = ref('Weak');
      const passwordKnobColor = ref('red');
      const passwordSecurity = ref(0);
      const selectedCity = ref(null);
      const countries = ref([
                  {
                      name: 'Australia',
                      code: 'AU',
                      states: [
                          {
                              name: 'New South Wales',
                              cities: [
                                  {cname: 'Sydney', code: 'A-SY'},
                                  {cname: 'Newcastle', code: 'A-NE'},
                                  {cname: 'Wollongong', code: 'A-WO'}
                              ]
                          },
                          {
                              name: 'Queensland',
                              cities: [
                                  {cname: 'Brisbane', code: 'A-BR'},
                                  {cname: 'Townsville', code: 'A-TO'}
                              ]
                          },
                          
                      ]
                  },
                  {
                      name: 'Canada', 
                      code: 'CA',
                      states: [
                          {
                              name: 'Quebec',
                              cities: [
                                  {cname: 'Montreal', code: 'C-MO'},
                                  {cname: 'Quebec City', code: 'C-QU'}
                              ]
                          },
                          {
                              name: 'Ontario',
                              cities: [
                                  {cname: 'Ottawa', code: 'C-OT'},
                                  {cname: 'Toronto', code: 'C-TO'}
                              ]
                          },
                          
                      ]
                  },
                  {
                      name: 'United States',
                      code: 'US',
                      states: [
                          {
                              name: 'California',
                              cities: [
                                  {cname: 'Los Angeles', code: 'US-LA'},
                                  {cname: 'San Diego', code: 'US-SD'},
                                  {cname: 'San Francisco', code: 'US-SF'}
                              ]
                          },
                          {
                              name: 'Florida',
                              cities: [
                                  {cname: 'Jacksonville', code: 'US-JA'},
                                  {cname: 'Miami', code: 'US-MI'},
                                  {cname: 'Tampa', code: 'US-TA'},
                                  {cname: 'Orlando', code: 'US-OR'}
                              ]
                          },
                          {
                              name: 'Texas',
                              cities: [
                                  {cname: 'Austin', code: 'US-AU'},
                                  {cname: 'Dallas', code: 'US-DA'},
                                  {cname: 'Houston', code: 'US-HO'}
                              ]
                          }
                      ]
                  }
              ]);
          return {
            knobvalue,
            password,
            passwordKnobLabel,
            passwordKnobColor,
            passwordSecurity,
            selectedCity,
            countries
          }
      },
  methods: {
    passwordStrength() {
      let medium = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
      let strong = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
      console.log("test");
      
      if ( this.password.length > 0)
      {
        if (medium.exec(this.data.password))
        {
            this.passwordSecurity = 22;
            this.data.passwordKnobLabel = 'Medium';
            this.data.passwordKnobColor = 'yellow';
        }
        else if (strong.exec(this.data.password))
        {
            this.data.passwordSecurity = 33;
            this.data.passwordKnobLabel = 'Strong';
            this.data.passwordKnobColor = 'green';
        }
        else {
            this.data.passwordSecurity = 11;
            this.data.passwordKnobLabel = 'Weak';
            this.data.passwordKnobColor = 'red';
        }
      }
      else
      {
        this.data.passwordSecurity = 11;
        this.data.passwordKnobLabel = 'weak';
        this.data.passwordKnobColor = 'red';
      }
    }
  }
}
export class HelloWorld extends Vue {
  msg!: string
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.suggestions {
  text-align: left;
  font-size: .75rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
