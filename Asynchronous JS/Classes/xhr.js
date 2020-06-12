var xhr = new XMLHttpRequest();

// (method, url)
xhr.open('GET', 'https://api.github.com/users/HumbertoTello')
xhr.send(null);

xhr.onreadystatechange = function() {
  // 4 = response
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}