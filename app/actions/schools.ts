

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getSchoolById(slug: string) {
  try {
    const response = await fetch(`${API_URL}/schools/${slug}`)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function createSchool(data: any) {
  try {
    const response = await fetch(`${API_URL}/schools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}