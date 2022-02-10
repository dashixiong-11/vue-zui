import { ref } from 'vue';
export default {
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {
            return false;
        };
        const f2 = () => { };
        return {
            x,
            toggle,
            f1,
            f2
        };
    }
};
