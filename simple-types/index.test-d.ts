import { expectType, expectError } from "tsd";
import * as myApi from '.';

// getUser
expectType<myApi.User>(myApi.getUser(1));
expectType<myApi.User>(myApi.getUser(100));
expectError<myApi.User[]>(myApi.getUser(100));

// getUsers
expectType<myApi.User[]>(myApi.getUsers());
expectError<myApi.User>(myApi.getUsers());
