var Utils = {
	
	// 数字千位分割格式化
	format : function(number) {
		return String(number).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	},
    // 随机颜色
    randomColor : function() {
        return '#' + Math.random().toString(16).substr(2, 6);
    },
    // 获取IE版本
    getIEVersion : function() {
        var v = 3,
            p = document.createElement('p'),
            all = p.getElementsByTagName('i');

        while (
            p.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]);

        return v > 4 ? v : 0;
    },
    // 是否是移动端
    isMobile : function() {
        return ('ontouchend' in document.body) || /mobile/i.test(navigator.userAgent);
    }
};
