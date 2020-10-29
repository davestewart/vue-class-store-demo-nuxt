export class Rectangle {
  public width: number

  public height: number

  public logs: string[] = []

  constructor (width = 2, height = 2) {
    this.width = width
    this.height = height
    this.log('Rectangle constructor called!')
  }

  get area () {
    return this.width * this.height
  }

  'on:area' (value: number) {
    this.log(`Area is ${value}`)
  }

  randomize () {
    this.width = Math.random() * 20
    this.height = Math.random() * 10
  }

  log (message: string) {
    this.logs.push(`${new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/)}: ${message}`)
  }
}
