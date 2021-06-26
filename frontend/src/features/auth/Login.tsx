import AuthWrapper from "./components/Wrapper";
import InputGroup from "./components/InputGroup";
import React from "react";
import { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <AuthWrapper errors={errors} heading="Login">
      <div className="-mx-3 mb-6">
        <InputGroup
          fullWidth
          value={username}
          onChange={setUsername}
          placeholder="Username"
          label="Username"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <InputGroup
          value={password}
          fullWidth
          onChange={setPassword}
          type="password"
          placeholder="Password"
          label="Password"
        />
      </div>
    </AuthWrapper>
  );
};

export default Login;
