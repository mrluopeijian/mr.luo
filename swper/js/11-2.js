(function($){
	var $parent =null
	var num=0
	function rili(){
		$parent = this;
		$parent.html(createUl());
		time();
		createDate()
		clicks()
	}
	function createUl(){
		var str =`
			<div class="header">
				<span id="date"></span>
			</div>
			<div class="header">
				<div style="float: left" id="le"><<</div>
				<span id="dates"></span>
				<div style="float: right" id="ri">>></div>
			</div>
			<ul>
				<li>日</li>
				<li>一</li>
				<li>二</th>
				<li>三</li>
				<li>四</li>
				<li>五</th>
				<li>六</li>
			</ul>
			<ul class="conent"></ul>
		`;
		
		
		return str
	}
	function time (){
		function fn(){
			var dates = $parent.find('#date')
			var date = new Date()
			var year = date.getFullYear();
			var mon = date.getMonth()+1;
			var Day = date.getDate();
			var second1 = date.getHours();
			var second2 = date.getMinutes();
			var second3 = date.getSeconds();
			dates.html(year+'-'+mon+'-'+Day+" "+lintime(second1)+":"+lintime(second2)+":"+lintime(second3));
		}
		fn();
		setInterval(fn,1000)
		
	}
	function lintime(n){
		return n<10?'0'+n:n
	}
	function createDate(){
		var conents = $parent.find('.conent')
		conents.html = ''
		var date = new Date()
		date.setDate(1);  
		date.setMonth(date.getMonth()+num)
		var week = date.getDay()
		date.setDate(0)
		var prew = date.getDate()
		for(var i=prew-week;i<prew;i++){
			var lis = $("<li class='huihui'>"+(i+1)+"</li>")
			conents.append(lis)
		}
		var date = new Date()  
		date.setMonth(date.getMonth()+num)
		var year = date.getFullYear()
		
		var m =date.getMonth()+1;
		$("#dates").html(year+"年"+m+"月")
		date.setMonth(m)
		date.setDate(0)
		var nowDate = date.getDate()
		for(var i=0;i<nowDate;i++){
			var lis = $("<li>"+(1+i)+"</li>")
			conents.append(lis)
		}
		var totol = 35
		var length = conents.find('li')
		for(var i=0;i<totol-length.length;i++){
			var lis = $("<li class='huihui'>"+(1+i)+"</li>")
			conents.append(lis)
		}
	}
	function clicks(){
		var lefts = $parent.find("#le")
		var rigths = $parent.find("#ri")
		lefts.click(function(){
			num-=1
		})
		rigths.click(function(){
			num+=1
		})
	}
	$.fn.extend({
		rili
	})
})($)
