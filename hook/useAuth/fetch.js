import axios from "axios"

export async function login(body) {
  const fetchRes = await axios.post('http://localhost:3000/api/login', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function join(body) {
  const fetchRes = await axios.post('/join', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function checkUsername(body) {
  const fetchRes = await axios.post('/checkUsername', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}