
import {axiosInstance} from "./axiosInstance";

export type review = {
  rating:number,
  comment:string,
  date:string,
  reviewerName:string,
  reviewerEmail:string
}

export type Product = {
  id: number,
  images: string[],
  title: string,
  description:string,
  price:number,
  category:string,
  stock:number,
  reviews:review[],
  thumbnail:string
};

type ProductApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Categories = {
  name:string,
  url:string,
  slug:string,
}

export const fetchProduct = async (
  id:number
) :Promise<Product | null> => {
  try{
    const res = await axiosInstance.get<Product>(`/products/${id}`);
    if(!res) console.log("fuck yaar data hi nahi a raha");
    return res.data
  }
  catch(error){
    console.error(error)
    return null
  }
}

export const fetchProductsByCategoryName = async (
  categoryName:string,
):Promise<Product[]> => {

    const response = await axiosInstance.get<ProductApiResponse>(`/products/category/${categoryName}?select=id,title,images,price,category`);
      return response.data.products;
  }

export const fetchCategories = async () : Promise<Categories[]> => {

    const response = await axiosInstance.get<Categories[]>("/products/categories?select=name,url");
    return response.data;
}
