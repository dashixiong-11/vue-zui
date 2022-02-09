import { createApp, h } from "vue";
import Toast from "./Toast.vue";
export const showToast = (options) => {
    const { message, onClose, position, autoClose } = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const app = createApp({
        render() {
            return h(Toast, {
                visible: true,
                "onUpdate:visible": (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                },
                onClose,
                autoClose,
                position
            }, {
                message
            });
        },
    });
    app.mount(div);
};
