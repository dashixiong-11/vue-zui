import { ref } from 'vue';
export default {
    setup() {
        const bool = ref(false);
        const toggle = () => {
            bool.value = true;
        };
        const close = () => {
            console.log('toast close');
        };
        return { toggle, bool, close };
    }
};
