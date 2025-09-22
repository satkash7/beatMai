import Vue from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Segment.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import AiIcon from 'vue-material-design-icons/Eye.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Linkedin from 'vue-material-design-icons/Linkedin.vue'
import Robot from 'vue-material-design-icons/Robot.vue'
import SearchIcon from 'vue-material-design-icons/Magnify.vue'
import TrashCanIcon from 'vue-material-design-icons/TrashCan.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import Youtube from 'vue-material-design-icons/YouTube.vue'

const components = {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusThickIcon,
  MinusThickIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SegmentIcon,
  CloseIcon,
  AccountIcon,
  PlusIcon,
  TrashCanIcon,
  AiIcon,
  PencilIcon,
  Instagram,
  Twitter,
  Facebook,
  Whatsapp,
  Linkedin,
  Robot,
  Youtube,
  SearchIcon,
  EmailIcon
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
