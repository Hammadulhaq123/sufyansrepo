import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "",
    name: "101",
    visitors: "Ahmed",
    revenues: "5,768",
    status: "Paid",
    conversion: 4.8,
  },
  {
    logo: "",
    name: "102",
    visitors: "Taj",
    revenues: "4,635",
    status: "Paid",
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "103",
    visitors: "Rehmani",
    revenues: "4,290",
    status: "Return",
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "104",
    visitors: "Care",
    revenues: "3,580",
    status: "Paid",
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "105",
    visitors: "Abbasi",
    revenues: "2,740",
    status: "Return",
    conversion: 1.9,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-4 py-6 md:px-6 xl:px-9">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Invoices
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke bg-purple-500 px-4 py-4.5 text-white dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Invoice #</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Customer</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Amount</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
      <p className="font-medium">Qty</p>
    </div> */}
        {/* <div className="col-span-1 flex items-center">
      <p className="font-medium">Profit</p>
    </div> */}
      </div>

      {brandData.map((brand, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* <div className="h-12.5 w-15 rounded-md">
            <Image
              src={product.image}
              width={60}
              height={50}
              alt="Product"
            />
          </div> */}
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {brand.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-body-sm font-medium text-dark dark:text-dark-6">
              {brand.visitors}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-body-sm font-medium text-dark dark:text-dark-6">
              {brand.revenues}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="flex items-center justify-center rounded-full bg-purple-500 p-2 text-xs font-medium text-white">
              {brand.status}
            </p>
          </div>
          {/* <div className="col-span-1 flex items-center">
        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
          {product.sold}
        </p>
      </div> */}
          {/* <div className="col-span-1 flex items-center">
        <p className="text-body-sm font-medium text-green">
          ${product.profit}
        </p>
      </div> */}
        </div>
      ))}
    </div>
  );
};

export default TableOne;
