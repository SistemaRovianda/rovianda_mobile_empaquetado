export interface Packaged {
  registerDate: string;
  productId: number;
  lotId: number;
  expiration: string;
  products: ProductPresentation[];
}

export interface ProductPresentation {
  presentationId: number;
  pieces: number;
  packs: number;
  weight: number;
  observations: string;
}
