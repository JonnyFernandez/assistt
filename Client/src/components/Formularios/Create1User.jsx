import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getEntity, postUser1 } from "../../redux/actions";
import { toast } from "react-hot-toast";

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

  const handleAddEntity = () => {
    if (selectedEntity && !selectedEntities.includes(selectedEntity)) {
      setSelectedEntities([...selectedEntities, selectedEntity]);
      setSelectedEntity("");
    }
  };

  const handleRemoveEntity = (entityToRemove) => {
    const updatedEntities = selectedEntities.filter(
      (entity) => entity !== entityToRemove
    );
    setSelectedEntities(updatedEntities);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Regístrate y crea una cuenta nueva</h2>
        <div>
          <input
            type="text"
            placeholder="Nombre Completo"
            {...register("name", { required: "El nombre es requerido" })}
          />
          {errors.name && <span>{errors.name.message}</span>} {/* Muestra el error si existe */}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Formato de email incorrecto",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>} {/* Muestra el error si existe */}
        </div>
        <div>
          <select {...register("entity")} onChange={handleSelect}>
            {entity.map((entityItem, index) => (
              <option key={index} value={entityItem.name}>
                {entityItem.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es requerida",
              validate: (value) => value === watch("confirmPassword"),
            })}
          />
          <button type="button" onClick={() => toggleShowPassword("password")}>
            Mostrar Contraseña
          </button>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <input
            type={showPwds ? "text" : "password"}
            placeholder="Confirmar Contraseña"
            {...register("confirmPassword", {
              required: "Las contraseñas no coinciden",
              validate: (value) => value === watch("password"),
            })}
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("confirmPassword")}
          >
            Mostrar Contraseña
          </button>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div>
          <p>Entidades seleccionadas:</p>
          <ul>
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
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Create1User;




