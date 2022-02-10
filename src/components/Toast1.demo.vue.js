import { showToast } from '../lib/showToast';
export default {
    setup() {
        const toggle = () => {
            showToast({
                message: '这是一条弹框!',
                onClose: () => {
                    console.log('toast close');
                }
            });
        };
        return { toggle };
    }
};
