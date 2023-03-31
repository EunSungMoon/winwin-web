// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const method = req.method

  switch (method) {
    case 'POST':
      res.status(200).json({
        code: 103001,
        message: '시용가능한 아이디 입니다.',
        data: {
          id: null,
          username: 'admin',
          email: null
        }
      })
    default:
      res.status(200).json({})
  }
}
