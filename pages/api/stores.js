// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const method = req.method

  switch (method) {
    case 'GET':
      res.status(200).json({
        items: [
          {
            storeName: 'gs25시 편의점',
            totalPay: 10000000,
            numStaff: 1
          },
          {
            storeName: 'CU 편의점',
            totalPay: 134534500,
            numStaff: 53
          },
          {
            storeName: 'emart 편의점',
            totalPay: 5675675687,
            numStaff: 87
          },
          {
            storeName: '미니스톱',
            totalPay: 567568,
            numStaff: 356
          },
          {
            storeName: '세븐일레븐',
            totalPay: 4675764574,
            numStaff: 467
          }
        ]
      })
    default:
      res.status(200).json({})
  }
}
