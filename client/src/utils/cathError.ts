import toast from "react-hot-toast";

const catchError = (error: any) => {
  return toast.error(
    error?.response?.data?.message
      ? error.response.data.message
      : "Алдаа гарлаа"
  );
};

export default catchError;
