function validateUsr(username) {
  return /^[(0-9)(a-z)(_)]{4,16}$/.test(username)
}