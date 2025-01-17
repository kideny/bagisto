import $ from 'jquery';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import de from 'vee-validate/dist/locale/de';
import ar from 'vee-validate/dist/locale/ar';
import fa from 'vee-validate/dist/locale/fa';
import fr from 'vee-validate/dist/locale/fr';
import nl from 'vee-validate/dist/locale/nl';
import tr from 'vee-validate/dist/locale/tr';
import axios from 'axios';
import VueSlider from 'vue-slider-component';
import accounting from 'accounting';
import ImageSlider from './components/image-slider';
import GoTop from '@inotom/vue-go-top';
import 'lazysizes';

window.jQuery = window.$ = $;
window.Vue = Vue;
window.VeeValidate = VeeValidate;
window.axios = axios;

require("./bootstrap");
require("ez-plus/src/jquery.ez-plus.js");

Vue.use(VeeValidate, {
    dictionary: {
        ar: ar,
        de: de,
		fa: fa,
		fr: fr,
		nl: nl,
		tr: tr,
    },
    events: 'input|change|blur',
});

Vue.prototype.$http = axios

window.eventBus = new Vue();

Vue.component('image-slider', ImageSlider);
Vue.component('vue-slider', VueSlider);
Vue.component('proceed-to-checkout', require('./components/checkout/proceed-to-checkout').default);
Vue.component('wishlist-component-with-badge', require('./components/header-compare-with-badge').default);
Vue.component('go-top', require('@inotom/vue-go-top').default);

Vue.filter('currency', function (value, argument) {
    return accounting.formatMoney(value, argument);
})

$(document).ready(function () {
    const app = new Vue({
        el: "#app",

        data: {
            modalIds: {},

            show_loader: false,
            baseUrl: document.querySelector('meta[name="base-url"]').content
        },

        mounted: function () {
            this.addServerErrors();
            this.addFlashMessages();

            this.$validator.localize(document.documentElement.lang);
        },

        methods: {
            onSubmit: function (e) {
                this.toggleButtonDisable(true);

                if(typeof tinyMCE !== 'undefined')
                    tinyMCE.triggerSave();

                this.$validator.validateAll().then(result => {
                    if (result) {
                        e.target.submit();
                    } else {
                        this.toggleButtonDisable(false);

                        eventBus.$emit('onFormError')
                    }
                });
            },

            toggleButtonDisable (value) {
                var buttons = document.getElementsByTagName("button");

                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = value;
                }
            },

            addServerErrors: function (scope = null) {
                for (var key in serverErrors) {
                    var inputNames = [];
                    key.split('.').forEach(function(chunk, index) {
                        if(index) {
                            inputNames.push('[' + chunk + ']')
                        } else {
                            inputNames.push(chunk)
                        }
                    })

                    var inputName = inputNames.join('');

                    const field = this.$validator.fields.find({
                        name: inputName,
                        scope: scope
                    });
                    if (field) {
                        this.$validator.errors.add({
                            id: field.id,
                            field: inputName,
                            msg: serverErrors[key][0],
                            scope: scope
                        });
                    }
                }
            },

            addFlashMessages: function () {
                const flashes = this.$refs.flashes;

                flashMessages.forEach(function (flash) {
                    flashes.addFlash(flash);
                }, this);
            },

            responsiveHeader: function () { },

            showModal(id) {
                this.$set(this.modalIds, id, true);
            },

            showLoader() {
                this.show_loader = true;
            },

            hideLoader() {
                this.show_loader = false;
            }
        }
    });

    window.app = app;
});
