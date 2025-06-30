export interface Profile {
  data: {
    user: {
      email: string;
      id: number;
      last_login_at: Date;
      username: string;
    };
  };
  status: string;
}
