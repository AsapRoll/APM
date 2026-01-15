import React from 'react';
import { Filter, Flame, TrendingUp, Crown, Share2, Users, MapPin } from 'lucide-react';
import { ProductTier } from '../types';

const BusinessModel: React.FC = () => {
  const products: ProductTier[] = [
    {
      title: '引流款',
      subtitle: '代谢健康初筛包',
      features: ['中医体质辨识', '西医代谢检测', '代谢风险报告', '低门槛高价值'],
      type: 'traffic',
    },
    {
      title: '爆款',
      subtitle: '28天轻体塑形计划',
      features: ['中医轻养方案', '西医代谢调节', '每日运动指导', '快速见效口碑'],
      type: 'hot',
    },
    {
      title: '利润款',
      subtitle: '代谢抗衰年卡',
      features: ['季度代谢检测', '月度非手术体雕', '中医抗衰调理', '长期深度绑定'],
      type: 'profit',
    },
    {
      title: '高客单',
      subtitle: '不老轻体VIP定制',
      features: ['私人医生服务', '年度代谢管理', '干细胞+海外轻体', '高端圈层服务'],
      type: 'high',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'traffic': return <Filter className="text-blue-500" />;
      case 'hot': return <Flame className="text-red-500" />;
      case 'profit': return <TrendingUp className="text-green-500" />;
      case 'high': return <Crown className="text-amber-500" />;
      default: return null;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'traffic': return 'border-blue-200 bg-blue-50';
      case 'hot': return 'border-red-200 bg-red-50';
      case 'profit': return 'border-green-200 bg-green-50';
      case 'high': return 'border-amber-200 bg-amber-50';
      default: return 'border-slate-200 bg-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold text-lg uppercase tracking-wide">PART 2</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto my-3"></div>
          <h3 className="text-3xl font-bold text-slate-900">商业模式与产品矩阵</h3>
          <p className="mt-4 text-slate-600">拓 · 留 · 锁 · 升：全链路升单逻辑</p>
        </div>

        {/* Product Ladder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {products.map((product, index) => (
            <div key={index} className={`rounded-2xl p-6 border-2 transition-transform hover:-translate-y-2 ${getColor(product.type)}`}>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4">
                {getIcon(product.type)}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-1">{product.title}</h4>
              <h5 className="text-sm font-semibold text-slate-600 mb-4 h-10">{product.subtitle}</h5>
              <div className="w-full h-px bg-slate-200 mb-4"></div>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2 text-teal-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marketing Strategy */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">营销规划：全域流量闭环</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Share2 className="text-teal-600 mr-3" size={28} />
                <h4 className="text-xl font-bold text-teal-800">线上：内容矩阵引流 (公域)</h4>
              </div>
              <div className="pl-10 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-bold text-slate-800 block mb-1">平台策略</span>
                  <p className="text-sm text-slate-600">聚焦小红书/抖音，打造"代谢管理专家"IP，建立专业信任感。</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-bold text-slate-800 block mb-1">内容方向</span>
                  <p className="text-sm text-slate-600">发布"易胖体质自测"、"舌苔看代谢"等科普视频，直击痛点，引导私信咨询。</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Users className="text-teal-600 mr-3" size={28} />
                <h4 className="text-xl font-bold text-teal-800">线下：体验沙龙转化 (私域)</h4>
              </div>
              <div className="pl-10 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-bold text-slate-800 block mb-1">活动策划</span>
                  <p className="text-sm text-slate-600">举办"代谢健康公益筛查日"，利用引流款(初筛包)邀约到店，现场体验。</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-bold text-slate-800 block mb-1">异业联盟</span>
                  <p className="text-sm text-slate-600">与瑜伽馆、高端健身房合作，置换客户资源，精准获客。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessModel;