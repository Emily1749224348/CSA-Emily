let searchText = document.querySelector("#searchText");
let button = document.querySelector("#updateButton");
let result = document.querySelector(".innertext");
let recommend = document.querySelector(".recommend");
console.log(searchText);
//console.log(button);
console.log(result);
console.log(button);

let tapMap = {
  'search':result,
  'recommend': recommend
};

let method = {
  'search': function(arr,str){
     add_item(arr,tapMap[str],str)
    
    
  },
  'recommend' :  function(arr,str){
    add_item(arr,tapMap[str],str) ;
    }
}

let call = {
  'search':function(obj){ 
    let newItem = document.createElement('box');
      newItem.innerHTML =  `<div class='searchResult'>
                         
                          <div class="itemText"><h4>${obj.name}</h4>
                          <p>${obj.ar[0].name}</p>
                          <p>${obj.al.name}</p>
                          </div>
                  </div>`;
      return newItem

  },
  'recommend':function(obj){ 
     let newItem = document.createElement('box');
    newItem.innerHTML = `<div class='item'>
                          <div class="itemPic"><img src="${obj.picUrl}"></div>
                          <div class="itemText"><h4>${obj.name}</h4>
                          <p>播放量${obj.playCount}</p>
                          </div>
                          </div>
                          `;
    return newItem
  }
}


searchText.addEventListener("keydown",function(e){
 
    if(e.code == 'Enter'){
       //获取搜索内容
    let search = searchText.value;
    const xhr = new XMLHttpRequest();
  //2.初始化 设置请求方法和url
     xhr.open("GET",`http://localhost:3000/cloudsearch?keywords=${search}&limit=30&offset=10`);
  //3.发送
     xhr.send();
 
     xhr.onreadystatechange = function(){
      //判断 （服务端返回了所有结果）
     if(xhr.readyState === 4 ){
        //判断响应状态码 200 404 403 401 500
        //2开头就表示成功
      if(xhr.status>=200 && xhr.status<300){
          //处理结果
          let re = JSON.parse(xhr.response);
        //   result.innerText = re.name;
          console.log(re);
          method['search'](re.result.songs,'search');
        
      }else{
          result.innerText = 'failed';
      }
    }
  }
    }
})

button.addEventListener('click',function(){
    var number = Math.floor(Math.random()*10) + 1;
    number = 2;

    const xhr = new XMLHttpRequest();
  //2.初始化 设置请求方法和url
     xhr.open("GET",`https://api.hanling.space/personalized`);
  //3.发送
     xhr.send();
 
     xhr.onreadystatechange = function(){
      //判断 （服务端返回了所有结果）
     if(xhr.readyState === 4 ){
        //判断响应状态码 200 404 403 401 500
        //2开头就表示成功
      if(xhr.status>=200 && xhr.status<300){
          //处理结果
          let re = JSON.parse(xhr.response);
        //   result.innerText = re.name;
         // recommend.innerText = re;
        console.log(re);
        method['recommend'](re.result,'recommend');
          
        
      }else{
          result.innerText = 'failed';
      }
    }
  }
    }

);

function create_item(obj){
    let newItem = document.createElement('box');
   // let item_pic = document.createElement('img');
    // new_item.innerHTML = `<div class='item'>
    //                       <div class="itemPic"><img src="${obj.al.picUrl}"></div>
    //                       <div class="itemText"><h4>${obj.name}</h4>
    //                       <p>${obj.ar[0].name}</p>
    //                       </div>
    //                       </div>
    //                       `;
    
    newItem.innerHTML = `<div class='item'>
                          <div class="itemPic"><img src="${obj.al.picUrl}"></div>
                          <div class="itemText"><h4>${obj.name}</h4>
                          <p>${obj.ar[0].name}</p>
                          </div>
                  </div>`;
    return newItem
}

function add_item(arr,target,str){
  target.innerText = '';
  for(let i = 0; i<arr.length; i++){
    var newItem = call[str](arr[i]);
    target.append(newItem);
  }
}
