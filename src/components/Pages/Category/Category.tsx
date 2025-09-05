import { fetchProductsByCategoryName } from "@/api/userApi";
import Card from "@/components/Card/Card"
import { useEffect, useState } from "react"
import type {Product} from "../../../api/userApi"
import { Link, useParams } from "react-router";



function Category() {

  const [products,setProducts] = useState<Product[]>([]);
  const [errors,setError] = useState<string | null>(null);
  const [loading,setLoading] = useState<boolean>(true);
  const category = useParams<{ category?: string }>().category ?? "defaultCategory";


  useEffect(() => {
    const prod = async() => {
      try{
        const data = await fetchProductsByCategoryName(category);
        setProducts(data)
      }
      catch(error:any){
        setError(error);
      }
      finally{
        setLoading(false);
      }
    }

    if(category) prod();
  },[category])

  if (loading) return <p>Loading....</p>;
if (errors) return <p className="text-red-500">Error: {errors}</p>;


  return (
    <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <span className="text-[#60758a] text-base font-medium leading-normal">
                <Link to={`/`}>
                Home
                </Link>
                </span>
              <span className="text-[#60758a] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">{category}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">{category}</p></div>
            
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured Products</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                >
                  <ul className="flex flex-wrap">
                  {products.map((item:Product,index) => (
                     <li key={index}>
                      <Link to={`/${item.id}`}>
                      <Card name={item.title} price={item.price} url={item.images[0]}/>
                      </Link>
                     </li>
                  ))}
                  </ul>
                </div>

              </div>
              
            </div>
            
            
            </div>
          </div>
  )
}

export default Category