import Head from "next/head";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMounted } from "../../useMounted";
import ls from "local-storage";
const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let { hasMounted } = useMounted();
  let users = ls("users") !== null ? ls("users") : [];
  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
  }, []);
  const selectUser = (id) => {
    ls("activeUID", id);
    router.push("/");
  };
  const createUser = () => {
    router.push("/");
  };
  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg"
              alt=""
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };
  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>
      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};
export default Login;
