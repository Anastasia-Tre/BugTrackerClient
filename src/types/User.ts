export class User {
  public id: number | undefined;
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public phone: string = "";
  public title: string = "";
  public bio: string = "";
  public password: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.firstName) this.firstName = initializer.firstName;
    if (initializer.lastName) this.lastName = initializer.lastName;
    if (initializer.email) this.email = initializer.email;
    if (initializer.phone) this.phone = initializer.phone;
    if (initializer.title) this.title = initializer.title;
    if (initializer.bio) this.bio = initializer.bio;
    if (initializer.password) this.password = initializer.password;
  }
}

export const testUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 555-555-5555",
  title: "Software Engineer",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed aliquam pellentesque, nibh nibh bibendum nulla, vel gravida elit massa sed nunc. In quis ipsum eu metus rhoncus efficitur.",
  password: "password",
};
