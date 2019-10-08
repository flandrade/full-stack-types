// Type definitions for my-api
// Definitions by: Stack Builders <https://github.com/stackbuilders>
// TypeScript Version: 3.6

export = myApi;
export as namespace myApi

declare namespace myApi {
    type Status = "available" | "non-available";

    interface User {
        age: number;
        id: number;
        name: string;
        status: Status;
    }

    /**
     * Get users
     */
    interface GetUsers {
        (): Promise<User[]>;
    }

    /**
     * Get a user
     */
    interface GetUser {
      (id: number): Promise<User>;
  }
}
