export type Repair = {
    factory: string;
    delivery: string;
    deadline: string;
    customer: string;
    status: string;
    repair_contents: {
      title: string;
      image: string;
    }[];
    repair_details: {
      maker: string;
      productName: string;
      size: string;
      quantity: number;
      comment: string;
    }[];
  };