import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUser3 } from "../../redux/actions";
import { toast } from "react-hot-toast";
import style from "../Formularios/Create3User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Create3User = () => {
  const dispatch = useDispatch();
  const [showPwd, setShowPwd] = useState(false);
  const [showPwds, setShowPwds] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }, // Agrega formState para manejar los errores de forma más efectiva
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const newUser = await dispatch(postUser3(userData));

      if (newUser && newUser.error) {
        toast.error(newUser.error);
      } else {
        reset();
        toast.success("Usuario creado correctamente");
      }
    } catch (error) {
      toast.error("Hubo un error al crear el usuario");
    }
  };

  const toggleShowPassword = (field) => {
    if (field === "password") {
      setShowPwd(!showPwd);
    } else if (field === "confirmPassword") {
      setShowPwds(!showPwds);
    }
  };

  return (
    <div className={style.formcontainer}>
      <form className={style.form}
        onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Regístrate</p>
        <p className={style.message}>Crea una cuenta nueva, Administrador</p>
        
        <div className={style.flex} >
        <label htmlFor="name"  className={style.flex}>
                <input
                    id="name"
                    className={style.input}
                    type="text"
                    placeholder=""
                    {...register("name", { required: "El nombre es requerido" })}
                />
                <span>Nombre Completo</span>
                </label>
          </div>
                <p className={style.errormessage}>{errors.name?.message}</p>

          <div className={style.formGroup}>
    <label htmlFor="email" className={style.flex}>
      <input
        className={style.input}
        type="text"
        placeholder=""
        {...register("email", {
          required: "El email es requerido",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            message: "Formato de email incorrecto",
          },
        })}
      />
      <span>Email</span>
    </label>
  </div>
    <p className={style.errormessage}>{errors.email?.message}</p>
  
    <label htmlFor="cuit" className={style.flex}>
      <input
        className={style.input}
        type="text"
        placeholder=""
        {...register("cuit", { required: "El cuit es requerido" })}
      />
      <span>Cuit</span>
    </label>
    <p className={style.errormessage}>{errors.cuit?.message}</p>
  
  
    <label htmlFor="phone" className={style.flex}>
      <input
        className={style.input}
        type="text"
        placeholder=""
        {...register("phone", { required: "El teléfono es requerido" })}
      />
      <span>Teléfono</span>
    </label>
    <p className={style.errormessage}>{errors.phone?.message}</p>
  

          <div className={style.flex}>
          <label htmlFor="password"  className={style.flex}>
  <input className={style.input}
    type={showPwd ? "text" : "password"}
    placeholder=""
    {...register("password", {
      required: "La contraseña es requerida",
      validate: (value) => value === watch("confirmPassword"),
    })}
  />
  <span>Contraseña</span>
  <button
    type="button"
    onClick={() => toggleShowPassword("password")}
    className={style.eyeButton}
  >
     <FontAwesomeIcon icon={showPwd ? faEye : faEyeSlash} />
  </button>
          </label>
</div>

  {errors.password && <span className={style.errormessage} >{errors.password.message}</span>}

<div className={style.flex}>
  <label htmlFor="password"  className={style.flex} >
  <input
    className={style.input}
    type={showPwds ? "text" : "password"}
    placeholder=""
    {...register("confirmPassword", {
      required: "Las contraseñas no coinciden",
      validate: (value) => value === watch("password"),
    })}
  />
  <span>Confirmar Contraseña</span>
  <button
    type="button"
    onClick={() => toggleShowPassword("confirmPassword")}
    className={style.eyeButton}
  >
    <FontAwesomeIcon icon={showPwds ? faEye : faEyeSlash} />
  </button>
  </label>
</div>
  {errors.confirmPassword && <span className={style.errormessage} >{errors.confirmPassword.message}</span>}
        <div>
          <button className={style.submit } type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Create3User;
