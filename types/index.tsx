export type Repair = {
  factory: {
    id: string;
    name: string;
  };
  delivery: string;
  deadline: string;
  customer: string;
  status: string;
  category: string;
  repair_contents: {
    title: string;
    image: string;
    price: number;
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
