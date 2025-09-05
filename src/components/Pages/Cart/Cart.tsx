import type { Product } from "@/api/userApi";
import Card from "@/components/Card/Card";
import { useCartListStore } from "@/features/Cart-Slice/CartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Cart() {
  const CartList = useCartListStore((state) => state.CartLi);
  const removeProd = useCartListStore((state) => state.removeFromCart);
  const [counters, SetCounters] = useState<number[]>(CartList.map(() => 1));

  // 🔹 Calculate subtotal using reduce
  const subTotal = CartList.reduce(
    (acc, item, index) => acc + item.price * (counters[index] || 1),
    0
  );

  const shipping = 5;
  const taxes = subTotal * 0.1; // example: 10% tax
  const total = subTotal + shipping + taxes;

  useEffect(() => {
    SetCounters(CartList.map(() => 1));
  }, [CartList]);

  function increment(index: number) {
    const newCounters = [...counters];
    newCounters[index] += 1;
    SetCounters(newCounters);
  }

  function decrement(index: number) {
    const newCounters = [...counters];
    if (newCounters[index] > 1) {
      newCounters[index] -= 1;
      SetCounters(newCounters);
    } else {
      removeProd(CartList[index].id);
      const updatedCounters = newCounters.filter((_, i) => i !== index);
      SetCounters(updatedCounters);
    }
  }

  if (CartList.length == 0)
    return <p>hmm....nothing in the cart right now</p>;

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap gap-2 p-4">
         <Link to={`/`}>
         <span className="text-[#111418] text-base font-medium leading-normal">Home</span>
         </Link>
          <span className="text-[#60758a] text-base font-medium leading-normal">
            /
          </span>
          <span className="text-[#111418] text-base font-medium leading-normal">
            Shopping Bag
          </span>
        </div>

        <h2 className="text-[#111418] text-[28px] font-bold leading-tight px-4 pb-3 pt-5">
          Shopping Bag
        </h2>

        <div className="flex flex-col items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          {CartList.map((product, index) => (
            <li key={product.id} className="flex w-full justify-between items-center">
              <Card
                name={product.title}
                url={product.thumbnail}
                price={product.price}
              />
              <div className="shrink-0">
                <div className="flex items-center gap-2 text-[#111418]">
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5]"
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>
                  <input
                    className="w-10 text-center bg-transparent border-none"
                    value={counters[index]}
                    readOnly
                  />
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5]"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>

        {/* 🔹 Order Summary */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight px-4 pb-3 pt-5">
          Order Summary
        </h2>
        <div className="p-4">
          <div className="flex justify-between py-2">
            <p className="text-[#60758a] text-sm">Subtotal</p>
            <p className="text-[#111418] text-sm">${subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-[#60758a] text-sm">Shipping</p>
            <p className="text-[#111418] text-sm">${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-[#60758a] text-sm">Taxes</p>
            <p className="text-[#111418] text-sm">${taxes.toFixed(2)}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-[#60758a] text-sm">Total</p>
            <p className="text-[#111418] text-sm">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-end">
          <button className="h-12 px-5 bg-[#3d98f4] text-white font-bold rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
