"use strict";jQuery(function(n){var l,s,i,a,t,e=n(".classify_product_ul"),o=n("#page"),c=n(".classify_form s"),r=n(".classify_product_page_len"),p=!0,d=!0,f=n(".classify_product_sort"),g=1,_=60;function u(s){var i={currentPage:g,qty:_},a=Object.assign({},i,s);n.ajax({type:"GET",dataType:"json",url:"../api/goodsList.php",data:a,success:function(s){var i,a;e.html(""),o.html(""),g=s.currentPage,i=s.data,n.each(i,function(s,i){var a='<li data-gid="'+i.gid+'" data-fromName="goodslist">\n                            <a href="#" target="_blank">\n                                <img class="imgGods" alt="'+i.godsName+'" src="../'+i.url+'"></a>\n                            <p class="classify_price">\n                                <span><label>￥</label>'+i.price+'</span>\n                            </p>\n                            <p class="classify_name">\n                                <a href="#" target="_blank" title="'+i.godsName+'">\n                                '+i.godsName+'</a>\n                            </p>\n                            <p class="classify_sales">每满299减30\n                            </p>\n                            <p class="classify_comment wide_f_hot_level">\n                                <i class="level_9"></i>\n                                <span>有<label><a target="_blank" href="#">'+i.commentQty+'</a></label>条评论</span>\n                            </p>\n                            <p class="classify_corner">\n                            </p>\n                            <p class="classify_btn">\n                                <span imgSrc="../'+i.url+'" ><i class="classify_shopping"></i>加入购物车</span>\n                                <a><span><i class="classify_collect"></i>收藏</span><label><i class="classify_collect"></i>已收藏</label></a>\n                            </p>\n                        </li>';e.append(a)}),a=n(".classify_btn>span"),n(a).on("click",function(s){var i=n('<img src="'+n(this).attr("imgSrc")+'" width="20" height="20">');i.css({position:"fixed",left:s.clientX,top:s.clientY,"z-index":"200000",width:"20px",height:"20px",display:"block"}),i.appendTo(n(this));var a=n(".pf_right_5");return console.log(a.offset()),i.animate({left:"1359px",top:"591px"},800,function(){var s=n(this).closest("li").attr("data-gid");console.log(s),i.remove(),getUid(s,{qty:1,gid:s})}),!1}),function(s){l=Math.ceil(s.len/s.qty);for(var i=1;i<=l;i++){var a=n("<li/>");a.html(i),o.append(a),i==s.currentPage&&a.addClass("classify_active")}c.html(l),r.html("<s>"+s.currentPage+"</s>/"+l)}(s),o.find("li").click(function(){g=n(this).html(),m()}),e.on("click","li .imgGods,li .classify_name",function(){var s=n(this).closest("li").attr("data-gid"),i=n(this).closest("li").attr("data-fromName");return location.href="goodsDetails.html?gid="+s+"&fromName="+i,!1})}})}function m(){switch(!0){case"sort_xl"==f.filter(".on").attr("id"):p=!0,h();break;case"sort_jg"==f.filter(".on").attr("id"):d=!0,x();break;case"sort_xl"==f.filter(".on_l").attr("id"):p=!1,h();break;case"sort_jg"==f.filter(".on_l").attr("id"):d=!1,x();break;default:b()}}function b(s){n(s).siblings("a").find("i").css("background-position","0px -917px"),u()}function h(s){if(p){var i={fieldName:"sell",sort:"desc"};n(s).find("i").css("background-position","0px -917px"),n(s).siblings("a").find("i").css("background-position","0px -917px"),n(s).addClass("on").removeClass("on_l").siblings().removeClass("on on_l")}else{i={fieldName:"sell"};n(s).find("i").css("background-position","-230px -917px"),n(s).siblings("a").find("i").css("background-position","0px -917px"),n(s).addClass("on_l").removeClass("on").siblings().removeClass("on_l on")}u(i),p=!p}function x(s){if(d){var i={fieldName:"price",sort:"desc"};n(s).find("i").css("background-position","0px -917px"),n(s).siblings("a").find("i").css("background-position","0px -917px"),n(s).addClass("on").removeClass("on_l").siblings().removeClass("on on_l")}else{i={fieldName:"price"};n(s).find("i").css("background-position","-230px -917px"),n(s).siblings("a").find("i").css("background-position","0px -917px"),n(s).addClass("on_l").removeClass("on").siblings().removeClass("on_l on")}u(i),d=!d}u(),s=n(".classify_prev,.classify_product_page_prev"),i=n(".classify_next,.classify_product_page_next"),s.click(function(s){1<g&&(g--,m())}),i.click(function(s){g<l&&(g++,m())}),a=n(".classify_pager_btn"),t=n(".classify_input"),a.click(function(){var s=1*t.val().trim();Number.isInteger(s)&&1<=s&&s<=l&&(g=s,m())}),f.click(function(){console.log(g);var s=n(this).index();0==s?b(this):1==s?h(this):2==s&&x(this)})});