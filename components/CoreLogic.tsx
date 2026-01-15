import React from 'react';
import { User, Infinity, History, Flower, TestTube2, Sparkles, Zap, Utensils } from 'lucide-react';
import { FeatureCard, PainPoint } from '../types';

const CoreLogic: React.FC = () => {
  const triangleFeatures: FeatureCard[] = [
    {
      title: '形体 (Body Shape)',
      description: '外在表现',
      items: ['非手术体雕', '体态矫正', '溶脂+紧致'],
      icon: User,
    },
    {
      title: '代谢 (Metabolism)',
      description: '核心总开关',
      items: ['基础/糖/脂/能量代谢', '中西医联合干预', '内脏功能调理'],
      icon: Infinity,
    },
    {
      title: '抗衰 (Anti-Aging)',
      description: '内在机能',
      items: ['细胞修复', '脏腑调理', '延缓衰老进程'],
      icon: History,
    },
  ];

  const painPoints: PainPoint[] = [
    {
      issue: '传统减肥反弹',
      description: '节食导致代谢损伤，反复复胖。',
      solution: '中医调理脏腑 + 西医提升代谢率，打破"节食-反弹"恶性循环。',
    },
    {
      issue: '手术形体风险高',
      description: '抽脂、隆胸存在麻醉与并发症风险。',
      solution: '非侵入式体雕技术（体雕针+悦己背），安全替代手术。',
    },
    {
      issue: '抗衰效果短暂',
      description: '医美填充代谢快，效果维持时间短。',
      solution: '代谢优化延长医美周期，促进胶原蛋白再生。',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">项目逻辑框架：三角模型</h2>
          <p className="mt-4 text-slate-600">中西融合，构建 "代谢-形体-抗衰" 稳态结构</p>
        </div>

        {/* Triangle Model Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent -z-10"></div>
          
          {triangleFeatures.map((feature, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-t-4 ${index === 1 ? 'border-amber-400 transform md:-translate-y-4' : 'border-teal-500'}`}>
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-center text-teal-600 font-medium mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600 justify-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* TCM vs West Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center mb-6">
              <Flower className="text-teal-600 mr-3" size={28} />
              <h3 className="text-xl font-bold text-slate-900">中医视角：调"本"</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4">核心理念：代谢与"气血"、"脏腑功能"密切相关。</p>
            <div className="space-y-3">
              <div className="bg-teal-50 p-4 rounded-lg">
                <span className="font-bold text-teal-800 block mb-1">脾虚</span>
                <span className="text-sm text-slate-600">导致痰湿堆积 (虚胖)</span>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <span className="font-bold text-teal-800 block mb-1">肝郁</span>
                <span className="text-sm text-slate-600">影响脂肪代谢 (压力肥)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center mb-6">
              <TestTube2 className="text-teal-600 mr-3" size={28} />
              <h3 className="text-xl font-bold text-slate-900">西医视角：治"标"与"据"</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4">核心理念：代谢涉及生化指标与激素水平。</p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <span className="font-bold text-blue-800 block mb-1">基础代谢率 (BMR)</span>
                <span className="text-sm text-slate-600">调节能量消耗基准</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <span className="font-bold text-blue-800 block mb-1">激素平衡</span>
                <span className="text-sm text-slate-600">胰岛素敏感性优化，防肌肉流失</span>
              </div>
            </div>
          </div>
        </div>

        {/* Management Pillars */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-10">轻体代谢健康管理体系</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Sparkles, title: "1. 基础代谢 (净化)", items: ["舒和净肝", "FIR环境毒素净化", "GID深层净化"] },
                    { icon: Utensils, title: "2. 糖代谢 (抗糖)", items: ["肽享瘦", "血糖稳态管理", "胰岛素抵抗干预"] },
                    { icon: User, title: "3. 脂代谢 (塑形)", items: ["清脂代谢疗法", "医学营养管理", "非手术体雕"] },
                    { icon: Zap, title: "4. 能量代谢 (抗衰)", items: ["气血针 (中医能量)", "NAD+ (细胞能量)", "黄金抗氧化"] },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                        <item.icon className="text-teal-500 mb-4" size={28} />
                        <h4 className="font-bold text-lg mb-3 text-slate-900">{item.title}</h4>
                        <ul className="space-y-2">
                            {item.items.map((sub, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-start">
                                    <span className="text-teal-400 mr-2">•</span>{sub}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* Pain Points Solutions Table */}
        <div className="bg-teal-900 rounded-2xl overflow-hidden shadow-xl text-white">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">用户痛点转化与解决方案</h3>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center border-b border-teal-800 pb-6 last:border-0 last:pb-0">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h4 className="font-bold text-lg text-amber-400 mb-1">{point.issue}</h4>
                    <p className="text-teal-200 text-sm">{point.description}</p>
                  </div>
                  <div className="hidden md:block mx-4 text-teal-600">→</div>
                  <div className="md:w-2/3 pl-0 md:pl-4 border-l-0 md:border-l border-teal-800">
                    <p className="text-white font-medium">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreLogic;