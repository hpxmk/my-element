/*
 * @Author: huangpx
 * @Date: 2023-03-08 15:59:31
 * @LastEditors: huangpx
 * @LastEditTime: 2023-03-08 16:02:51
 * @Description: file content
 */
import Row from '@element/row';
import Col from '@element/col';

const components = [
  Row,
  Col,
];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
  Row,
  Col,
};
export {
  install,
  Row,
  Col,
};
