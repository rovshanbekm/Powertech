import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../services";
import { DOMAIN } from "../constants";

export const usePostUsers = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (payload: any) => {
            const url = `${DOMAIN}contacts/`;

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