<template>
  <div id="header">
    <header>
      <el-row>
        <el-col :xs="{span: 12, offset: 5}" :lg="{span: 9}" :sm="{span: 10}">
          <section class="logo_wrap">
			<div class="logo_img">
				<img @click="$router.push('/')" class="logo" src="../static/images/logo.png" alt="">
			</div>
            <div class="logo_word" @click="$router.push('/')">
				<div>&nbsp北京中科生仪科技有限公司</div>
				<div>Beijing Integrated BioSystems Co., Ltd.</div>
			</div>
          </section>
        </el-col>
        <el-col class="hidden-xs-only" :lg="{span: 12}" :sm="{span: 14}">
          <section class="nav_wrap">
            <ul>
              <router-link :style="{color:item.link?'': '#999', cursor: 'pointer'}" :class="{liActive: liActive === index}" v-for="(item, index) in liTarget" :key="index" tag="li" :to="item.link">{{item.text}}</router-link>
            </ul>
          </section>
        </el-col>
        <el-col :xs="{span: 3, offset: 3}">
          <section class="menu">
            <img @click="coverShow" src="../static/images/mune.svg" alt="">
          </section>
        </el-col>
      </el-row>
    </header>
	<!--banner轮播图-->
	<el-carousel :interval="0" arrow="never" :height="bannerHeight + 'px'" indicator-position="none">
		<el-carousel-item v-for="(item,index) in dataimg" :key="index">
			<el-row>
				<el-col :xs="{span: 24, offset: 0}">
					<img :src="item.src" ref="bannerHeight" class="banner_img" @load="imgLoaded">
				</el-col>
			</el-row>
		</el-carousel-item>
	</el-carousel>	
  </div>

</template>

<script>
import { goodsShow } from '../getData';

export default {
	name: 'head-top',
	components: {},
	data() {
		return {
			count:0,
			bannerHeight:0,
			liTarget: [
				{ text: '首页', link: '/' },
				{ text: '研发中心', link: '/product/14' },
				{ text: '技术支持', link: '' },
				{ text: '关于我们', link: '/about/introduce' },
				{ text: '联系我们', link: '/contact' },
			],
			liActive: '',
			dataimg: [{
						src: require('../static/images/banner.png'),
					}]
		};
	},
	
	mounted () {
		window.addEventListener('resize', () => {
			this.bannerHeight = this.$refs.bannerHeight[0].height;
		},false)
	},

	methods: {
		//阴影层的显示
		coverShow () {
			this.$emit('coverShow');
		},
		imgLoaded () {
			this.count++;
			if(this.count === 1) {
				this.$nextTick(() => {
					this.bannerHeight = this.$refs.bannerHeight[0].height;
				})
			}
			this.count = 0;
		}
	},
	watch: {
    //路由监听  改变导航背景颜色
		$route(to, from) {
			if (to.path === '/') {
				this.liActive = 0;
			} else if (to.path.includes('/product')) {
				this.liActive = 1;
			} else if (to.path.includes('/about')) {
				this.liActive = 3;
			} else if (to.path.includes('/contact')) {
				this.liActive = 4;
			} else if (to.path.includes('/article')) {
				this.liActive = 3;
			} else {
				this.liActive = '';
			};

			// 根据跳转页面地址改变banner图片
			if (to.path === '/') {
				this.dataimg = [{
						src: require('../static/images/banner.png')
					}];
			} else {
				this.dataimg = [{
						src: require('../static/images/inner.png')
					}];
			}
		},
	},
	async created() {
		let path = this.$route.path;	

		// 根据跳转页面地址改变banner图片
			if (path === '/') {
				this.dataimg = [{
						src: require('../static/images/banner.png')
					}];
			} else {
				this.dataimg = [{
						src: require('../static/images/inner.png')
					}];
			}
		// 根据当前页面地址改变导航背景颜色
		if (path === '/') {
			this.liActive = 0;
		} else if (path.includes('/product')) {
			this.liActive = 1;
		} else if (path.includes('/about')) {
			this.liActive = 3;
		} else if (path.includes('/contact')) {
			this.liActive = 4;
		} else if (path.includes('/article')) {
			this.liActive = 3;
		} else {
			this.liActive = '';
		}

		let res = await goodsShow();
		this.liTarget = [
			{ text: '首页', link: '/' },
			{ text: '研发中心', link: `/product/14` },
			{ text: '技术支持', link: '' },
			{ text: '关于我们', link: '/about/introduce' },
			{ text: '联系我们', link: '/contact' },
		]
	}
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
header {
	@include wh(100%, 6rem);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(44, 62, 80, 0.7);
	section {
		height: 6rem;
		&.logo_wrap {
			cursor: pointer;
			@include flexCenter;
			.logo_img {
				img {
					@include wh(4.5rem, 4rem);
					display: block;
				}
			}	
			.logo_word {
				color: #fff;
				margin-left:1rem;
				div:first-child {
					font-size: 1.7rem;
				}
			}
		}
		&.nav_wrap {
			ul {
				@include fj(space-between);
				align-items: center;
				li {
					width: 9rem;
					margin-top: 1.5rem;
					line-height: 3rem;
					border-radius: 1rem;
					text-align: center;
					@include sc(1.6rem, white);
					&.liActive {
						background-color: #e74c3c;
					}
				}
			}
		}
		&.menu {
			display: none;
		}
	}
}

.banner_img {
	display: block;
	width: 100%;
}

@media screen and (max-width: 992px) {
	header {
		section {
			&.nav_wrap {
				ul {
					li {
						// line-height: 6rem;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	header {
		height: 5rem;
		section {
			height: 5rem;
			&.menu {
				display: block;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
