function switchToDarkTheme() {
  console.log("switchClick");
  document.body.style.background = "radial-gradient(circle, rgba(220, 173, 30, 1) 10%, rgb(0, 0, 0) 85%)";
}

// const doThing = ()=>{
//     event.preventDefault();
//     const formDoc = document.getElementsByClassName("detailsForm")[0];
//     const title = document.getElementById('Title');
//     console.log(formDoc,title);
//     alert("submitted");
// }
document.addEventListener("DOMContentLoaded",
  () => {
    const doThing = (event) => {
      event.preventDefault();

      const formDoc = document.getElementsByClassName("detailsForm")[0];
      const title = document.getElementById('Title').value;
      const cName = document.getElementById('ChannelName').value;
      const views = document.getElementById('NumberOfViews').value;
      const date = document.getElementById('postDate').value;
      const duration = document.getElementById('duration').value;
      // <img src="https://picsum.photos/${imgSize()}/${imgSize()}" alt="missing">
      document.getElementsByClassName("playlist")[0].insertAdjacentHTML(
        "beforeend",
        `<div class="video">
        <div class="thumbnail">
            
            <img src="https://picsum.photos/200/300/?random=${Math.random()}" alt="missing">
        </div>
        <div class="title">
          ${title}
        </div>
        <div class="details">
          <div class="hello">${cName}</div>
          <div class="hello">${views} views</div>
          <div class="hello">${date}</div>
        </div>
      </div>`
      )
    };
    document.getElementById('submitButton').onclick = doThing;
    document.getElementById('clearButtom').onclick = ()=>{
      location.reload();
    }
  }
)


const imgSize = () => {
  return Math.floor(Math.random() * 100 + 200);
}