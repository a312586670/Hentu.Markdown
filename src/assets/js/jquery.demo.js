/*!
 * http://julabs.com
 */
(function (factory) {
    if (typeof define === 'function') {
      // 如果define已被定义，模块化代码
        define(['jquery'], function(require,exports,moudles){
          factory(require('jquery')); // 初始化插件
          return jQuery; // 返回jQuery
        });
    } else {
      // 如果define没有被定义，正常执行jQuery
      factory(jQuery);
    }
}(function ($) {
    console.log('init');
    $.sayHello = function(){
      console.log("Hello");
    };
}));