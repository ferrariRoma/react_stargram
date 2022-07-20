import Header from "../components/Header";
import { StyledLoginBox } from "./Signup";
import { useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const refPhotoStyle = useRef(null);
  const refFile = useRef(null);
  const refTextarea = useRef(null);
  const navigate = useNavigate();

  const onClickUpload = async () => {
    console.log(
      refPhotoStyle.current.value,
      refFile.current.url,
      refTextarea.current.value
    );
    const textInfo = {
      photoStyle: refPhotoStyle.current.value,
      fileUrl: refFile.current.url,
      text: refTextarea.current.value,
      like: 0,
    };
    await addDoc(collection(db, "contentDB"), textInfo);
    navigate("/");
  };

  const onChangeBtn = async (event) => {
    // uploadBytes를 이용.
    // 첫 번째 요소에 ref를 이용해서 생성된 storage의, 어디에 저장할 건지 설정.
    // 두 번째 요소에 무슨 파일을 올릴 건지 설정.
    const uploaded = await uploadBytes(
      ref(storage, `images/${event.target.files[0].name}`),
      event.target.files[0]
    );
    // 그렇게 하면 metadata랑 ref를 가지고 옴. 여기서 ref를 이용해서 download Url을 가지고 온다.

    const file_url = await getDownloadURL(uploaded.ref);
    refFile.current = { url: file_url };
  };

  return (
    <>
      <Header></Header>
      <StyledLoginBox>
        <h1>업로드</h1>
        <div className="selectStyle">
          <label htmlFor="contentStyle">Style</label>
          <select ref={refPhotoStyle} id="contentStyle">
            <option value="">Please choose an option</option>
            <option value="rightPhoto">rightPhoto</option>
            <option value="leftPhoto">leftPhoto</option>
            <option value="bottomPhoto">bottomPhoto</option>
          </select>
        </div>
        <input onChange={onChangeBtn} type="file" accept="image/*"></input>
        <div className="textareaBox">
          <textarea ref={refTextarea}></textarea>
        </div>
        <button onClick={onClickUpload}>업로드</button>
      </StyledLoginBox>
    </>
  );
};

export default Upload;
