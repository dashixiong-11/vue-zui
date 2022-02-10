import { openDialog } from "../lib/index";
import { h } from 'vue';
export default {
    setup() {
        const showDialog = () => {
            openDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok() {
                    console.log('ok');
                },
                cancel() {
                    console.log('cancel');
                }
            });
        };
        return {
            showDialog
        };
    }
};
