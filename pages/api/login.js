// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const method = req.method

  switch (method) {
    case 'POST':
      res.status(200).json({
        code: 101001,
        message: '로그인 성공',
        data: null
      })
    default:
      res.status(200).json({})
  }
}
