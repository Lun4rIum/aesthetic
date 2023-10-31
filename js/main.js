
function fetchImage() {
    fetch('https://source.unsplash.com/1920x1080/?nature', {
      method: 'GET'
    })
      .then(response => response.blob())
      .then(data => {
        const imageUrl = URL.createObjectURL(data);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("image-container");
        container.appendChild(imageElement);
      })
      .catch(error => console.error(error));
  }

  function search(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);        
    }
}