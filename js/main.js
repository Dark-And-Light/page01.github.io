window.onload = function(){
    var oAdUl = document.getElementById('ad_pic');
    var adPrev = document.getElementById('adPrev');
    var adNext = document.getElementById('adNext');
    var oSocrollUl = document.getElementById('socroll_ul');
    var AdPicArr = ['./image/banner/1.png','./image/banner/2.png','./image/banner/3.png']
    function tabAdPic(){
        for(let i = 0 ;i<AdPicArr.length;i++){
            let li = document.createElement('li');
            li.innerHTML = '<img src="'+AdPicArr[i]+'" alt="'+i+1+'">'
            if(oAdUl.children[0]){
                oAdUl.insertBefore(li,oAdUl.children[0]);
            }else{
                oAdUl.appendChild(li)
            }
        }
        let oLi = oAdUl.getElementsByTagName('li');
        var i = 0;
        var zIndex = 1;
        var timer = setInterval(function(){
            i++;
            if(i>=oLi.length-1){
                i=0;
            }
            oLi[i].style.zIndex = zIndex++;

        },3000);
        clickTba(timer,oLi);
    }
    tabAdPic();

    function scrollPic(){
        
    }
}