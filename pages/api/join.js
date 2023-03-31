// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const method = req.method

  switch (method) {
    case 'POST':
      res.status(200).json({
        code: 100001,
        message: '회원가입 성공',
        data: {
          id: 0,
          username: 'admin',
          email: 'admin@admin.com'
        }
      })
    default:
      res.status(200).json({})
  }
}
