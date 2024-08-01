type Account = {
  accountId: string,
  name: Name,
  gender: string,
  dob: Date,
  organization: string,
  email: string,
  credential: UserCredential,
  address: Address
}

type Name = {
  firstName: string,
  lastName: string
}

type UserCredential = {
  userId: string,
  password: string
}

type Address = {
  street?: string,
  city: string,
  state: string,
  postcode?: string,
  country: string
}