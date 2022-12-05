import toast from "react-hot-toast";

type ResponseData = {
  message: string;
  success: boolean;
};
const catchResponseMessage = (data: any) => {
  if (data) {
    if (data.success === true && data.message) {
      return toast.success(data.message);
    } else if (data.success === false && data.message) {
      return toast.error(data.message);
    } else console.log("aldaaaaa");
  } else {
    return toast.error("aldaa garlaa 1");
  }
};

export default catchResponseMessage;
