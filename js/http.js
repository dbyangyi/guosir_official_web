
 function infoCommit(param){
     let judge = JSON.parse(param)
     if(judge.tel==''){
        alert('请先填写联系方式！')
        return
     }
     if(judge.name==''){
        alert('请先填写联系人！')
        return
     }
    alert('提交成功！')
    $.ajax({
        url:"http://118.31.122.91:18353/userInfo/saveUserInfo", 
           //用作跨域的url
        dataType:"json",    
        type:'post',
        data:param ,
            headers: { 
                    'Content-Type': 'application/json;charset=UTF-8'  //multipart/form-data;boundary=--xxxxxxx   application/json
                },               //jsonp类型
        success:function (data) {
            console.log(data)
        }
    })
}