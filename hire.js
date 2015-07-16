/**
 * hire.js
 *
 * Copyright 2015 DigitalRev, ltd.
 *
 * Released under the MIT and GPL Licenses.
 *
 * ------------------------------------------------
 *  author:  Leon Li
 *  version: 1.0.0
 *  source:  http://github.com/digitalrev/hire.js
 */

class DigitalRevEngineer extends PassionateAboutCoding {
  let frontEndDeveloper = {};
  constructor() {
    frontEndDeveloper.responsibility = "负责DigitalRev新产品网站的前端开发（响应式布局）"
  }

  aboutUs() {
    return `充满好奇心，享受coding，学习能力强，有代码洁癖
    技术全面，对技术有热情，关注技术发展方向
    极强的责任心，追求完美的习惯，刨根问底的精神`;
  }

  skills() {
    frontEndDeveloper.skills = `

    - 必须熟练掌握HTML5、CSS3、JavaScript开发

    - 熟悉W3C标准与ES规范，熟悉Web语义化

    - 熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性

    - 熟练掌握响应式布局的各种技巧

    - 熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件

    - 熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题
    - 具有至少一门服务器端编程的实战经验

    - 具有性能优化经验

    - 熟悉各种常用设计模式和常用MV*框架

    - 有ReactJS, AngularJS经验者优先

    - 能熟练使用github管理项目和代码`;
  }

  benefit() {
    return `
    每年一次海外旅行
    每天的新鲜水果和无限供应可乐等饮料
    每周一次按摩，舒缓你疲劳的筋骨
    每年一次的iPhone购买津贴, 为你购买新一代iPhone保驾护航
    每年为你的私人旅行提供一定金额的补助
    新进门的小伙伴提供13寸Macbook Pro + 27"显示器 + Magic Mouse`;
  }

}
