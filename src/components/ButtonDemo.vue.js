import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
console.log(Button1Demo);
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo
        };
    },
};
