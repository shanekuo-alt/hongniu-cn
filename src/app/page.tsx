import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import FadeUp from "@/components/animations/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { HeroBadge, HeroHeadline, HeroSubcopy, HeroCTAs, HeroMascot } from "@/components/animations/HeroMotion";
import NavScrollState from "@/components/NavScrollState";

export default function Home() {
  return (
    <>
      {/* ========== NAV ========== */}
      <NavScrollState>
        <a href="#" className="flex items-center gap-3">
          <Image alt="红牛 Logo" className="object-contain" src="/assets/hongniu-logo-icon.png" width={80} height={80} />
          <div className="text-2xl font-black text-primary font-headline tracking-tight hidden sm:block">红牛</div>
        </a>
        <div className="hidden md:flex items-center space-x-12 font-headline font-bold">
          <a className="text-neutral-600 hover:text-primary transition-colors" href="#how-it-works">如何运作</a>
          <a className="text-neutral-600 hover:text-primary transition-colors" href="#about">关于我们</a>
          <a className="text-neutral-600 hover:text-primary transition-colors" href="#faq">常见问题</a>
        </div>
        <button className="btn-press bg-primary text-on-primary px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
          立即开始
        </button>
      </NavScrollState>

      <main className="relative z-10">
        {/* ========== HERO ========== */}
        <section className="story-block overflow-hidden relative bg-surface-container-low/60" id="hero">
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundRepeat: "repeat", backgroundSize: "500px", maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)" }} />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10 order-2 lg:order-1">
              <HeroBadge>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-black text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  下一代营销
                </div>
              </HeroBadge>
              <HeroHeadline className="text-6xl lg:text-[100px] font-black font-headline text-primary leading-[1.15] tracking-tighter text-glow">
                广告，从未如此简单
              </HeroHeadline>
              <HeroSubcopy className="text-2xl text-on-surface-variant leading-relaxed max-w-xl">
                为中国小微企业量身定制的广告方案。您的本地市场，您的语言，您的计划。
              </HeroSubcopy>
              <HeroCTAs className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="btn-press bg-primary text-on-primary px-10 py-5 rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/30">
                  立即开始
                </button>
                <button className="btn-press bg-surface-container-highest/50 backdrop-blur-sm text-on-surface px-10 py-5 rounded-full text-xl font-bold hover:bg-surface-container-high transition-all">
                  了解运作方式
                </button>
              </HeroCTAs>
            </div>
            <HeroMascot className="relative order-1 lg:order-2">
              <div className="relative z-10 w-full aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] lg:rotate-3 border-8 border-white">
                <Image alt="红牛吉祥物" className="object-cover" src="/assets/mascot-promo-1.png" fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary-fixed text-on-secondary-fixed px-8 py-6 rounded-3xl shadow-2xl float-bob z-20">
                <p className="font-headline font-black text-3xl">繁荣就在眼前！</p>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container rounded-full blur-[100px] opacity-40 -z-10" />
            </HeroMascot>
          </div>
        </section>

        {/* ========== PROBLEMS ========== */}
        <section className="story-block bg-surface-container-low/60 backdrop-blur-sm relative overflow-hidden">
          <div className="gold-wave-overlay" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeUp className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-on-surface mb-8 tracking-tighter">为什么数字广告依然举步维艰</h2>
              <p className="text-2xl text-on-surface-variant leading-relaxed">传统机构并不了解本地商家的艰辛。我们懂你。</p>
            </FadeUp>
            <StaggerContainer stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white/90 backdrop-blur-md p-12 rounded-[3rem] border border-surface-container shadow-sm flex flex-col justify-between group hover:border-primary transition-colors">
                  <div>
                    <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:text-primary transition-colors mb-8">layers</span>
                    <h3 className="text-3xl font-black font-headline text-on-surface mb-6 leading-tight">平台太多</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed">同时管理 4-6 个平台是一份您从未应聘的全职工作。红牛助您统一管理。</p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-primary p-12 rounded-[3rem] shadow-2xl shadow-primary/40 md:-translate-y-12">
                  <span className="material-symbols-outlined text-6xl text-on-primary/30 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  <h3 className="text-3xl font-black font-headline text-on-primary mb-6 leading-tight">成本上升，回报下降</h3>
                  <p className="text-on-primary/90 text-lg leading-relaxed">58% 的公司因高昂的准入门槛而回避传统媒体。我们为您寻找效率突破点。</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white/90 backdrop-blur-md p-12 rounded-[3rem] border border-surface-container shadow-sm flex flex-col justify-between group hover:border-primary transition-colors">
                  <div>
                    <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:text-primary transition-colors mb-8">map</span>
                    <h3 className="text-3xl font-black font-headline text-on-surface mb-6 leading-tight">建议平庸，缺乏本地策略</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed">一至五线城市市场迥异。上海的策略在成都未必奏效。我们精准本地化每一项洞察。</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <FadeUp delay={0.3}>
              <div className="mt-24 bg-on-surface text-surface-container-lowest p-12 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 border-l-[12px] border-secondary-fixed overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "200px" }} />
                <div className="max-w-2xl relative z-10">
                  <h4 className="text-4xl font-black font-headline mb-6 text-white">红牛差异化优势</h4>
                  <p className="text-xl opacity-80 leading-relaxed">我们不只是&ldquo;投放广告&rdquo;。我们为您打造一台通往繁荣的引擎，它说着您所在街道、城市以及客户的语言。</p>
                </div>
                <button className="btn-press relative z-10 bg-secondary-fixed text-on-secondary-fixed px-12 py-6 rounded-full font-black text-2xl whitespace-nowrap hover:scale-105 transition-transform shadow-xl">
                  加入这一趋势
                </button>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ========== 6 STEPS ========== */}
        <section className="story-block bg-white overflow-hidden" id="how-it-works">
          <div className="organic-blob -left-40 top-1/4 w-[800px] h-[400px] rounded-full -rotate-12" style={{ maskImage: "linear-gradient(to right, transparent, black 50%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 50%, transparent)" }} />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <FadeUp className="text-center mb-32">
              <h2 className="text-6xl md:text-[80px] font-black font-headline text-primary mb-8 tracking-tighter">6步通向成功</h2>
              <p className="text-2xl text-on-surface-variant max-w-2xl mx-auto">从基础到突破——红牛之路专为速度与清晰而生。</p>
            </FadeUp>
            <div className="space-y-12">
              <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-12 items-center">
                <StaggerItem>
                  <div className="bg-surface-container-low/80 backdrop-blur-md p-12 rounded-[3rem] border-2 border-transparent hover:border-primary transition-all">
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-xl">1</div>
                    <h4 className="text-3xl font-black font-headline mb-4">业务基础</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed">告诉我们您的业务内容。无需复杂表格，只需基本事实。</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-surface-container-low/80 backdrop-blur-md p-12 rounded-[3rem] border-2 border-transparent hover:border-primary transition-all md:translate-y-24">
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-xl">2</div>
                    <h4 className="text-3xl font-black font-headline mb-4">营销目标</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed">获取新客？增强忠诚度？限时抢购？定义今日的成功蓝图。</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
              <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-12 items-center">
                <StaggerItem>
                  <div className="bg-surface-container-low/80 backdrop-blur-md p-12 rounded-[3rem] border-2 border-transparent hover:border-primary transition-all">
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-xl">3</div>
                    <h4 className="text-3xl font-black font-headline mb-4">地域定向</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed">精准定位您的社区，或瞄准全国范围内的多个城市层级。</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-surface-container-low/80 backdrop-blur-md p-12 rounded-[3rem] border-2 border-transparent hover:border-primary transition-all md:translate-y-24">
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-xl">4</div>
                    <h4 className="text-3xl font-black font-headline mb-4">受众定向</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed">AI 驱动的人物画像匹配，识别出真正会产生购买行为的客户。</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
              <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-12 items-center pb-24">
                <StaggerItem>
                  <div className="bg-surface-container-low/80 backdrop-blur-md p-12 rounded-[3rem] border-2 border-transparent hover:border-primary transition-all">
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-xl">5</div>
                    <h4 className="text-3xl font-black font-headline mb-4">策略生成</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed">数秒内审阅为您预算定制的完整营销蓝图。</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-primary p-12 rounded-[3rem] text-on-primary shadow-2xl md:translate-y-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "150px" }} />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center font-black text-3xl mb-8">6</div>
                      <h4 className="text-3xl font-black font-headline mb-4">执行与优化</h4>
                      <p className="text-xl opacity-90 leading-relaxed">一键发布，让红牛实时为您优化营销表现。</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section className="story-block bg-surface/40 backdrop-blur-sm overflow-hidden" id="about">
          <div className="organic-blob -left-20 top-20 w-[700px] h-[700px] rounded-full" style={{ maskImage: "radial-gradient(circle, black, transparent 75%)", WebkitMaskImage: "radial-gradient(circle, black, transparent 75%)" }} />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <FadeUp className="relative group">
              <div className="relative rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white w-full aspect-[4/5]">
                <Image alt="红牛吉祥物" className="object-cover" src="/assets/mascot-promo-2.png" fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container rounded-full blur-[100px] opacity-40" />
            </FadeUp>
            <div className="space-y-12">
              <FadeUp>
                <h2 className="text-6xl md:text-[80px] font-black font-headline text-on-surface leading-none tracking-tighter">什么是红牛？</h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-2xl text-on-surface-variant leading-relaxed">
                  红牛不仅仅是一个 AI；它是您不知疲倦的营销总监。我们将深度学习算法与敏锐的市场直觉相结合。
                </p>
              </FadeUp>
              <div className="space-y-10">
                <FadeUp delay={0.2}>
                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-4xl text-on-primary-container">timer</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black font-headline mb-2">节省时间</h4>
                      <p className="text-lg text-on-surface-variant">自动化 90% 的营销工作量，专注于经营您的业务。</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-4xl text-on-secondary-container">psychology</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black font-headline mb-2">专家建议</h4>
                      <p className="text-lg text-on-surface-variant">基于针对中国消费格局的数十亿数据点获取策略建议。</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-4xl text-on-primary-container">payments</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black font-headline mb-2">节省资金</h4>
                      <p className="text-lg text-on-surface-variant">停止在无效渠道浪费预算。每一分钱都为转化而优化。</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHY HONGNIU ========== */}
        <section className="story-block bg-on-surface/95 text-surface overflow-hidden">
          <div className="organic-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] rotate-3 opacity-10" style={{ backgroundSize: "600px", maskImage: "linear-gradient(to bottom, transparent, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)" }} />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <FadeUp className="text-center mb-24">
              <h2 className="text-6xl md:text-[80px] font-black font-headline text-secondary-fixed mb-8 tracking-tighter">为什么选择红牛？</h2>
              <p className="text-2xl opacity-70 max-w-2xl mx-auto">专为现代商人精神打造的数字伙伴。</p>
            </FadeUp>
            <StaggerContainer stagger={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <StaggerItem>
                <div className="card-lift p-16 rounded-[4rem] bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:border-primary transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "150px" }} />
                  <span className="material-symbols-outlined text-7xl text-primary mb-10 block group-hover:scale-110 transition-transform relative z-10">forum</span>
                  <h4 className="text-3xl font-black font-headline mb-6 relative z-10">对话式设计</h4>
                  <p className="text-xl opacity-60 leading-relaxed relative z-10">像与合伙人交谈一样与红牛对话。没有技术术语，只有结果导向的沟通。</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="card-lift p-16 rounded-[4rem] bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:border-secondary-fixed transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "150px" }} />
                  <span className="material-symbols-outlined text-7xl text-secondary-fixed mb-10 block group-hover:scale-110 transition-transform relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <h4 className="text-3xl font-black font-headline mb-6 relative z-10">建立在信任之上</h4>
                  <p className="text-xl opacity-60 leading-relaxed relative z-10">透明是我们的核心。清晰了解您的资金去向以及每项决策的依据。</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="card-lift p-16 rounded-[4rem] bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:border-primary transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "150px" }} />
                  <span className="material-symbols-outlined text-7xl text-primary mb-10 block group-hover:scale-110 transition-transform relative z-10">group</span>
                  <h4 className="text-3xl font-black font-headline mb-6 relative z-10">灵活且人性化</h4>
                  <p className="text-xl opacity-60 leading-relaxed relative z-10">有温度的 AI。我们能根据您的个人目标和当地季节性变化即时调整。</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="story-block bg-white/20 relative overflow-hidden" id="faq">
          <div className="organic-blob -bottom-40 -right-20 w-[600px] h-[600px] rounded-full" style={{ maskImage: "radial-gradient(circle, black, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
            <FadeUp>
              <h2 className="text-6xl font-black font-headline text-center mb-24 tracking-tighter">常见问题解答</h2>
            </FadeUp>
            <FaqAccordion />
            <FadeUp delay={0.2} className="mt-24 text-center">
              <button className="btn-press bg-primary text-on-primary px-16 py-8 rounded-full text-3xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/40">
                立即启动您的引擎
              </button>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-neutral-950 text-white rounded-t-[5rem] overflow-hidden relative z-10">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/assets/gold-pattern-texture.png')", backgroundSize: "300px" }} />
        <div className="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Image alt="红牛 Logo" className="object-contain" src="/assets/hongniu-logo-icon.png" width={64} height={64} />
              <span className="text-3xl font-black text-primary font-headline">红牛</span>
            </div>
            <p className="text-neutral-500 text-lg leading-relaxed font-headline">
              通过 AI 驱动的繁荣，为现代中国商家革新营销。
            </p>
          </div>
          <div>
            <h5 className="text-primary font-black text-xl mb-8 font-headline">导航</h5>
            <ul className="space-y-6 font-headline text-lg">
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#how-it-works">如何运作</a></li>
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#about">关于我们</a></li>
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#faq">常见问题</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-black text-xl mb-8 font-headline">法律</h5>
            <ul className="space-y-6 font-headline text-lg">
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#">隐私政策</a></li>
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#">服务条款</a></li>
              <li><a className="text-neutral-400 hover:text-primary transition-colors" href="#">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-black text-xl mb-8 font-headline">社交</h5>
            <div className="flex gap-6 mb-10">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chat</span>
              </div>
            </div>
            <p className="text-neutral-600 font-headline text-sm">
              &copy; 2026 红牛 AI。繁荣在行动。
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
