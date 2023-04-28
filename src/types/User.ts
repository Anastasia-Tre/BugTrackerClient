export class User {
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  title!: string;
  bio!: string;
  password!: string;
}

export const testUser: User = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 555-555-5555",
  title: "Software Engineer",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed aliquam pellentesque, nibh nibh bibendum nulla, vel gravida elit massa sed nunc. In quis ipsum eu metus rhoncus efficitur.",
  password: "password",
};
