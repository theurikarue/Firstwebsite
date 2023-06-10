function uploadFiles() {
    var fileInput = document.getElementById('fileInput');
    var files = fileInput.files;
  
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('files[]', files[i]);
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php');
    xhr.upload.addEventListener('progress', function(event) {
      var progress = Math.round((event.loaded / event.total) * 100);
      document.getElementById('progress').innerHTML = 'Uploading: ' + progress + '%';
    });
  
    xhr.onload = function() {
      document.getElementById('status').innerHTML = 'Upload complete!';
    };
  
    xhr.send(formData);
  }
  
