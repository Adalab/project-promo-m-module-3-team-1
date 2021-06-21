import React, { useEffect, useState } from "react";
import Preview from "./Preview";
import Form from "./Form";
import ls from "../../services/localStorage";

function Main() {
  const localStorageData = ls.get("data") || {};
  const [palette, setPalette] = useState(localStorageData.palette || "1");
  const [name, setName] = useState(localStorageData.name || "");
  const [job, setJob] = useState(localStorageData.job || "");
  const [email, setEmail] = useState(localStorageData.email || "");
  const [phone, setPhone] = useState(localStorageData.phone || "");
  const [linkedin, setLinkedin] = useState(localStorageData.linkedin || "");
  const [github, setGithub] = useState(localStorageData.github || "");
  const [photo, setPhoto] = useState(localStorageData.photo || "");

  const data = {
    palette: palette,
    name: name,
    job: job,
    email: email,
    phone: phone,
    linkedin: linkedin,
    github: github,
    photo: photo,
  };

  useEffect(() => {
    ls.set("data", data);
  }, [data]);

  const handleInput = (inputName, inputValue) => {
    if (inputName === "palette") {
      setPalette(inputValue);
    } else if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "job") {
      setJob(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "phone") {
      setPhone(inputValue);
    } else if (inputName === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputName === "github") {
      setGithub(inputValue);
    }
  };

  const updateAvatar = (avatar) => {
    setPhoto(avatar);
  };

  const handleReset = () => {
    setPalette("1");
    setName("");
    setJob("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    setPhoto("");
  };

  return (
    <main className="main">
      <div className="card-wrapper">
        <Preview
          palette={palette}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          handleReset={handleReset}
          photo={photo}
        />
        <Form
          updateAvatar={updateAvatar}
          handleInput={handleInput}
          palette={palette}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          photo={photo}
          data={data}
        />
      </div>
    </main>
  );
}

export default Main;
