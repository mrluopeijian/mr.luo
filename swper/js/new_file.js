
(function(Sizzle){
	
	function Pl(name){
		this.elements = Sizzle(name);	
	}	
	Pl.prototype.css = function(attr,value){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].style[attr] = value;
		}
		return this;
	}
	Pl.prototype.click = function(fn){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].onclick = fn;
		}
	}
	
	Pl.prototype.eq = function(num){
		this.elements = [this.elements[num]]
		return this
	}
	window.$ = window.jQuery = function(name){
		//
		var oName = name.nodeName
		if(oName){
			oName = oName.toLowerCase()
			num++;
			var n = "asd"+num
			name.setAttribute(n,"1")
			return new Pl(oName='['+n+'=1]')
		}else{
			return new Pl(name);
		}
		
	}
	
})(Sizzle)