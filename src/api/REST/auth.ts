import { request } from '../../utils/request';

export default async function BitrixOauth() {
  try {
    const token = await request.get<string>('oauth/authorize', {
      withCredentials: true,
    });
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
    throw new Error(``);
  }
}
