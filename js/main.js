(function() {
  $.noty.defaults = {
    layout: 'bottomRight',
    theme: 'defaultTheme', // or 'relax'
    type: 'success',
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
      open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
      close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
      easing: 'swing',
      speed: 500 // opening & closing animation speed
    },
    timeout: 5000, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show
    closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
    callback: {
      onShow: function() {},
      afterShow: function() {},
      onClose: function() {},
      afterClose: function() {},
      onCloseClick: function() {}
    },
    buttons: false // an array of buttons
  };




  var $form = $('#feedback'),
    $name = $form.find('[name="name"]'),
    $email = $form.find('[name="email"]'),
    $phone = $form.find('[name="phone"]'),
    $message = $form.find('[name="message"]');

  $form.submit(function(e) {
    e.preventDefault();
    var name = $name.val(),
      email = $email.val(),
      phone = $phone.val(),
      message = $message.val();

    $.post('mail.php', {
      name: name,
      email: email,
      phone: phone,
      message: message
    }, function() {
      noty({text: 'Мы получили ваш email и постараемся ответить Вам как можно раньше'});
    })
  });
})();