var positionSlide = 0;
var cpt = 1;
var imgWidth = $('.slider-image').width();
var slider1Height = $('main-carousel').height();

function getImageWidthAndReset() {
  $(document).ready(function() {
    $(window).on('resize', function() {
      cpt = 1;
      positionSlide = 0;
      imgWidth = $('.slider-image').width();
      $('.image-container').css('left', '0');
      $('.cpt-slide span').text(cpt);
      $('#fleche-droite').removeClass('disabled');
      $('#fleche-gauche').addClass('disabled');
    })
  })
}
getImageWidthAndReset();

function slider() {
  $(document).ready(function(){
      $('#fleche-gauche').addClass('disabled');
      $('#fleche-droite').click(function(){
        if (cpt !== 3) {
          $('#fleche-gauche').removeClass('disabled');
          $('.image-container').animate({left: positionSlide - imgWidth});
          positionSlide = positionSlide - imgWidth;
          cpt = cpt + 1;
          $('.cpt-slide span').text(cpt)
        }
        if (cpt == 3) {
          $('#fleche-droite').addClass('disabled');
        }
      });
      $('#fleche-gauche').click(function() {
        $('#fleche-droite').css('display', 'inline-block');
        if (cpt !== 1) {
          $('#fleche-droite').removeClass('disabled');
          $('.image-container').animate({left: positionSlide + imgWidth});
          positionSlide = positionSlide + imgWidth;
          cpt = cpt - 1;
          $('.cpt-slide span').text(cpt)
        }
        if (cpt == 1) {
          $('#fleche-gauche').addClass('disabled');
        }
      })
  })
}
slider();

function buttonAnim() {
  $(document).ready(function(){
    $('.like_button').on({
      'click': function() {
        var src = ($(this).attr('src') === 'images/icon_like_vide.svg') ?
        'images/icon_like_plein.svg' : 'images/icon_like_vide.svg';
        $(this).attr('src', src);
      }
    })
  })
}
buttonAnim();

function replaceArrows() {
  $('.main-carousel').flickity({
    arrowShape: 'M 3,50 L 42,8 L 50,15 L 20,45 L 95,45 L 95,55 L 20,55 L 50,85 L 43,92 Z'
  })
}
replaceArrows();

function dynamicHeightDiv() {
  $(document).ready(function() {
    $(window).resize(function() {
      slider1Height = $('.main-carousel').height();
      $('.conteneur-slide1').height(slider1Height);
    })
  })
}
dynamicHeightDiv();
