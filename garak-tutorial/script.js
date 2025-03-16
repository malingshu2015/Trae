document.addEventListener('DOMContentLoaded', function() {
  // 导航切换功能
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('.content-section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // 更新导航激活状态
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      
      // 显示目标部分
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  // 标签页切换功能
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // 更新标签按钮激活状态
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 显示目标标签内容
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
    });
  });
  
  // 路线图项目点击功能
  const roadmapItems = document.querySelectorAll('.roadmap-item');
  
  roadmapItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-section');
      
      // 更新导航激活状态
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${targetSection}`) {
          link.classList.add('active');
        }
      });
      
      // 显示目标部分
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetSection) {
          section.classList.add('active');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
      
      // 更新路线图激活状态
      roadmapItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // 导航按钮功能
  const prevButtons = document.querySelectorAll('.prev-button');
  const nextButtons = document.querySelectorAll('.next-button');
  
  prevButtons.forEach(button => {
    button.addEventListener('click', function() {
      const prevSection = this.getAttribute('data-prev');
      
      // 更新导航激活状态
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${prevSection}`) {
          link.classList.add('active');
        }
      });
      
      // 显示目标部分
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === prevSection) {
          section.classList.add('active');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
      
      // 更新路线图激活状态
      roadmapItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === prevSection) {
          item.classList.add('active');
        }
      });
    });
  });
  
  nextButtons.forEach(button => {
    button.addEventListener('click', function() {
      const nextSection = this.getAttribute('data-next');
      
      // 更新导航激活状态
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${nextSection}`) {
          link.classList.add('active');
        }
      });
      
      // 显示目标部分
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === nextSection) {
          section.classList.add('active');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
      
      // 更新路线图激活状态
      roadmapItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === nextSection) {
          item.classList.add('active');
        }
      });
    });
  });
  
  // 代码块语法高亮（简化版）
  const codeBlocks = document.querySelectorAll('.code-block pre');
  
  codeBlocks.forEach(block => {
    let content = block.innerHTML;
    
    // 高亮注释
    content = content.replace(/(#.*|\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
    
    // 高亮关键字
    const keywords = ['import', 'from', 'def', 'class', 'return', 'if', 'else', 'for', 'while', 'try', 'except', 'with', 'as', 'in', 'not', 'and', 'or', 'True', 'False', 'None'];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      content = content.replace(regex, `<span class="keyword">${keyword}</span>`);
    });
    
    // 高亮字符串
    content = content.replace(/(['"])(.*?)\1/g, '<span class="string">$1$2$1</span>');
    
    // 高亮数字
    content = content.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    
    // 高亮函数
    content = content.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="function">$1</span>(');
    
    block.innerHTML = content;
  });
  
  // 添加复制代码按钮功能
  const codeContainers = document.querySelectorAll('.code-block');
  
  codeContainers.forEach(container => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i> 复制';
    container.appendChild(copyButton);
    
    copyButton.addEventListener('click', function() {
      const code = container.querySelector('pre').innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.innerHTML = '<i class="fas fa-check"></i> 已复制';
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fas fa-copy"></i> 复制';
        }, 2000);
      });
    });
  });
});