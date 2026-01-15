import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, DOMAIN } from "../constants";
import request from "../services";

export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            try {
                const res = await request.get(
                    `https://powertech-uzbekistan.uz/categories/`
                );                
                return res?.data ?? [];

            } catch (error) {
                console.log(error);
                return []
            }
        },
    });
};