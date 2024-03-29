/*TODO: Pensar em melhores nomes para as interfaces */

export interface ParamsProps {
    category?: string;
}

export interface ParamsPropsAbout {
    title?: string;
}

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
            fotoCategoria: any;
        };
    }[];
    text: string;
}

export interface AboutProps {
    data: any;
    textArray: string[];
    textArray2: string[];
}

/*TODO!: Preciso melhorar o nome dessas interfaces urgente.*/
export interface CategoryWhenNotArray {
    retorno: any;
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
    };

    textArray: string[];
    responseArray: string[];
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
        fotoCategoria: any;
    };
}

export type Element = ElementProps[] | ElementProps;
export type CategoryArray = Category[] | Category;
