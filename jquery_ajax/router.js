
app.get('/loadmore', function(req, res) {
	var length = req.query.length
	var index= req.query.start
	var ret = []
	
	for(var i=0; i<length; i++){
		ret.push('内容' + ( i + parseInt(index)) )
	}
	res.send(ret) 
})
	
