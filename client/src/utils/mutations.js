import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($name: String, $email: String, $password: String) {
    RegisterUser(post: { name: $name, email: $email, password: $password }) {
      name
      email
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    LoginUser(email: $email, password: $password) {
      id
      token
      email
      password
    }
  }
`;
export const REGISTER_FORM = gql`
  mutation registerForm(
    $FirstName: String
    $LastName: String
    $address: String
    $areacode: String
    $state: String
    $PhoneNumber: String
  ) {
    RegisterForm(
      post: {
        FirstName: $FirstName
        LastName: $LastName
        address: $address
        areacode: $areacode
        state: $state
        PhoneNumber: $PhoneNumber
      }
    ) {
      id
      FirstName
      LastName
      address
      areacode
      state
      PhoneNumber
    }
  }
`;
