let url='https://jsonplaceholder.typicode.com/posts'
async function FetchUrl(){
    let response=await fetch(url)
    let data=await response.json()
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var mainContainer = document.getElementById("container");
        var div = document.createElement("div");
        div.innerHTML = `Title ${i+1}: ` + data[i].title;
        mainContainer.appendChild(div);
      }
}
FetchUrl()
// ReactDOM.render(<FetchUrl/>, document.getElementById("container"))