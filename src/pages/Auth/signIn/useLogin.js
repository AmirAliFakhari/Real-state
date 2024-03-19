import { useMutation } from "@tanstack/react-query";
import login from "../../../services/Auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import useGetUser from "../../../services/Auth/useGetUser";
import { useDispatch } from "react-redux";
import { userRole } from "../authSlice";
import getUser from "../../../services/Auth/getUser";

export default function useLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        mutate: singIn,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, email) => login(password, email),

        onSuccess: (data) => {
            localStorage.setItem("username", data.user.user_metadata.firstname)
            async function someFunction() {
                try {
                    const userId = await getUser();

                    dispatch(userRole(userId));
                } catch (error) {
                    console.error("Not Authenticated", error);
                }
            }
            someFunction()
            toast.success("درست زدي سيد")
            navigate("/")
        }
        ,
        onError: () => {
            toast.error("اشتب زدی سید")
        }
    });

    return { singIn, data, isPending };
}
