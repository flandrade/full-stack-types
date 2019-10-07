// Type definitions for my-api
// Definitions by: Stack Builders <https://github.com/stackbuilders>
// TypeScript Version: 3.6

declare let myApi: myApi.Static;

declare namespace myApi {
    type Status = "available" | "non-available";

    interface User {
        age: number;
        id: number;
        name: string;
        status: Status;
    }

    interface Static {
      /**
       * Get users
       */
      getUsers(): User[];

      /**
       * Get a user
       */
      getUser(id: number): User;
    }
}

export = myApi;
export as namespace myApi;
