import Button from '../lib/Button.vue';
import Icon from "../lib/Icon.vue";
import 'prismjs';
import 'prismjs/themes/prism.css';
import { computed, ref } from 'vue';
const Prism = window.Prism;
export default {
    components: {
        Button,
        Icon
    },
    props: {
        component: Object
    },
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
        });
        const toggle = () => codeVisible.value = !codeVisible.value;
        const codeVisible = ref(false);
        return {
            Prism,
            html,
            codeVisible,
            toggle
        };
    }
};
