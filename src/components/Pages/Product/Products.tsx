import { fetchProduct, type Product } from "@/api/userApi"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import timeAgo from "@/utils/timeAgo";
import { usewishListStore } from "@/features/Wish/slice";
import { useCartListStore } from "@/features/Cart-Slice/CartSlice";


function Products() {
 
  const [product , setProduct] = useState<Product | null>(null);
  const [loading,setLoading] = useState<boolean>(true);
  const [errors,setError] = useState<string | null>(null);
  const {id} = useParams<{id?:string}>();
  const numericId = id ? Number(id) : 0;
  const addToWishLists = usewishListStore((state) => state.addToWishList);
  const addToCart = useCartListStore((state) => state.addToCart)
  

  useEffect(() => {
     const prod = async() => {
      try{
        const data = await fetchProduct(numericId);
        setProduct(data);
      }
      catch(error:any){
        setError(error.message || "shit the error");
      }
      finally{
        setLoading(false);
      }
     }

     if(numericId > 0) prod();
  },[numericId])

  if(loading) return <p>Loading...</p>
  if(errors) return <p className="text-red-500">fuck there is an error : {errors}</p>

 

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
              <span className="text-[#60758a] text-base font-medium leading-normal" >
                <Link to={`/category/${product?.category}`}>
                {product?.category}
                </Link>
                </span>
              <span className="text-[#60758a] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">{product?.title}</span>
            </div>
          
          
           {product && (
             
              <div>
               <div className="flex w-full grow bg-white @container p-4">
                    <Carousel className="w-full">
  <CarouselContent>
    {product.images.map((image, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <img src={image} alt={`product-image-${index}`} className="object-contain " />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

            
            </div> 
             <h1 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">{product.title}</h1>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {product.description}
            </p>
            <p className="text-[#60758a] text-2xl font-normal leading-normal pb-3 pt-1 px-4">${product.price}</p>
              </div>
            
          )}
          
          {["mens-shirts","womens-dresses","tops"].includes(product?.category ?? "") && (
            <div>

            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Size</h3>
            <div className="flex flex-wrap gap-3 p-4">
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#dbe0e6] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3d98f4] relative cursor-pointer"
                >
                XS
                <input type="radio" className="invisible absolute" name="98e18d8c-46e3-4328-b478-c2e504d71745" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#dbe0e6] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3d98f4] relative cursor-pointer"
                >
                S
                <input type="radio" className="invisible absolute" name="98e18d8c-46e3-4328-b478-c2e504d71745" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#dbe0e6] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3d98f4] relative cursor-pointer"
                >
                M
                <input type="radio" className="invisible absolute" name="98e18d8c-46e3-4328-b478-c2e504d71745" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#dbe0e6] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3d98f4] relative cursor-pointer"
                >
                L
                <input type="radio" className="invisible absolute" name="98e18d8c-46e3-4328-b478-c2e504d71745" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#dbe0e6] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3d98f4] relative cursor-pointer"
                >
                XL
                <input type="radio" className="invisible absolute" name="98e18d8c-46e3-4328-b478-c2e504d71745" />
              </label>
            </div>
                </div>
          )}
            
            
            <div className="flex px-4 py-3 justify-start">
              <Link to={`/Cart`}>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3d98f4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={() => {
                  if(product){
                    addToCart(product,1)
                  }
                }}>
                <span className="truncate">Add to Cart</span>
              </button>
                </Link>

             <Link to={`/wishList`}>
              <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] ml-5"
                  onClick={() => {
                    if(product) {
                      addToWishLists(product);
                    }
                  }}>
                  <span className="truncate">Add to Wishlist</span>
                </button>
                   </Link>
            </div>

            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Comments</h3>

            <ul>

            {product?.reviews.map((review,index) => ( 
              <li key={index}>

            <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrA9q27IiNeyOf046dgniq0zGciyrah7kI37tIt1jhPWshogvrFlAAcZdtG3hldBIRgdBUGMoVN_W205sVqvy2CQbkWtva5pGsqGklN2L8iLDipvGDwQ9ZVuFx1-zYtXC6Ft8cgMgqle-wVDIh_EfG-J7geYYwfrMCjOh5nksv-HVdtmgRHLJlQ3mKog32toXyu9HUDnAfmsMW76KmsvrlmZakTzdbGSuRAV-LuBSIoGcZeseAw_8ohBCMR4ErZemhU0c5nmkIeyU")`}}
                ></div>
              <div className="flex h-full flex-1 flex-col items-start justify-start">
                <div className="flex w-full flex-row items-start justify-start gap-x-3">
                  <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">{review.reviewerName}</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">{timeAgo(review.date)}</p>
                </div>
                <p className="text-[#111418] text-sm font-normal leading-normal">
                  {review.comment}
                </p>
              </div>
              {Array.from({ length: review.rating }).map((_, i) => (
                <div
                key={i}
                className="text-[#111418]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
                >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="gold"
      viewBox="0 0 256 256"
      >
      <path
        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
        ></path>
    </svg>
  </div>
))}

            </div>
</li>
            ))}

            </ul>
             
            
          </div>
        </div>
  )
}

export default Products