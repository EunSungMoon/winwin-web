// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from '@faker-js/faker'
export default function handler(req, res) {
  const method = req.method

  switch (method) {
    case 'GET':
      res.status(200).json({
        items: [
          {
            id: Math.random().toString(),
            username: faker.name.fullName(),
            createDate: faker.date.past(),
            startTime: '09:00',
            endTime: '11:00',
            wage: 100000,
            extraPay: 20000,
            workState: 'work_request',
            memo: null
          },
          {
            id: Math.random().toString(),
            username: faker.name.fullName(),
            createDate: faker.date.past(),
            startTime: '09:00',
            endTime: '11:00',
            wage: 100000,
            extraPay: 20000,
            workState: 'work_request',
            memo: null
          },
          {
            id: Math.random().toString(),
            username: faker.name.fullName(),
            createDate: faker.date.past(),
            startTime: '09:00',
            endTime: '11:00',
            wage: 100000,
            extraPay: 20000,
            workState: 'work_request',
            memo: null
          },
          {
            id: Math.random().toString(),
            username: faker.name.fullName(),
            createDate: faker.date.past(),
            startTime: '09:00',
            endTime: '11:00',
            wage: 100000,
            extraPay: 20000,
            workState: 'work_request',
            memo: null
          },

        ]
      })
    default:
      res.status(200).json({})
  }
}
