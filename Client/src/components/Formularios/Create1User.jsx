import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getEntity, postUser1 } from "../../redux/actions";
import { toast } from "react-hot-toast";
import style from "../Formularios/Create1User.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Create1User = () => {
  const dispatch = useDispatch();
  const entity = useSelector((state) => state.allEntity);
  const [showPwd, setShowPwd] = useState(false);
  const [showPwds, setShowPwds] = useState(false);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(""); // Nueva entidad seleccionada

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }, // Agrega formState para manejar los errores de forma más efectiva
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      entity: [], // Inicialmente, entity es una matriz vacía
    },
  });

  useEffect(() => {
    dispatch(getEntity());
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        entity: selectedEntities,
      };
      
      const newUser = await dispatch(postUser1(userData));

      if (newUser && newUser.error) {
        toast.error(newUser.error);
      } else {
        reset();
        setSelectedEntities([]); // Limpia las entidades seleccionadas
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

  const handleSelect = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedEntity(""); // Limpia la entidad seleccionada en el input
    setSelectedEntities(selectedOptions);
    console.log("selectedOptions", selectedOptions);
    console.log("selectedEntities", selectedEntities);
  };


  const handleRemoveEntity = (entityToRemove) => {
    const updatedEntities = selectedEntities.filter(
      (entity) => entity !== entityToRemove
    );
    setSelectedEntities(updatedEntities);
  };

  return (
    <div className={style.formcontainer}>

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title} >Regístrate</p>
        <p className={style.message}>Crea una cuenta nueva</p>
      
        <div className={style.flex}>
        <div>
        <label>
          <input className={style.input}
            type="text"
            placeholder=""
            {...register("name", { required: "El nombre es requerido" })}
          />
          <span>Nombre completo</span>
          </label>
        </div>
          {errors.name && <span className={style.errormessage}>{errors.name.message}</span>}

        <div className={style.flex}>
          <label>
          <input className={style.input}
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
        </div>
          {errors.email && <p className={style.errormessage} >{errors.email.message}</p>}

        <div className={style.flex}>
          <select className={style.select}
          {...register("entity")} onChange={handleSelect}>
            {entity.map((entityItem, index) => (
              <option key={index} value={entityItem.name}>
                {entityItem.name}
              </option>
            ))}
          </select>
        </div>

        <div className={style.flex}>
        <div>
          <label>
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

  {errors.password && <p className={style.errormessage} >{errors.password.message}</p>}

<div className={style.flex}>
  <label>
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
    <FontAwesomeIcon icon={showPwd ? faEye : faEyeSlash} />
  </button>
  </label>
</div>
</div>
  {errors.confirmPassword && <p className={style.errormessage} >{errors.confirmPassword.message}</p>}

        <div > 
          <p className={style.message}>Entidad seleccionada:</p>
          <ul className={style.entitylist} >
            {selectedEntities.map((entity) => (
              <li key={entity}>
                {entity}{" "}
                <button
                  type="button"
                  onClick={() => handleRemoveEntity(entity)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>

          <button className={style.submit } type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
 }

export default Create1User;




