export declare interface IMenuItem {
  item: {
    id: number;
    url: string;
    name: string;
    description: string;
    price: number;
    updateClick?: Function;
    deleteClick?: Function;
  };
}

export declare interface IMenuItemItself {
  id: number;
  url: string;
  name: string;
  description: string;
  price: number;
}
