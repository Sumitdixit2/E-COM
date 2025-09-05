import { usewishListStore } from "@/features/Wish/slice";
import Card from "../../Card/Card";
import { useCartListStore } from "@/features/Cart-Slice/CartSlice";

function Wishlist() {
  const removeListElement = usewishListStore((state) => state.removeFromWIshList);
  const wishData = usewishListStore((state) => state.wishlist);
  const addToCart = useCartListStore((state) => state.addToCart);

  if (wishData.length === 0) {
    return <p className="text-center py-10 text-lg">Hmm.. your wishlist is empty right now</p>;
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            My Wishlist
          </p>
        </div>

        <ul className="flex flex-wrap gap-4 p-4">
          {wishData.map((product) => (
            <li key={product.id} className="flex flex-col items-center p-2 w-[250px]">
              <Card
                name={product.title}
                url={product.thumbnail}
                price={product.price}
              />
              <div className="flex justify-center w-full mt-3 gap-2">
                <button
                onClick={() => addToCart(product,1)}
                  className="flex-1 min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#3e99f4] text-white text-sm font-bold leading-normal"
                >
                  <span className="truncate">Add to Cart</span>
                </button>
                <button
                  onClick={() => removeListElement(product.id)}
                  className="flex-1 min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal"
                >
                  <span className="truncate">Remove</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
