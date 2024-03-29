import { useQuery } from "@tanstack/react-query";
import cartInfo from "../../services/cartInfoApi";

export default function useIntroduction() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["infoCart"],
        queryFn: () => cartInfo(),
    });

    return { isLoading, error, data };
}
