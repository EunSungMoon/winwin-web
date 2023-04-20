import axios from 'axios'

export async function findStores() {
  const fetchRes = await axios.get(`http://localhost:3000/api/stores`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function findStore(params) {
  const { storeName } = params
  const fetchRes = await axios.get(`http://localhost:3000/api/store/${storeName}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function findWoker(params) {
  const { storeName } = params
  const fetchRes = await axios.get(`http://localhost:3000/api/store/${storeName}/workers`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function findRequestedWorkers() {
  const fetchRes = await axios.get(`http://localhost:3000/api/work/requested`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function createStore(body) {
  const fetchRes = await axios.post('http://localhost:3000/api/store', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function updateStatus(body) {
  const fetchRes = await axios.post('http://localhost:3000/api/work/approve', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function update(body) {
  const fetchRes = await axios.post('http://localhost:3000/api/store', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

export async function deleteStore(params) {
  const { storeId } = params
  const fetchRes = await axios.delete(`http://localhost:3000/api/store/${storeId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchRes
}

//종업원 삭제