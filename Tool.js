var Utils = {
	
	// 数字千位分割格式化
	format : function(number) {
		return String(number).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	}

};
