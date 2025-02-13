import BitrixResponse from '../../types/BitrixResponse';
import { request } from '../../utils/request';

class LoginProps {
  token: string;
}

export default async function BitrixLogin({ token }: LoginProps) {
  try {
    const response = await request.get('oauth/login', {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
