Page({
	data:{
		list:[
			{
				id: 'view',
				name: '视图容器',
				open: false,
				pages: ['view', 'scroll-view', 'swiper']
			}, 
			{
				id: 'feedback',
				name: '操作反馈',
				open: false,
				pages: ['action-sheet', 'modal', 'toast', 'loading']
			}, 
				open: false,
				pages: ['navigator']
			}, 
			{
				id: 'media',
				name: '媒体组件',
				open: false,
				pages: ['image', 'audio', 'video']
			}, 
			{
				id: 'map',
				name: '地图',
				pages: ['map']
			}, 
			{
				id: 'canvas',
				name: '画布',
				pages: ['canvas']
			}			
		]
	},
	widgetsToggle:function(e){
		var id = e.currentTarget.id, list = this.data.list;
		for(var i = 0;i<list.length;i++){
			if(id == list[i].id){
				list[i].open = !list[i].open
			}else{
				list[i].open = false
			}
		}
		this.setData({
			list:list
		})
	}
})