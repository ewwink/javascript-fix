/*
* javascript function to decode html characters that encoded with php htmlspecialchars
* php encode: enc_html = htmlspecialchars($html, ENT_QUOTES)
* js decode: alert(decode_htmlspecialchars('&lt;a href=&quot;http://dokitv.com&quot;&gt;dokitv&lt;/a&gt;'));
*/

function decode_htmlspecialchars(a) {
  var c = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'"
    },
    b;
  for (b in c) a = a.split(b).join(c[b]);
  return a
};
