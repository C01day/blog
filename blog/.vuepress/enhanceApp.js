import OhVueIcon from "oh-vue-icons";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  // FaFortAwesome,//主页
  // FaPaw,
  // FaTag, //tag
  // FaSatelliteDish, //外链
  RiHome2Line,
  BiChat,
  BiBookmark,
  HiRss,
  RiLinkM,
  RiSearch2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  RiWeiboFill,
  HiMail,
  AiCv,
  RiSpaceShipFill,
  // RiBook2Fill,//文档
  BiJournal,
} from "oh-vue-icons/icons";

OhVueIcon.add(
  // FaFortAwesome,
  // FaPaw,
  // FaTag,
  // FaSatelliteDish,
  RiHome2Line,
  BiChat,
  BiBookmark,
  HiRss,
  RiLinkM,
  RiSearch2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  RiWeiboFill,
  HiMail,
  AiCv,
  RiSpaceShipFill,
  // RiBook2Fill,
  BiJournal,
);

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {

  Vue.use(ElementUI)
  
  // ...做一些其他的应用级别的优化
}
