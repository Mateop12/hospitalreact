import "./../../assets/sb-admin-2.min.css";
import { useForm } from "react-hook-form";
//disparador de la accion
import { useDispatch, useSelector } from "react-redux";
//redirigir al dashboard
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/authSlice";

export default function Register() {
  let {register, handleSubmit, watch, formState:{errors}} = useForm();
  let contra = watch("password");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {status, error} = useSelector((state)=> state.auth);

  async function sendDataForm(data) {
    let resultado = await dispatch(registerUser({
      name: data.firstname+ " " + data.lastname,
      email: data.email,
      password: data.password,
      userType: "patient"
    }));
    console.log(resultado);
    if (resultado.meta.requestStatus == "fulfilled") {
      alert(resultado.payload.message);
      navigate("/login");
    } else {
      alert("No se pudo registrar el usuario");
    }

  }

  return (
    <>
      <div className="bg-gradient-primary py-2">
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form onSubmit={handleSubmit(sendDataForm)} className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName"
                            placeholder="First Name" {...register("firstname", {required:true})}/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" className="form-control form-control-user" id="exampleLastName"
                            placeholder="Last Name" {...register("lastname", {required:true})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                          placeholder="Email Address" {...register("email", {required:true})} />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" className="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Password" {...register("password", {required:true})} />
                        </div>
                        <div className="col-sm-6">
                          <input type="password" className="form-control form-control-user"
                            id="exampleRepeatPassword" placeholder="Repeat Password" {...register("confirmPass", {required: "Por favor escriba la contraseña",
                              validate: (value) => value === contra || "Las contraseñas no coinciden"})} />
                              {errors.confirmPass && <span className="text-danger">{errors.confirmPass.message}</span>}
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block">
                        Register Account
                      </button>
                      <hr />
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw"></i> Register with Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                        </a>
                    </form>
                    <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="login.html">Already have an account? Login!</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
