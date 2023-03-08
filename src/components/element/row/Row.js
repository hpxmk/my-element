/*
 * @Author: huangpx
 * @Date: 2023-03-08 15:35:42
 * @LastEditors: huangpx
 * @LastEditTime: 2023-03-08 15:42:23
 * @Description: file content
 */
export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'bottom', 'middle'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-row', { 'el-row--flex': this.type === 'flex' },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align && `is-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
