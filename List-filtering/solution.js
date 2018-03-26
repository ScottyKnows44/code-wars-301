function filter_list(l) {
  return l.filter(function(x) {return typeof x == 'number'})
}