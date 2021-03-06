import 'phaser'

export const rotateVector = (vector, degrees) => {
  const rads = Phaser.Math.DegToRad(degrees)
  const v = new Phaser.Math.Vector2(vector.x, vector.y)
  let sin = Math.sin(rads)
  let cos = Math.cos(rads)

  let tx = v.x
  let ty = v.y
  v.x = (cos * tx) - (sin * ty)
  v.y = (sin * tx) + (cos * ty)

  return v
}
