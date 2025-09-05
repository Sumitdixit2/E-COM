// import type { AxiosResponse } from "axios"
// import { axiosInstance } from "./axiosInstance"

// type postData = {
//     firstName:string,
//     lastName:string,
//     email:string,
//     password:string
// }

// type ApiResponse = {
//     id:string,
//     firstName:string,
//     email:string
// }

// export const signUpUser = async(data:postData):Promise<ApiResponse | null> => {
//     try{
//          const response:AxiosResponse<ApiResponse> = await axiosInstance.post("/users/add",data,{
//             headers: { "Content-Type": "application/json" },
//          });
//          console.log("user added :" ,response.data);
//          return response.data
//     }
//     catch(error){
//         console.error("an error happened in the post request : ",error);
//         return null;
//     }

// }

// const newUser:postData = {
//     firstName:"Sumit",
//     lastName:"Dixit",
//     email:"sfgggg",
//     password:"frgeg"
// }

// signUpUser(newUser);


// types.ts
 type ApiResponse = {
  id: string;
  firstName: string;
  email: string;
};

// api.ts
import { axiosInstance } from "./axiosInstance";


type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signUpUser = async (
  payload: SignUpPayload
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post<ApiResponse>(
      "/users/add",
      payload
    );
    return response.data; // ✅ must return something here
  } catch (error) {
    console.error("Sign up failed:", error);
    throw error; // rethrow so the caller can handle it
  }
};


(async () => {
  const newUser = await signUpUser({
    firstName: "Sumit",
    lastName: "Dixit",
    email: "sumit@example.com",
    password: "securePass123",
  });

  console.log("User signed up:", newUser);
})();

