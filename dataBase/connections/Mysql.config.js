const config = {
  host: process.env.HOST_DB || 'localhost', 
  user: process.env.USER_DB || 'root',
  password: process.env.PASS_DB || '',
  database: process.env.DB || 'himitsubd'
}

export default config