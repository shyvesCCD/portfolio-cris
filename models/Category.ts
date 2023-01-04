/*TODO: Pensar em melhores nomes para as interfaces */

export interface Category {
  category: {
    id: number;
    attributes: {
      category: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
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
  id: number;
  attributes: {
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
