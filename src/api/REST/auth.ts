import { request } from '../../utils/request';

export default async function Auth() {
  try {
    const token = await request.get<string>('oauth/authorize');
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
    throw new Error(``);
  }
}
