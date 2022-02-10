export default {
    name: 'ZDialog'
};
import { withDefaults } from 'vue';
const emit = defineEmits(['update:visible']);
const props = withDefaults(defineProps(), {
    visible: false,
    closeOnClickOverlay: true,
    ok: () => {
    },
    cancel: () => {
    }
});
const close = () => {
    emit('update:visible', false);
};
const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close();
    }
};
const onClickOk = () => {
    if (props.ok && props.ok() !== false) {
        close();
    }
};
const onClickCancel = () => {
    props.cancel && props.cancel();
    close();
};
