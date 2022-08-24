import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule} from 'vee-validate'
import { max, min, required } from '@vee-validate/rules'

export default {
    install(app){
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule()
    }
}