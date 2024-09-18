declare namespace Express {
  // * manual. doesn't work with type User = PrismaUser for some reason
  interface User {
    id: number;
    email: string;
    password: string;
    username: string;
    bio: string | null;
    createdAt: Date;
  }
}
