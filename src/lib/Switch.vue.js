export default {
    name: 'ZSwitch',
};
const emit = defineEmits(["update:value"]);
const props = defineProps();
const toggle = () => {
    console.log(props.value);
    emit("update:value", !props.value);
};
