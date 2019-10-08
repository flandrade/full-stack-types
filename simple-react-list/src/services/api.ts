export interface User {
  age: number;
  id: number;
  name: string;
  status: Status;
}

export type Status = "available" | "non-available";

export type getUsers = () => Promise<User[]>;

export const getUsers: getUsers = function() {
  const url = "PLACEHOLDER";
  return fetch(url)
    .then(res => res.json());
};
