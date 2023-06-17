<template>
  <app-header/>
  <div class="content clearfix">
    <!--排行榜-->
    <ul class="rank-list">
      <li>
        <img src="@/assets/image/list-rank1.png" alt="">
        <p class="rank-list-phone">13704213870</p>
        <span>150000.0元</span>
      </li>
      <li>
        <img src="@/assets/image/list-rank2.png" alt="">
        <p class="rank-list-phone">13704213880</p>
        <span>90000.0元</span>
      </li>
      <li>
        <img src="@/assets/image/list-rank3.png" alt="">
        <p class="rank-list-phone">13704213890</p>
        <span>2000.0元</span>
      </li>
    </ul>
    <!--产品列表-->

    <ul class="preferred-select clearfix">
      <li v-for="product in productVOList" :key="product.id">
        <h3 class="preferred-select-title">
          <span>{{ product.productName }}</span>
          <img src="@/assets/image/1-bg1.jpg" v-if="product.productName === '满月宝'">
          <img src="@/assets/image/1-bg2.jpg" v-else-if="product.productName === '年度宝'">
          <img src="@/assets/image/1-bg3.jpg" v-else-if="product.productName === '双季宝'">
          <img src="@/assets/image/1-bg4.jpg" v-else-if="product.productName === '季度宝'">
          <img src="@/assets/image/1-bg1.jpg" v-else>
        </h3>
        <div class="preferred-select-number">
          <p><b>{{ product.rate }}</b>%</p>
          <span>历史年化收益率</span>
        </div>
        <div class="preferred-select-date">
          <div>
            <span>投资周期</span>
            <p><b>{{ product.cycle }}</b>个月</p>
          </div>
          <div>
            <span>剩余可投资金额</span>
            <p><b>{{product.leftProductMoney}}</b>元</p>
          </div>
        </div>
        <p class="preferred-select-txt">
          优选计划项目，投资回报周期{{ product.cycle }}个月，起点低，适合短期资金周转、对流动性要求高的投资人。
        </p>
        <a href="javascript:;" target="_blank" class="preferred-select-btn">立即投资</a>
      </li>
    </ul>

    <!--分页-->
    <div class="page_box">
      <ul class="pagination">
        <li class="disabled"><span><a href="javascript:void(0)" @click="firstPage">首页</a></span></li>
        <li><a href="javascript:void(0)" @click="pastPage">上一页</a></li>
        <li class="active"><span>{{ this.pageResult.current }}</span></li>
        <li><a href="javascript:void(0)" @click="this.nextPage" >下一页</a></li>
        <li><a href="javascript:void(0)" @click="this.lastPage">尾页</a></li>
        <li class="totalPages"><span>共 <b>{{ this.pageResult.pages }}</b> 页</span></li>
      </ul>
    </div>
  </div>
  <app-footer/>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {doGet} from "@/util/request";

export default {
  name: 'ProductListView',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      productType: -1,
      productVOList: [
        {
          id: 0,
          productName: '',
          rate: 0,
          cycle: 0,
          productType: 0,
          productNo: '',
          productMoney: 0,
          leftProductMoney: 0,
          bidMinLimit: 0,
          bidMaxLimit: 0
        }
      ],
      pageResult:[{
        pages:0,
        total:0,
        current:0
      }]
    }
  },
  mounted() {
    //从路由中获取ptype值
    this.productType = this.$route.query.ptype;
    this.firstPage();
  },
  methods: {
    loadData(pageNo) {
      doGet("/product/type", {
        ptype: this.productType,
        pageNo:pageNo
      }).then(resp => {
          if (resp.data.code === 1000){
            this.productVOList = resp.data.info.productVOList;
            this.pageResult = resp.data.info.pageResult;
          }
      })
    },
    firstPage(){
      if (this.pageResult.current === 1){
          alert("当前已经是第一页了！");
      }else {
        this.loadData(1);
      }
    },
    pastPage(){
      if (this.pageResult.current === 1){
        alert("当前已经是第一页了！");
      }else {
        this.loadData(this.pageResult.current - 1);
      }
    },
    nextPage(){
      if (this.pageResult.current === this.pageResult.pages){
        alert("当前已经是最后一页了！");
      }else {
      this.loadData(this.pageResult.current + 1);
      }
    },
    lastPage(){
      if (this.pageResult.current === this.pageResult.pages){
        alert("当前已经是最后一页了！");
      }else {
        this.loadData(this.pageResult.pages);
      }

    },
  }
}
</script>

<style>

</style>