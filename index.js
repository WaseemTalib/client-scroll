var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    lastTop;

window.addEventListener('scroll', function(event) {
  var train = document.getElementById('trainMotion'),
      top = train.getBoundingClientRect().top,
      offset = top - windowHeight;

      if (offset > 0) {
        train.classList.remove('choochoo');
        return;
      }

      if (top < windowHeight / 2 && top > lastTop) {
        train.classList.remove('choochoo');
      }

      if (train.className.indexOf('choocho') === -1 && top < lastTop) {
        train.classList.add('choochoo');
      }

      lastTop = top;

});