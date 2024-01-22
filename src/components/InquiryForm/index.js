import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Button from "../Button";
import { fontColor, red, white } from "@/styles/theme";

const InquiryForm = ({ formList }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    inquiry: "",
    franchiseName: "",
    franchiseAddress: "",
    equipments: [],
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const optionsQueryParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).getAll("options")
      : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (
      (["name", "tel", "email", "franchiseName"].includes(name) &&
        value.trim() === "") ||
      (name === "tel" && !/^\d+$/.test(value)) ||
      (name === "email" && !/^\S+@\S+\.\S+$/.test(value))
    ) {
      setIsButtonDisabled(true);
      return;
    }

    if (
      formData.name.trim() !== "" &&
      /^\d+$/.test(formData.tel) &&
      /^\S+@\S+\.\S+$/.test(formData.email) &&
      formData.franchiseName.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const submitEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      toast.success("신청이 완료되었습니다.");
    } catch (error) {
      console.error(error);
      toast.error("메일 전송에 실패하였습니다.");
    }
  };

  return (
    <InquiryFormContainer>
      <Toast
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
      <form ref={formRef} onSubmit={submitEmail}>
        <p className="text">
          <span>﹡</span> 필수 항목을 모두 작성해주세요. 전화번호와 이메일
          형식에 유의하세요.
        </p>
        {formList.map((el) => (
          <div className="input-wrapper" key={el.id}>
            {el.id === 5 && <p className="sort">가맹점 정보</p>}
            <label>
              {el.label} {el.mark && <span>﹡</span>}
            </label>
            <input type="text" name={el.eng} onChange={handleInputChange} />
          </div>
        ))}
        <div className="equipments">
          <input name="equipments" value={optionsQueryParam} readOnly />
        </div>
        <div className="button-wrapper">
          <Button text="제출하기" color="main" disabled={isButtonDisabled} />
        </div>
      </form>
    </InquiryFormContainer>
  );
};

const InquiryFormContainer = styled.div`
  width: 38.8916666667vw;
  margin-right: 4.44vw;
  padding: 40px 32px;
  background: ${white};
  border-radius: 24px;

  @media screen and (min-width: 1920px) {
    width: 35vw;
    margin-right: 5vw;
  }

  @media screen and (max-width: 939px) {
    width: 80vw;
    margin-right: 0;
    margin: 0 auto;
    padding: 32px 24px;
  }

  form {
    max-width: 768px;
    margin: 0 auto;

    .text {
      margin: 16px 0;
      color: ${fontColor};
      font-size: 0.7777777778rem;
    }

    span {
      color: ${red};
    }

    .input-wrapper {
      width: 100%;
      padding: 10px 0;

      @media (max-width: 939px) {
        display: inline-block;
        width: 100%;
        padding: 5px 0;
      }

      .sort {
        margin-bottom: 12px;
        font-size: 1.125rem;
      }

      label {
        display: block;
        margin-bottom: 8px;
        color: ${fontColor};
        font-size: 0.8888888889rem;
        font-weight: 400;
      }

      input,
      select,
      textarea {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 10px;
        padding: 16px 10px;
        background-color: ${white};
        border: 1px solid #9797a1;
        border-radius: 8px;
        color: ${fontColor};
        font-weight: 400;

        @media (max-width: 939px) {
          padding: 0.825rem;
        }
      }

      textarea {
        height: 5.5rem;
      }
    }

    .equipments {
      display: none;
    }

    .button-wrapper {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

const Toast = styled(ToastContainer)`
  margin: auto;
`;

export default InquiryForm;
