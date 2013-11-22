//version 1.0.0
//rizqehalaal.com simple multi selector
function baseUrl() {
   var href = window.location.href.split('/');
   return href[0]+'//'+href[2]+'/liappraisal/';
}
$(".mselect").live("click",function(){
	$(this).css({
	   'background-color' : '#FFFFCC',
	   'color' : '#000',
	});
	var text=$(this).attr("name");
	var id=$(this).attr("value");
	$(this).fadeOut("slow",function (){
			$(this).remove();
			jQuery('<li/>',{
			id:'deselect'+$(this).attr("value"),
			class:'deselect',
			name: text,
			value:id,
			text: text
				}).appendTo('#selected');
			$(this).remove();
			jQuery('<input/>',{
			id:'inptselect'+id,
			name: 'input_select[]',
			type:'hidden',
			value:$(this).attr("value")
				}).appendTo('#deselect'+id);
		});
	});
$(".deselect").live("click",function (){
	var text=$(this).attr("name");
	var id=$(this).attr("value");
	$(this).fadeOut("slow",function (){
		$(this).remove();
		 var li=jQuery('<li/>',{
		id:'mselect'+$(this).attr("value"),
		class:'mselect',
		name: text,
		value:id,
		text: text
			});
			$("#select").prepend(li);
		});
	});
