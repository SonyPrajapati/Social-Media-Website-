var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

  function loadFile(event) {
    var file = event.target.files[0];

    if (!file) {
      return; // No file selected, do nothing
    }

    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      var previewContainer = document.getElementById('preview-container');
      previewContainer.innerHTML = ''; // Clear previous content

      if (file.type.startsWith('image')) {
        // For images, display the image using an img tag
        var image = new Image();
        image.src = e.target.result;
        image.alt = file.name;
        image.style.maxWidth = '100%';
        previewContainer.appendChild(image);
      } else if (file.type.startsWith('video')) {
        // For videos, display the video using a video tag
        var video = document.createElement('video');
        video.src = e.target.result;
        video.controls = true;
        video.style.maxWidth = '100%';
        previewContainer.appendChild(video);
      }
    };

    fileReader.readAsDataURL(file);
  }

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}