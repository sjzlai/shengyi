<template>
  <div id="job">
    <aside class="job_title">
      <p>北京中科生仪科技有限公司于2009年成立，公司以先进生命科学技术和装备的研发、生产、销售、服务作为主营业务。公司自成立以来，专注于发展自己的专利技术，研发自主产权的生物技术产品和服务平台。 现公司招纳贤才，诚邀你的加入</p>
    </aside>
    <section>
      <article class="first_job">
        <h3>招聘职位：实验技术员</h3>
        <section style="margin-top: 2rem;">
          <h4>职位要求：</h4>
          <p>1. 负责分子生物学相关产品研发过程中的 实验室技术工作，包括实验方案的设计及相关分子生物学实验的操作；</p>
          <p>2. 完成公司或上级安排的其它任务。</p>
        </section>
        <section>
          <h4>岗位职责 ：</h4>
          <p>1. 分子生物学相关专业，本科及以上学历，有相关工作经验优先；</p>
          <p>2. 熟悉分子生物学相关的实验操作，如核酸的提取与纯化，核酸电泳，PCR，基因克隆；</p>
          <p>3. 具有较强的实验动手能力和学习能力，实验操作认真负责；</p>
          <p>4. 具有较强的团队协作能力和沟通能力，积极发现并解决实验过程中的问题。</p>
        </section>
      </article>
      <article class="second_job">
        <h3>招聘职位：电子工程师 </h3>
        <section style="margin-top: 2rem;">
          <h4>职位要求：</h4>
          <p>1. 大学本科以上学历，电子、微电子、自动化及相关专业，1年以上相关工作经验；</p>
          <p>2. 熟练使用电路设计软件进行原理图和pcb板的设计；</p>
          <p>3. 熟练使用各类电子测试仪表，熟悉电子电路的调试；</p>
          <p>4. 具有数字或模拟电路设计经验，精通一种电路版图绘制工具软件的使用；</p>
          <p>5. 具有良好的英文资料的阅读能力；</p>
          <p>6. 良好的职业道德，具有开阔的思路和创新精神，敏锐的技术前瞻性；</p>
					<p>7. 具有组织协调能力和良好的团队协作能力，能适应较高的工作压力。</p>
        </section>
        <section>
          <h4>岗位职责：</h4>
          <p>1. 负责原理图的设计工作；</p>
          <p>2. 负责PCB布线设计；</p>
          <p>3. 负责产品的调试、测试；</p>
          <p>4. 负责所开发产品的相关文件的编写；</p>
          <p>5. 配合采购人员完成器件采购；</p>
					<p>6. 负责客户及生产中技术问题的处理（收集、分析、解决、反馈）。</p>
        </section>
      </article>
			<article class="third_job">
        <h3>招聘职位：嵌入式linux工程师 </h3>
        <section style="margin-top: 2rem;">
          <h4>职位要求：</h4>
          <p>1. 通信、计算机或相关专业毕业,本科以上学历；</p>
          <p>2. 熟悉linux操作系统，并具有相应的3年以上开发经验；</p>
          <p>3. 熟悉Linux BSP、Linux内核驱动编程、架构。熟悉对uboot移植、Linux内核裁减移植、文件系统移植、驱动程序开发、应用程序编程及配置等相关开发内容；</p>
          <p>4. 熟悉MiniGui、QT等界面开发设计工具，具有应用系统的界面与业务流程开发经验；</p>
          <p>5. 熟悉Socket网络编程；</p>
          <p>6. 有工作激情、上进心，有团队合作精神；</p>
					<p>7. 能吃苦耐劳，勇于挑战并克服困难；</p>
					<p>8. 有医疗器械产品等开发经验者优先。</p>
        </section>
        <section>
          <h4>岗位职责：</h4>
          <p>1. 参与公司内项目及设备产品开发，沟通设计方案并详细设计；</p>
          <p>2. 根据项目要求，进行嵌入式linux系统的CPU、外设等芯片选型；</p>
          <p>3. 负责进行嵌入式linux系统裁剪、移植及底层驱动开发相关工作；</p>
          <p>4. 负责linux系统平台产品的开发和维护；</p>
          <p>5. 配合采购人员完成器件采购；</p>
					<p>6. 根据公司技术文档规范编写所属岗位相关的技术文档。</p>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
export default {
	name: 'job',
};
</script>

<style lang="scss" scoped>
@import '../../css/common.scss';
#job {
	flex-grow: 1;
	margin-left: 2.5rem;
	padding: 3rem 7rem;
	background-color: $main-bg;
	.job_title {
		& > p {
			line-height: 2;
			@include sc(1.4rem, $dark);
		}
	}
	& > section {
		article {
			margin-top: 2rem;
			h3 {
				@include sc(1.4rem, #E74C3C);
				font-weight: 600;
			}
			& > section {
				h4 {
					margin-top: 0.6rem;
					@include sc(1.4rem, $dark);
					font-weight: 600;
				}
				p {
					line-height: 2;
					@include sc(1.4rem, $dark);
				}
			}
		}
	}
}

@media screen and (max-width: 992px) {
	#job {
    margin-left: 0;
    padding: 1rem 2rem;
		.job_title {
			& > p {
			}
		}
		& > section {
			article {
				h3 {
				}
				& > section {
					h4 {
					}
					p {
					}
				}
			}
		}
	}
}
</style>


