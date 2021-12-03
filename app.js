$('textarea').on('input', function (e) {
  $('.' + e.target.name).html(e.target.value);
});

$('#nextcolor').click(function () {
  let angle = Math.floor(Math.random() * 16) * 45 * 0.5;

  let background = `linear-gradient(${angle}deg, ${color(200)}, ${color(200)})`;
  console.log(background);

  $('.picture').attr('style', `background:${background};`);
});

function color(n = 256) {
  return (
    '#' +
    Array.from({ length: 3 }, (_, i) =>
      Math.floor(Math.random() * n)
        .toString(16)
        .padStart(2, '0')
    ).join('')
  );
}

$('#nextcolor').click();

let fs = {
  question: 10,
  answer: 10,
};

$('button.plus').click(function () {
  let type = $(this).closest('nav').attr('id');
  fs[type] += 0.2;
  console.log({ type, fs });
  $('.' + type).css({ 'font-size': fs[type] + 'vh' });
});

$('button.minus').click(function () {
  let type = $(this).closest('nav').attr('id');
  fs[type] -= 0.2;
  console.log({ type, fs });
  $('.' + type).css({ 'font-size': fs[type] + 'vh' });
});

$('input[type="color"]').on('input', function (e) {
  let type = $(this).closest('nav').attr('id');
  let color = $(this).val();
  //   console.log({ type, color });
  $('.' + type).css({ color });
});

$('#download').click(function () {
  convert();
});

function convert() {
  let dom = document.getElementById('picture');
  html2canvas(dom).then((canvas) => {
    let link = document.createElement('a');
    link.download = Date.now() + '.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
