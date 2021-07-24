import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name", "email", "password"]
  static values = {
    user: Object
  }

  submit(event) {
    event.preventDefault()

    this.userValue = {
      name: this.nameTarget.value,
      email: this.emailTarget.value,
      password: this.passwordTarget.value
    }

    console.log(this.userValue)
  }
}
