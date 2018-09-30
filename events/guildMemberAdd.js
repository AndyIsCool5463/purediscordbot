module.exports = (Bot, member) => {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
member.addRole('495398208521109505');
let math1 = getRandomInt(10)
let math2 = getRandomInt(15)
let answer = math1 + math2
console.log(answer)
member.send(`Please answer this to get acess to the server. ${math1} + ${math2}`)

}
