export default {
    name: 'ZToast'
};
import { onMounted, computed } from 'vue';
const props = withDefaults(defineProps(), {
    visible: false,
    autoClose: 3,
    position: 'top',
    onClose: () => {
    }
});
const { position, autoClose, onClose } = props;
const emit = defineEmits(['update:visible']);
onMounted(() => {
    execAutoClose();
});
const toastClasses = computed(() => {
    return { [`position-${position}`]: true };
});
const execAutoClose = () => {
    if (autoClose) {
        setTimeout(() => {
            close();
        }, autoClose * 1000);
    }
};
const close = () => {
    emit('update:visible', false);
    onClose && onClose();
};
