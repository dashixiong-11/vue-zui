import Switch from './Switch.vue';
export { Switch };
import Button from './Button.vue';
export { Button };
import Tabs from './Tabs.vue';
export { Tabs };
import Tab from './Tab.vue';
export { Tab };
import Dialog from './Dialog.vue';
export { Dialog };
import { openDialog } from './openDialog';
export { openDialog };
const components = [Switch, Button, Tabs, Tab, Dialog];
export function registerZUI(app) {
    for (const component of components) {
        app.component(component.name, component);
    }
}
export default registerZUI;
