const LoginForm = () => (
  <form>
    <label for="username">Username:</label>
    <input type="text" name="username" />
      <br />
    <label for="password">Password:</label>
    <input type="password" name="password" />
      <br />
    <input type="submit" value="Login"/>
  </form>
)

export default LoginForm