export default {
    name: 'ZTabs'
};
import Tab from './Tab.vue';
import { computed, ref, watchEffect, onMounted, useSlots, } from 'vue';
const slots = useSlots();
const emit = defineEmits(['update:selected']);
const props = defineProps();
const selectedItem = ref(null);
const indicator = ref(null);
const container = ref(null);
onMounted(() => {
    watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
    }, {
        flush: 'post'
    });
});
const defaults = slots.default();
defaults.forEach((tag) => {
    if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab');
    }
});
const current = computed(() => {
    return defaults.find(tag => tag.props.title === props.selected);
});
const titles = defaults.map((tag) => {
    return tag.props.title;
});
const select = (title) => {
    emit('update:selected', title);
};
