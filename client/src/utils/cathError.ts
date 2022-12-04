import toast from "react-hot-toast";

const catchError = (error: any) => {
  return toast.error(
    error?.response?.data?.error ? error.response.data.error : "Алдаа гарлаа"
  );
};

export default catchError;
