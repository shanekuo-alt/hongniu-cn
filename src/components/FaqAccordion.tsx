"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "红牛适合零基础的新手吗？",
    answer: "绝对适合。红牛专门为那些希望在不成为数字营销专家的情况下发展业务的店主设计。我们会为您处理所有复杂事项。",
    accent: false,
  },
  {
    question: "费用是多少？",
    answer: "红牛的营销计划生成完全免费。您只需在选择执行服务时才需付费，而且所有费用透明可见，绝无隐藏收费。",
    accent: true,
  },
  {
    question: "你们支持哪些平台？",
    answer: "红牛覆盖中国主流广告平台，包括微信、抖音、淘宝、美团、百度、小红书等。我们会根据您的行业和目标推荐最佳渠道组合。",
    accent: false,
  },
  {
    question: "我需要巨大的广告预算吗？",
    answer: "完全不需要。红牛专为小微企业设计，无论您的预算大小，我们都能为您制定最优的投放策略，让每一分钱发挥最大价值。",
    accent: false,
  },
];

const easing = [0.25, 0.46, 0.45, 0.94] as const;

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-surface-container-low/90 backdrop-blur-sm rounded-[2rem] p-4 hover:bg-surface-container transition-colors"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
            className={`w-full text-left p-6 md:p-8 flex items-center justify-between ${
              faq.accent ? "border-l-8 border-secondary-fixed" : ""
            }`}
          >
            <span className="text-2xl font-black font-headline">{faq.question}</span>
            <span
              className={`material-symbols-outlined transition-transform text-3xl ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: easing }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-8 pb-8 text-xl text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
