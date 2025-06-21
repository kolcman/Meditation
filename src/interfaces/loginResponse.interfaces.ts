export interface LoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  };
}
