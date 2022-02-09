import Icon from "../lib/Icon.vue";
import { inject } from "vue";
export default {
    components: { Icon },
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject("menuVisible"); // get
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value;
        };
        return {
            toggleMenu
        };
    },
};
