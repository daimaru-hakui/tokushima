export type Repair = {
    factory: string;
    delivery: string;
    deadline: string;
    customer: string;
    status: string;
    category:string;
    repair_contents: {
      title: string;
      image: string;
      price:number;
    }[];
    repair_details: {
      maker: string;
      productName: string;
      size: string;
      quantity: number;
      comment: string;
    }[];
  };

  export type RepairTemplate = {
    factory: string;
    category:string;
    customer: string;
    title:string;
    price:number;
    color:string;
    position:string;
    images:string[]
    comment:string;
  };