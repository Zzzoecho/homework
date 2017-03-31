### event.js 跨浏览器的事件兼容

<br>bindEvent 事件绑定，解决了作用域不相同this指向不同的问题，removeEvent解绑。对目标元素的获取(getTarget),取消默认事件(preventDefault),阻止冒泡(stopPaprogation)也做了兼容。
