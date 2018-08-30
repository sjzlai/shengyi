<template>
  <div id="container_wrap">
		<div class="company_introduce">
			<section class="container_title">
      <h3 class="title">公司简介</h3>
      <p class="border"></p>
			</section>
			<section class="container_wrapper">
				<el-row>
					<el-col :lg="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :xs="{span: 22, offset: 1}">
						<p>北京中科生仪科技有限公司成立于2009年，公司位于北京全国科技创新中心“三城一区”主平台中的北京经济技术开发区，并作为开发区生物医药板块中基因技术创新中心的核心企业参与相关产业的规划与布局。</p>
						<p>中科生仪以先进生命科学及医学诊断技术和装备的研发、生产、销售、服务作为主营业务，其中侧重点集中于便携式核酸分子检测设备、实用化POCT设备、基因测序技术及装备，以及相应的配套试剂产品等原始创新研发和产业化工作，力求满足我国精准医学和现场化检测等市场领域对国产化技术装备的迫切需求。</p>
						<p>中科生仪迄今完成或承担多项省部级科技攻关项目，已申请国家发明专利十余项，拥有数件软件著作权，形成了具有可持续性的自主知识产权布局。</p>
						<p  @click="$router.push('/about/introduce')">查看详情>></p>
					</el-col>
				</el-row>
			</section>
		</div>
    
    <section class="container_title">
      <h3 class="title">行业动态</h3>
      <p class="border"></p>
    </section>
    <section class="news_wrap">
      <el-row>
        <el-col :lg="{span: 16, offset: 4}" :sm="{span: 22, offset: 1}" :xs="{span: 22, offset: 1}">
          <div class="news_wrapper">
            <article class="hidden-xs-only">
              <div class="img_show">
                <img :src="imgResolve(newsNewList.art_thumb)" alt="">
              </div>
              <h3>{{newsNewList.art_title}}<router-link tag="span" :to="`/article/${newsNewList.art_id}`" style="cursor: pointer;">【详情】</router-link></h3>
            </article>
            <div class="news_list">
              <ul>
                <router-link tag="li" :to="`/article/${item.art_id}`" v-for="(item, index) in newsList" :key="index" :class="{list_item : index}">
                  <h1>
                    <span :class="{list_title:index}">{{index > 9 ? '': 0}}{{index + 1}}</span>
                  </h1>
                  <article>
                    <h3>
                      <p :class="{list_title_small:index}">{{item.art_title}}</p>
                      <span class="hidden-md-only hidden-sm-only" :class="{list_time:index}">{{timeResolve(item.art_time)}}</span>
                    </h3>
                    <p :class="{list_content:index}">{{item.art_description}}</p>
                  </article>
                </router-link>
              </ul>
							<div class="list_more">
								<span @click="$router.push('/about/dynamic')" style="cursor: pointer;">【更多】</span>
							</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
	// import { goodsShow } from '../getData';
	import { imgResolve, timeResolve } from '../getData/utils';
	export default {
		components: {},
		async asyncData({ app, error }) {
			let data = {
				// goodsList: [],
				// goodsShowBoolean: 0,
				newsList: [],
				newsNewList: {},
			};
			let res;
			let news;
			let newsNew;
			let baseUrl;
			if (process.env.NODE_ENV === 'production') {
				baseUrl = 'http://admin.ibs-bj.com';
			} else {
				baseUrl = '';
			}

			// try {
			// 	res = await app.$axios.$get(`${baseUrl}/api/goodsShow`);
			// } catch (err) {
			// 	throw new Error('http://admin.ibs-bj.com/api/goodsShow请求出错');
			// }
			try {
				news = await app.$axios.$get(`${baseUrl}/api/newsList`);
			} catch (err) {
				throw new Error('http://admin.ibs-bj.com/api/newsList请求出错');
			}
			try {
				newsNew = await app.$axios.$get(`${baseUrl}/api/newsNew`);
			} catch (err) {
				throw new Error('http://admin.ibs-bj.com/api/newsNew请求出错');
			}
			// data.goodsList = res.data.goodsInfo;
			data.newsList = news.data;
			if(data.newsList.length>3){
				data.newsList = data.newsList.slice(0,3);
			}
			data.newsNewList = newsNew.data;
			return data;
		},
		data() {
			return {
				imgResolve,
				timeResolve,
				// goodsNumIndex: 0
			};
		},

		methods: {
			// goodsIndex(index) {
			// 	this.goodsNumIndex = index;
			// }
		}
	};
</script>

<style lang="scss" scoped>
	@import '../css/common.scss';
	#container_wrap {
		width: 100%;
		.company_introduce {
			width: 100%;
      height: 47rem;
      display: inline-block;	
			background-image:url('../static/images/compony_introduce.png');
			background-size: 100% 100%;
		}
		section {
			&.container_title {
				h3 {
					margin-top: 5rem;
					text-align: center;
					@include sc(2.8rem, $dark);
				}
				p {
					margin-top: 0.5rem;
					text-align: center;
					padding: 0 1rem;
					&.product {
						@include sc(1.2rem, $dark);
						font-family: HiraginoSansGB-W3;
					}
					&.border {
						@include wh(5rem, 0.3rem);
						margin: 0 auto;
						margin-top: 1rem;
						margin-bottom: 4rem;
						border-radius: 0.15rem;
						background-color: #4d4d4d;
					}
					&.introduction {
						@include sc(1.4rem, #808080);
						font-family: HiraginoSansGB-W3;
					}
				}
			}
			&.container_wrapper {
				// margin-top: 2.5rem;
				width:82rem;
				margin: 0 auto;
				padding: 3rem 0;
				background: rgba(1, 1, 1, 0.1);
				p {
					@include sc(1.5rem, #3F3F3F);
				}
				p:last-child {
					 cursor: pointer;
					 color:#FC4349;
					 font-weight: 600;
					 text-align: right;
				}
				p + p {
					margin-top: 2rem;
				}
			}
			&.news_wrap {
				margin-top: 2.5rem;
				.news_wrapper {
					display: flex;
					article {
						width: 40%;
						.img_show {
							img {
								@include imgWh(block, 100%, 100%);
								height:22.5rem;
								width:100%;
							}
						}
						h3 {
							cursor: pointer;
							position: relative;
							line-height: 5rem;
							@include sc(1.6rem, $dark);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							span {
								@include sc(1.4rem, #FC4349);
								position: absolute;
								right:0;
								bottom:0;
							}
						}
					}
					.news_list {
						width: 55%;
						height: 25rem;
						margin-left: 5%;
						ul {
							li {
								padding-right: 2rem;
								display: flex;
								background-color: $dark-green;
								&.list_item {
									background-color: #f5f5f5;
								}
								h1 {
									@include flexCenter;
									padding-left: 1rem;
									span {
										text-decoration: underline;
										@include sc(5rem, $white);
										font-family: RTWSShangGoG0v1-ExLightCond;
										&.list_title {
											@include sc(5rem, #ccc);
										}
									}
								}
								article {
									flex-grow: 1;
									h3 {
										@include fj(space-between);
										padding-right: 0.5rem;
										& > p {
											line-height: 4rem;
											padding-right: 1rem;
											font-weight: 600;
											overflow: hidden;
											white-space: nowrap;
											text-overflow: ellipsis;
											@include sc(1.4rem, $white);
											&.list_title_small {
												@include sc(1.4rem, $dark);
											}
										}
										span {
											line-height: 4rem;
											@include sc(1.4rem, $white);
											overflow: hidden;
											white-space: nowrap;
											text-overflow: ellipsis;
											&.list_time {
												@include sc(1.4rem, #666);
											}
										}
									}
									p {
										@include sc(1.4rem, $white);
										padding-right: 0.5rem;
										padding-left: 1rem;
										line-height: 3rem;
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
										&.list_content {
											@include sc(1.4rem, #666);
										}
									}
								}
							}
							li + li {
								margin-top: 2rem;
							}
						}
						.list_more {
							width: 100%;
							margin-top: 1.5rem;
							@include fj(flex-end);
							span {
								@include sc(1.4rem, #fc4349);
							}
						}
					}
				}
			}
		}
	}

@media screen and (max-width: 992px) {
		#container_wrap {
			width:100%;
			.company_introduce {
				width: 100%;
				height: 41rem;
				display: inline-block;	
				background-image:url('../static/images/compony_introduce.png');
				background-size: 100% 100%;
			}
			section {
				&.container_wrapper {
					width:100%;
					padding:2rem 0;
				}
				&.news_wrap {
					.news_list {
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		#container_wrap {
			width:100%;
			.company_introduce {
				width: 100%;
				height: 46rem;
				display: inline-block;	
				background-image:url('../static/images/company_small.jpg');
				background-size: 100% 100%;
			}
			section {
				&.container_wrapper {
				}
				&.news_wrap {
					.news_list {
						width: 100% !important;
						margin-left: 0 !important;
					}
				}
			}
		}
	}
</style>