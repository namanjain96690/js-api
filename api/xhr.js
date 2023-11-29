 const req=new XMLHttpRequest();
req.onload= function(){
    console.log("all done with request");
    let data= JSON.parse(this.responseText);
    console.log(data.url);
}
req.onerror= function(){
    console.log("error")
    console.log(this);
}

req.open('GET', 'https://api.tvmaze.com/singlesearch/shows?q=girls')
req.send()