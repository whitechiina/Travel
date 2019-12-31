
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in page" :key="index">
          <div class='icon-img'>
            <img class='icon-img-content':src='item.imgUrl'/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props:{
        list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay:false
        }
      }
    },
    computed: {
        pages() {
            const pages = [];
            // 将一维数组拆分为二维数组
            this.list.forEach((item, index) => {
                /* 取整，每8个按钮一页 */
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        },
    },
}

</script>

<style lang="stylus" scoped>
    @import './style/Icons.styl';
</style>
