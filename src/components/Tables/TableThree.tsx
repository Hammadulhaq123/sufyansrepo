import { Package } from "@/types/package";

const packageData: Package[] = [
  {
    name: "Product 1",
    price: 500,
    invoiceDate: `Jan 13,2023`,
    status: "Active",
  },
  {
    name: "Product 2",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "InActive",
  },
  {
    name: "Product 3",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "InActive",
  },
  {
    name: "Product 4",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Active",
  },
];

const TableThree = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-4 py-6 md:px-6 xl:px-9">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke bg-purple-500 px-4 py-4.5 text-white dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Title</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
        <p className="font-medium">Qty</p>
      </div> */}
        {/* <div className="col-span-1 flex items-center">
        <p className="font-medium">Profit</p>
      </div> */}
      </div>

      {packageData.map((packageDataItem, key) => (
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
                {packageDataItem.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-body-sm font-medium text-dark dark:text-dark-6">
              {packageDataItem.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-body-sm font-medium text-dark dark:text-dark-6">
              {packageDataItem.price}
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

export default TableThree;
