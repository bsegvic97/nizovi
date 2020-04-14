import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var niz = [];
function nizovi(a, b) {
  for (var i = 0; i < a.length; i++) {
    var flag = 0;
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) niz.push(a[i]);
  }
  return niz;
}
nizovi([0, 1, 2, 3, 5], [1, 2, 33, 4, 5]);
nizovi([1, 2, 33, 4, 5], [0, 1, 2, 3, 5]);
console.log(niz);
