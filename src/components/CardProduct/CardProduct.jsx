import { Card, CardContent, CardHeader } from "../ui/card";
import ProductImg from "../../assets/images/image-product-desktop.jpg";
import ProductImg2 from "../../assets/images/image-product-mobile.jpg";
import { Button } from "../ui/button";

const CardProduct = () => {
  return (
    <Card className="flex flex-col md:flex-row max-w-min md:max-w-xl w-full overflow-hidden rounded-xl shadow-sm p-0 border-0">
      {/* Img left */}
      <div className="md:w-1/2 w-full">
        <img
          src={ProductImg}
          alt="Gabrielle Chanel Perfume"
          className="hidden md:block object-cover md:h-full w-full"
        />
        <img
          src={ProductImg2}
          alt="Gabrielle Chanel Perfume 2"
          className="md:hidden w-full h-auto object-cover"
        />
      </div>
      {/* text right */}
      <CardContent className="flex flex-col justify-center gap-5 p-6 md:w-1/2">
        <span className="uppercase tracking-[0.5rem] text-xs text-slate-500 font-medium">
          Perfume
        </span>
        <h2 className="text-3xl font-bold text-gray-900 font-serif leading-8 md:text-4xl">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="text-sm text-gray-600 md:text-base">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-3xl md:text-4xl font-bold
            text-[#3F8169]"
            >
              $149.99
            </span>
            <span
              className="text-base text-gray-400
            line-through"
            >
              $169.99
            </span>
          </div>
        </div>
        <Button className="bg-[#3D8168] hover:bg-green-900 w-full text-base font-semibold gap-2 p-8 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Add to Cart
          </Button>
      </CardContent>
    </Card>
  );
};
export default CardProduct;
