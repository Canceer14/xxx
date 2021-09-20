function upTop() {
  const button = $('.up-top');
  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 300)
  })
}

upTop();

function downContact() {
  const buttonDown = $('.contact');
  $(window).on('scroll', () => {
    if ($(this).scrollTop() <= 2400) {
      buttonDown.fadeIn();
    } else {
      buttonDown.fadeOut();
    }
  });
  buttonDown.on('click', (d) => {
    d.preventDefault();
    $('html').animate({ scrollTop: 3100 }, 200)
  })
}

downContact();


