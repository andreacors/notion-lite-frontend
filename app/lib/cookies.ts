import { cookies } from 'next/headers'

export async function getToken() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('token')?.value;
  
  return cookie;
}

export async function setToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('token', token, { maxAge: 60 * 60 * 24, httpOnly: true})
}


export async function deleteToken() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
}