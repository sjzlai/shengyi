<template>
  <div id="introduce">
    <!--<div class="introduce_img hidden-xs-only"><img src="../../static/images/home_big.png" alt=""></div>-->
    <div class="introduct_content">
      <!--<p v-for="(item,index) in massage" :key="index" style="margin-top: 1rem;"></p>-->
	  <div v-html="company"></div>
    </div>
  </div>
</template>

<script>
import { aboutUs } from '../../getData';

export default {
	name:'introduce',
	component:{},
	data() {
		return {
			massage:[],
			company:''
		}
	},
	async created() {
		let res = await aboutUs();
		// console.log(res);
		this.massage = res.data;
		this.company=res.data[0].content;
	}
};
</script>
<style lang="scss" scoped>
@import '../../css/common.scss';
#introduce {
	flex-grow: 1;
	margin-left: 2.5rem;
	padding: 2rem 7rem;
	background-color: $main-bg;
	.introduce_img {
		width: 100%;
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.introduct_content {
		margin-top: 2rem;
		div {
			p {
				@include sc(1.4rem, $dark);
				line-height: 1.5;
			}
		}
	}
}

@media screen and (max-width: 992px) {
	#introduce {
		.introduce_img {
			img {
			}
		}
		.introduct_content {
			p {
			}
		}
	}
}

@media screen and (max-width: 768px) {
	#introduce {
    margin-left: 0;
    padding: 0.5rem 1rem;
		.introduce_img {
			img {
			}
		}
		.introduct_content {
			p {
			}
		}
	}
}
</style>


