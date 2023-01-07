/*TODO: Pensar em melhores nomes para as interfaces */

export interface Category {
  category: {
    id: number;
    attributes: {
      category: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      description: string;
      linkURL: string;
    };
  }[];
  text: string;
}

export interface CategoryMeta {
  data2: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface Categoria {
  attributes: {
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    linkURL: string;
  };
}

export interface ElementProps {
  id: number;
  attributes: {
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    linkURL: string;
  };
}

export type Element = ElementProps[] | ElementProps;
export type CategoryArray = Category[] | Category;
