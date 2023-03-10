import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

export default function FloatingButton(props) {
  const navigate = useNavigate();

  return (
    <style.FloatingButton>
      {props.usertype === "teacher" ? (
        <img
          onClick={() => navigate("../classRegister")}
          src={process.env.PUBLIC_URL + "/Images/Float/WriteIcon.svg"}
        />
      ) : (
        <img
          onClick={() => navigate("../chatbot")}
          src={process.env.PUBLIC_URL + "/Images/Float/ChatbotIcon.svg"}
        />
      )}
    </style.FloatingButton>
  );
}
