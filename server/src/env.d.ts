declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_URL: string;
    }
  }
}

export {};
