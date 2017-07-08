/**
 * H5图片预加载
 * @参数配置：
 *   time:        {number} 	单位时间（毫秒）后取消预加载，防止图片死链接导致无法进入页面
 *   img:         {array} 	存放需要提前加载的图片链接
 *   callback:    {function} 	预加载完成后的回调函数  
 * @authors Longchan
 */

(function(window) {

	function Preload(opt) {
		this.setting = opt;
		this.img = this.setting.img;
		this.key = !1;
		this.time = this.setting.time || 3000;

		this.init();
	}

	Preload.prototype = {
		load: function(num) {
			var fn = this.setting.callback;
			"100%" == num && 0 == this.key && (this.key = !0, fn && fn());
		},
		init: function() {
			var _this = this;
			var arr_pics = _this.img,
				start = '0%',
				n = 0,
				len = arr_pics.length;

			arr_pics.forEach(function(val) {
				var oImg = new Image;
				oImg.onload = function() {
					_this.n++, _this.start = (n / len * 100).toFixed(0) + "%", _this.load(start)
				};
				oImg.src = val;
			}), setTimeout(function() {
				_this.load("100%")
			}, _this.time);
		}
	};

	window.Preload = Preload;

})(this);
