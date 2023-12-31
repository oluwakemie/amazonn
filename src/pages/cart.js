import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";

import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import {loadStripe} from "@stripe/stripe-js"
import { useRouter } from "next/router";
const stripePromise = loadStripe()


import { selectItems, selesctTotal } from "../slices/basketSlice";function checkout() {
  const router = useRouter();
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selesctTotal);

  const createCheckoutSession = () =>{

  }
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                ranting={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
            ;
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="NGN" />
                </span>
              </h2>
              <button
              onClick={() => router.push(" /checkout")}
              role="link" 
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-blue-300 to-blue-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout " : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
