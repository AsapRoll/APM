import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, HeartPulse, Scale, Droplet, AlertTriangle } from 'lucide-react';
import { StatItem } from '../types';

const MarketSection: React.FC = () => {
  const chartData = [
    { name: '中国市场', value: 154, color: '#2dd4bf' }, // teal-400
    { name: '全球市场', value: 1346, color: '#0d9488' }, // teal-600
  ];

  const stats: StatItem[] = [
    {
      label: '代谢综合症',
      value: '10亿+',
      subtext: '全球患者，中国发病率31.1%',
      icon: Activity,
    },
    {
      label: '肥胖症',
      value: '6.5亿',
      subtext: '全球肥胖，中国超5亿超重',
      icon: Scale,
    },
    {
      label: '高血压',
      value: '3亿',
      subtext: '中国患病人数，发病率27.5%',
      icon: HeartPulse,
    },
    {
      label: '2型糖尿病',
      value: '13.67%',
      subtext: '中国患病率，超2.23亿患者',
      icon: Droplet,
    },
    {
      label: '高脂血症',
      value: '1.6亿',
      subtext: '中国患病人数，心血管风险剧增',
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold text-lg uppercase tracking-wide">PART 1</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto my-3"></div>
          <h3 className="text-3xl font-bold text-slate-900">品项逻辑与市场洞察</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            代谢是健康的基石。随着生活方式的改变，代谢综合症已成为全球性健康挑战。从体重管理到慢病预防，数亿人群的刚性需求构成了巨大的蓝海市场。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <stat.icon size={24} />
              </div>
              <h4 className="text-slate-800 font-bold mb-1">{stat.label}</h4>
              <div className="text-3xl font-extrabold text-teal-600 mb-2">{stat.value}</div>
              <p className="text-xs text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Market Size & Trend */}
        <div className="bg-teal-50 rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">代谢性疾病市场规模基础</h3>
              <p className="text-slate-600 mb-6">
                2023年代谢性疾病药物市场规模显示出惊人的增长潜力。中国市场虽起步较晚，但增速迅猛。
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-400 shadow-sm">
                <h4 className="font-bold text-teal-800 mb-2">未来趋势洞察</h4>
                <p className="text-sm text-slate-600">
                  虽然目前以药物治疗为主流，但未来的趋势一定是：
                  <span className="font-bold text-teal-700 block mt-2">中西医结合 + 细胞修复 + 生活方式干预</span>
                </p>
              </div>
            </div>
            
            <div className="h-80 bg-white rounded-xl p-4 shadow-inner">
              <div className="text-center text-sm text-slate-500 mb-4">2023年市场规模 (单位：亿美元)</div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" tick={{fill: '#475569'}} width={80} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;