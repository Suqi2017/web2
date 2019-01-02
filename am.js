function animate(obj,json,callback){
     		clearInterval(obj.time);
     		obj.time = setInterval(function(){
     			var isStop =true;

     			for (var attr in json){
     				if(attr == 'opacity'){
     				var now = parseInt(getStyle(obj,attr)*100);
     			    } else
     			    var now = parseInt(getStyle(obj,attr));

     		        var speed = ((json[attr]-now)/5);
     		        speed = speed>0?Math.ceil(speed):Math.floor(speed);
     		        if(attr=="opacity"){
     		            obj.style[attr] = (now +speed)/100;
     		        } 
     		        else
     		        	obj.style[attr] = now +speed +'px';
     		        var current = now +speed;
     		        if(json[attr]!=current){
     		        	isStop = false
     		        }
     			}
     			if(isStop){
     				clearInterval(obj.time)
     				callback&&callback();
     			}
     		    

     	}, 100);     	    		
     }
    
    function getStyle(obj,style){
        if(getComputedStyle(obj)){    //判断兼容性
            return getComputedStyle(obj)[style];
        }else{
            obj.currentStyle[style];
        }
    }
    window.onload = function(){
        var sq0 = document.getElementsByClassName('sq0')[0];
        window.onscroll = function(){
            var st = document.documentElement.scrollTop ||document.body.scrollTop;
            if(st > 180){
                sq0.style.position = 'fixed'
            }else{
                sq0.style.position = 'static'
            }
        }
    }


    
