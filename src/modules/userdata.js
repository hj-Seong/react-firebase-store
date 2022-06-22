import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase";

// 액션 값
const GET_USERDATA = "userdata/GET_USERDATA"; // 값을 가져옴
const GET_SUCCESS = "userdata/GET_SUCCESS"; // 성공
const GET_FAILURE = "userdata/GET_FAILURE"; // 실패

const POST_USERDATA = "userdata/POST_USERDATA";

// 액션 함수 > 안에서 firebase을 사용하기위해 Thunk
export const getUserData = () => async (dispatch) => {
  let array = [];
  dispatch({ type: GET_USERDATA });
  try {
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().last}`);
      array.push(doc.data());
    });
    dispatch({ type: GET_SUCCESS, payload: array });
  } catch (e) {
    dispatch({ type: GET_FAILURE, payload: e });
    console.log("오류", e);
  }
};

export const postUserData = (name) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "user"), {
      first: "Ada",
      last: name,
    });
    //dispatch({ type: POST_USERDATA });
  } catch (e) {}
};

// 초기값
const initialState = {
  loading: false,
  userData: null,
};

// reducer 함수
function userdata(state = initialState, action) {
  switch (action.type) {
    case GET_USERDATA:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default userdata;
