import { useQuery } from "@tanstack/react-query";
import { DOMAIN, PRODUCTS } from "../constants";
import request from "../services";

interface FilterParams {
    category_id?: string | null;
    color_id?: string | null;
    material_id?: string | null;
    is_discounted?: boolean;
    is_new?: boolean;
    min_price?: number | null;
    max_price?: number | null;
    enabled?: boolean;
}

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await request.get(
                    `https://powertech-uzbekistan.uz/products/`
                );
                return res?.data ?? [];

            } catch (error) {
                console.log(error);
                return []
            }
        },
    });
};

export const useGetFilteredProducts = (filters: FilterParams) => {
    const queryParams = new URLSearchParams();
    if (filters.category_id) queryParams.append("category_id", filters.category_id);

    const queryString = queryParams.toString();
    const url = queryString
        ? `https://powertech-uzbekistan.uz/products/?${queryString}`
        : `https://powertech-uzbekistan.uz/products/`;

    return useQuery({
        queryKey: ["products", filters],
        queryFn: async () => {
            try {
                const res = await request.get(url);
                return res.data;
            } catch (error) {
                console.error(error);
                return [];
            }
        },
        enabled: filters.enabled || false,
    });
};

export const useGetProductsById = (id: string) => {
    return useQuery({
        queryKey: ["products", id,],
        queryFn: async () => {
            if (!id) return null;

            try {
                const url = `https://powertech-uzbekistan.uz/products/${id}/`;
                const res = await request.get(url);
                return res?.data ?? null;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
        
    });
};