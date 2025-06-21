$(function () {

  const path = location.pathname.split("/").pop() || 'index.html';
  $('nav a').each(function () {
    if ($(this).attr('href') === path) $(this).addClass('active');
  });

  $(window).on('scroll', function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

  $('nav a').on('click', function (e) {
    if (this.hash) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - $('header').outerHeight()
      }, 600);
    }
  });

 $('.menu-toggle').on('click', function () {
  $('#mainMenu').toggleClass('menu-open');
});
 $('<div></div>').html(`<p>${full}</p>`).dialog({
  title: 'Детальніше',
  modal: true,
  width: Math.min($(window).width() * 0.9, 600), 
  maxHeight: $(window).height() * 0.8,
  buttons: {
    Закрити() {
      $(this).dialog('close');
    }
  },
  open() {
    $('.ui-dialog-titlebar').css({
      'background': 'var(--clr-primary)', 'color': '#fff'
    });
  },
  close() { $(this).remove(); }
});
