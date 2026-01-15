import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-4xl font-serif italic mb-6 text-amber-300">Q & A</h2>
            <h3 className="text-3xl font-bold mb-4">感谢您的聆听</h3>
            <p className="text-teal-100 text-lg mb-8">
              体轻代谢抗衰中心<br/>
              让健康成为一种生活方式
            </p>
            <button className="bg-amber-400 text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-amber-300 transition-colors">
              立即预约考察
            </button>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <h4 className="text-xl font-bold mb-6">招商联系方式</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-amber-400 mr-4" size={20} />
                <span>+86 1XX XXXX XXXX (招商部)</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-amber-400 mr-4" size={20} />
                <span>partners@bodylightness.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-amber-400 mr-4" size={20} />
                <span>上海市 XX区 XX路 高端医疗产业园</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-teal-400">
          <p>&copy; 2024 体轻代谢抗衰中心. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;