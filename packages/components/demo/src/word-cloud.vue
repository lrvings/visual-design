<template>
  <section class="cloud-bed">
    <div ref="cloudBox" class="cloud-box">
      <span
        v-for="(item, index) in state.dataList"
        :key="index"
        @click="methods.getDataInfo(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'

defineOptions({
  name: 'VWordCloud',
})

const cloudBox = ref<HTMLDivElement>()
const tagContent = ref<HTMLSpanElement>()

const state = reactive({
  timer: 50, // 球体转动速率
  radius: 0, // 词云球体面积大小
  dtr: Math.PI / 180, //鼠标滑过球体转动速度
  active: false, // 默认加载是否开启转动
  lasta: 0, // 上下转动
  lastb: 0.5, // 左右转动
  distr: true,
  tspeed: 0, // 鼠标移动上去时球体转动
  mouseX: 0,
  mouseY: 0,
  tagAttrList: [],
  sinA: 0,
  cosA: 0,
  sinB: 0,
  cosB: 0,
  sinC: 0,
  cosC: 0,
  dataList: [
    { name: '市容环境', value: '8' },
    { name: '生活资源', value: '8' },
    { name: '机动车乱停', value: '0' },
    { name: '供气质量', value: '0' },
    { name: '商业噪音', value: '6' },
    { name: '乱搭乱建', value: '10' },
    { name: '道路垃圾', value: '2' },
    { name: '生活用水管理', value: '5' },
    { name: '路面不洁', value: '7' },
    { name: '烧烤油烟', value: '6' },
    { name: '非法广告', value: '4' },
    { name: '设施破损', value: '6' },
    { name: '病虫害', value: '5' },
    { name: '1111', value: '5' },
    { name: '2222', value: '5' },
    { name: '3333', value: '5' },
    { name: '4444', value: '5' },
    { name: '5555', value: '5' },
  ],
})

const methods = {
  // 获取点击文本信息
  getDataInfo(item: any) {
    console.log(item, 'item')
  },
  initWordCloud() {
    if (!cloudBox.value) {
      return
    }
    tagContent.value = cloudBox.value.querySelectorAll('span')
    if (tagContent.value) {
      for (let i = 0; i < tagContent.value.length; i++) {
        const tagObj = {
          offsetWidth: 0,
          offsetHeight: 0,
        }
        tagObj.offsetWidth = tagContent.value[i].offsetWidth
        tagObj.offsetHeight = tagContent.value[i].offsetHeight
        state.tagAttrList.push(tagObj)
      }
    }

    methods.sineCosine(0, 0, 0)
    methods.positionAll()
    cloudBox.value.onmouseover = () => {
      state.active = true
    }
    cloudBox.value.onmouseout = () => {
      state.active = false
    }
    cloudBox.value.onmousemove = (ev) => {
      const oEvent = ev
      state.mouseX =
        oEvent.clientX -
        (cloudBox.value.offsetLeft + cloudBox.value.offsetWidth / 2)
      state.mouseY =
        oEvent.clientY -
        (cloudBox.value.offsetTop + cloudBox.value.offsetHeight / 2)
      state.mouseX /= 5
      state.mouseY /= 5
    }
    // setInterval(state.update, state.timer);
    // state.timer = requestAnimationFrame(state.update)
  },
  positionAll() {
    let phi = 0
    let theta = 0
    const max = state.tagAttrList.length
    const aTmp = []
    const oFragment = document.createDocumentFragment()
    //随机排序
    for (let i = 0; i < tagContent.value.length; i++) {
      aTmp.push(tagContent.value[i])
    }
    aTmp.sort(() => {
      return Math.random() < 0.5 ? 1 : -1
    })
    for (const element of aTmp) {
      oFragment.appendChild(element)
    }
    cloudBox.value.appendChild(oFragment)
    for (let i = 1; i < max + 1; i++) {
      if (state.distr) {
        phi = Math.acos(-1 + (2 * i - 1) / max)
        theta = Math.sqrt(max * Math.PI) * phi
      } else {
        z
        phi = Math.random() * Math.PI
        theta = Math.random() * (2 * Math.PI)
      }
      //坐标变换
      state.tagAttrList[i - 1].cx =
        state.radius * Math.cos(theta) * Math.sin(phi)
      state.tagAttrList[i - 1].cy =
        state.radius * Math.sin(theta) * Math.sin(phi) + 50
      state.tagAttrList[i - 1].cz = state.radius * Math.cos(phi)
      tagContent.value[i - 1].style.left = `${
        state.tagAttrList[i - 1].cx +
        cloudBox.value.offsetWidth / 2 -
        state.tagAttrList[i - 1].offsetWidth / 2
      }px`
      tagContent.value[i - 1].style.top = `${
        state.tagAttrList[i - 1].cy +
        cloudBox.value.offsetHeight / 2 -
        state.tagAttrList[i - 1].offsetHeight
      }px`
    }
  },
  update() {
    let angleBasicA
    let angleBasicB

    if (state.active) {
      angleBasicA =
        (-Math.min(Math.max(-state.mouseY, -200), 200) / state.radius) *
        state.tspeed
      angleBasicB =
        (Math.min(Math.max(-state.mouseX, -200), 200) / state.radius) *
        state.tspeed
    } else {
      angleBasicA = state.lasta * 0.98
      angleBasicB = state.lastb * 0.98
    }

    //默认转动是后是否需要停下
    // lasta=a;
    // lastb=b;

    // if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
    // {
    // return;
    // }
    methods.sineCosine(angleBasicA, angleBasicB, 0)
    for (let j = 0; j < state.tagAttrList.length; j++) {
      const rx1 = state.tagAttrList[j].cx
      const ry1 =
        state.tagAttrList[j].cy * state.cosA +
        state.tagAttrList[j].cz * -state.sinA
      const rz1 =
        state.tagAttrList[j].cy * state.sinA +
        state.tagAttrList[j].cz * state.cosA

      const rx2 = rx1 * state.cosB + rz1 * state.sinB
      const ry2 = ry1
      const rz2 = rx1 * -state.sinB + rz1 * state.cosB

      const rx3 = rx2 * state.cosC + ry2 * -state.sinC
      const ry3 = rx2 * state.sinC + ry2 * state.cosC
      const rz3 = rz2
      state.tagAttrList[j].cx = rx3
      state.tagAttrList[j].cy = ry3
      state.tagAttrList[j].cz = rz3

      const per = 350 / (350 + rz3)

      state.tagAttrList[j].x = rx3 * per - 2
      state.tagAttrList[j].y = ry3 * per
      state.tagAttrList[j].scale = per
      state.tagAttrList[j].alpha = per

      state.tagAttrList[j].alpha = (state.tagAttrList[j].alpha - 0.6) * (10 / 6)
    }
    methods.doPosition()
    methods.depthSort()
    // state.timer = requestAnimationFrame(state.update)
  },
  doPosition() {
    const len = cloudBox.value.offsetWidth / 2
    const height = cloudBox.value.offsetHeight / 2
    for (let i = 0; i < state.tagAttrList.length; i++) {
      tagContent.value[i].style.left = `${
        state.tagAttrList[i].cx + len - state.tagAttrList[i].offsetWidth / 2
      }px`
      tagContent.value[i].style.top = `${
        state.tagAttrList[i].cy + height - state.tagAttrList[i].offsetHeight / 2
      }px`
      // tagContent.value[i].style.fontSize = Math.ceil(12 * state.tagAttrList[i].scale/2) + 8 + 'px';
      tagContent.value[i].style.fontSize = `${
        Math.ceil((12 * state.tagAttrList[i].scale) / 2) + 2
      }px`
      tagContent.value[i].style.filter = `alpha(opacity=${
        100 * state.tagAttrList[i].alpha
      })`
      tagContent.value[i].style.opacity = state.tagAttrList[i].alpha
    }
  },
  depthSort() {
    const aTmp = []
    for (let i = 0; i < tagContent.value.length; i++) {
      aTmp.push(tagContent.value[i])
    }
    aTmp.sort((item1, item2) => item2.cz - item1.cz)
    for (const i of aTmp) {
      aTmp[i].style.zIndex = i
    }
  },
  sineCosine(a: number, b: number, c: number) {
    state.sinA = Math.sin(a * state.dtr)
    state.cosA = Math.cos(a * state.dtr)
    state.sinB = Math.sin(b * state.dtr)
    state.cosB = Math.cos(b * state.dtr)
    state.sinC = Math.sin(c * state.dtr)
    state.cosC = Math.cos(c * state.dtr)
  },
}

onMounted(() => {
  nextTick(() => {
    if (cloudBox.value) {
      state.radius = cloudBox.value.offsetWidth / 2.5
    }
    methods.initWordCloud()
  })
})

onUnmounted(() => {
  // cancelAnimationFrame(state.timer)
})
</script>

<style scoped lang="scss">
.cloud-bed {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
.cloud-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: #00000000;
}
.cloud-box span {
  position: absolute;
  padding: 3px 6px;
  top: 0px;
  font-weight: bold;
  text-decoration: none;
  left: 0px;
  color: transparent;
  min-width: 90px;
  color: #ffffff;
  height: 32px;
  text-align: center;
  background: #0a3c57;
  border: 2px solid rgba(56, 119, 242, 1);
  box-shadow: inset 0px 0px 12px 0px rgba(0, 201, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* line-height: 50px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis; */
}
</style>
