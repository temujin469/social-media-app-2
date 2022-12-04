import { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/user";
import { AuthContext } from "../../context/authContext";
import catchError from "../../utils/cathError";

// import { useQuery, useMutation, useQueryClient } from "react-query"
import "./register.scss";

const Register = () => {

  const [inputs, setInputs] = useState<UserBody>({
    username: null,
    email: null,
    password: null,
    name: null
  })


  // const [err, setErr] = useState<any | null>(null)

  const { currentUser } = useContext(AuthContext)

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleRegister = async (e: any) => {
    e.preventDefault()
    try {
      await register(inputs);
      toast.success("Амжилттай бүртгэгдлээ");
      navigate('/login')
    } catch (error) {
      catchError(error);
    }
  }

  useEffect(() => {
    const checkUser = () => {
      currentUser && navigate('/')

    }
    checkUser()
  }, [])

  return (
    <div className="register">

      <div className="card">
        <div className="left">
          <h1>Тэмүүжин</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Нэвтрэх</button>
          </Link>
        </div>
        <div className="right">
          <h1>Бүртгүүлэх</h1>
          <form>
            <input type="text" placeholder="Хэрэглэгчийн нэр" name="username" onChange={handleChange} />
            <input type="email" placeholder="Имэйл" name="email" onChange={handleChange} />
            <input type="password" placeholder="Нууц үг" name="password" onChange={handleChange} />
            <input type="text" placeholder="Нэр" name="name" onChange={handleChange} />
            {/* <div>{err && err as string}</div> */}
            <button onClick={handleRegister}>Бүртгүүлэх</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;