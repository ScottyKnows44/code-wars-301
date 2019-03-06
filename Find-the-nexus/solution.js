function nexus(users) {
  var ret = Object.keys(users).map(Number);
  ret.sort((a, b) => {
    var aa = Math.abs(a - users[a]);
    var bb = Math.abs(b - users[b]);
    if (aa == bb) return a - b;
    return aa - bb;
  });
  return ret[0];
}