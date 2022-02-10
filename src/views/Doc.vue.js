import Topnav from "../components/Topnav.vue";
import { ref, inject } from "vue";
export default {
    components: {
        Topnav
    },
    setup() {
        const menuVisible = inject("menuVisible"); // get
        const selectedItem = ref('doc');
        const onClick = value => {
            selectedItem.value = selectedItem.value === value ? '' : value;
        };
        return { menuVisible, selectedItem, onClick };
    },
};
