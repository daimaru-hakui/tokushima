export type RepairInputs = {
  factory: {
    id: string;
    name: string;
  };
  delivery: {
    id: string;
    name: string;
  };
  deadline: string;
  customer: string;
  status: string;
  repair_contents: {
    title: string;
    images: string[];
    price: number;
    color:string;
    position:string;
    comment:string;
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
  id: string | undefined;
  factory: {
    id: string | undefined;
    name: string | undefined;
  };
  category: {
    id: string | undefined;
    name: string | undefined;
  };
  title: string | undefined;
  customer: string | undefined;
  price: number | undefined;
  color: string | undefined;
  position: string | undefined;
  image_path: string | undefined;
  images: any[] | null | undefined;
  comment: string | undefined;
};

export type RepairTemplateInputs = {
  id: string | undefined;
  factory_id: string;
  categor_id: string;
  title: string | undefined;
  customer: string | undefined;
  price: number | undefined;
  color: string | undefined;
  position: string | undefined;
  image_path: string | undefined;
  images: any[] | null | undefined;
  comment: string | undefined;
};
