<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import ListContainer from './ListContainer/index.vue'
import TodayRecommend from './TodayRecommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'

export default {
  name: 'Home',
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
}
</script>

<style lang="less" scoped></style>
