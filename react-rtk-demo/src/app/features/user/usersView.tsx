import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

type usersViewProps = {};

const usersView: React.FC<usersViewProps> = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <p>Loading...</p>}
      {!user.loading && user.error ? <p>{user.error}</p> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default usersView;
