import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../services";

export const usePostUsers = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (payload: any) => {
            const url = `https://powertech-uzbekistan.uz/contacts/`;

            const res = await request.post(url, payload, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            return res.data;
        },

        onSuccess: (result) => {
            qc.invalidateQueries({ queryKey: ['users'] });
        },

        onError: (error: any) => {
            const errData = error?.response?.data;

            if (errData?.message) {
                throw new Error(errData.message);
            }
        },
    });
};