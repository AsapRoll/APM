import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Medical Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-300 bg-teal-900/50 text-teal-100 text-xs font-medium mb-6 backdrop-blur-sm">
            <span>品项逻辑 + 营销推广 + 全案招商</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
            <span className="block">体轻代谢抗衰中心</span>
            <span className="block text-teal-200 text-2xl sm:text-3xl mt-2 font-light">Body Lightness Metabolic Anti-Aging Center</span>
          </h1>
          <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg text-teal-100 sm:max-w-3xl">
            核心价值：代谢为基，健康即美。将"内在代谢健康"作为"外在形体与容颜美"的科学根基，提供从内到外的多学科整合医疗解决方案。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#business"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg-teal-50 md:text-lg transition-all flex items-center justify-center"
            >
              了解商业模式
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#market"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:text-lg transition-all"
            >
              市场数据洞察
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;