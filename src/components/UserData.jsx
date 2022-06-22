import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, postUserData } from "../modules/userdata";

const UserData = () => {
  const [name, setName] = useState("");
  const { loading, userdata } = useSelector((state) => ({
    loading: state.userdata.loading,
    userdata: state.userdata.userdata,
  }));
  const dispatch = useDispatch();
  const onGetUser = () => {
    dispatch(getUserData());
  };

  return (
    <div>
      <button onClick={onGetUser}> 버튼을 눌러서 값을 가져오세요 </button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(postUserData(name));
        }}
      >
        {" "}
        버튼을 눌러서 값을 추가하세요{" "}
      </button>
      {/** 리덕스를 통해 가져온 값을 map 통해 추가 */}
      {loading && <p>로딩중입니다</p>}
      {!loading && userdata && userdata.map((data) => <p>이름 {data.last}</p>)}
    </div>
  );
};

export default UserData;
