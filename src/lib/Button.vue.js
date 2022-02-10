export default {
    name: 'ZButton'
};
import { computed, withDefaults } from "vue";
const props = withDefaults(defineProps(), {
    theme: "button",
    size: "normal",
    disabled: false,
    border: false,
    loading: false
});
const { theme, size, border } = props;
const classes = computed(() => {
    return {
        [`z-theme-${theme}`]: theme,
        [`z-size-${size}`]: size,
        [`z-border`]: border
    };
});
