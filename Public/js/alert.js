			$(".form_input_inner_btn.font_normal").on('click',function(){
				show_alert();
			});
			$(".alert_box_inner .header .right span").on("click",function(){
				$(".alert_box_div").addClass("hidden");
			});
			$(".alert_close").on("click",function(){
				$(".alert_box_div").addClass("hidden");
			});
			function show_alert(){
				$(".alert_box_div").removeClass("hidden");
				var height=$(document).height();
				$(".alert_box_div").height(height);
			}