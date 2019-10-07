// Type definitions for my-api
// Definitions by: Stack Builders <https://github.com/stackbuilders>
// TypeScript Version: 3.6

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
    type getUsers = () => User[];

    /**
     * Get a user
     */
    type getUser = (id: number) => User;
}

export = myApi;
export as namespace myApi;
