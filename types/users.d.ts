declare interface UserPayload {
  username: string;
  email: string;
  password: string;
}

declare interface User extends UserPayload {
  dateCreated: string;
  type: 'user' | 'admin' | 'moderator';
  gender: 'male' | 'female' | 'non-binary';
  status: 'pending' | 'active' | 'inactive';
  birthdate: string;
}

declare type NoBirthdateUser = Omit<User, 'birthdate'>;

declare type PartialUser = Partial<User>;

declare interface ProfileResponse {
  user: Partial<User>;
}

// type UserType = 'user' | 'admin' | 'moderator';

// declare type User = {
//   username: string;
//   email: string;
//   password: string;
//   dateCreated: string;
//   type: UserType;
//   gender: 'male' | 'female' | 'non-binary';
//   status: 'pending' | 'active' | 'inactive';
//   birthdate: string;
// }

/**
 * for (const key in user)
 *
 * const key = "email";
 * const email = user[key];
 * ...quel type est email?
 */
