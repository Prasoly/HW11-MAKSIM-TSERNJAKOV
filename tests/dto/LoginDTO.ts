export class LoginDTO {
  private readonly username: string
  private readonly password: string

  private constructor(username: string, password: string) {
    this.username = username
    this.password = password


  }

  static createLoginWithCorrectData(): LoginDTO {
    return new LoginDTO(process.env.USERNAME || 'mtsernjakov', process.env.PASSWORD || 'whe7s5qbYbfT2n')
  }

  static createLoginWithBrokenData(): LoginDTO {
    return new LoginDTO('', '')
  }
}

