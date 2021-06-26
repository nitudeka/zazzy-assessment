import AuthWrapper from "./components/Wrapper";
import InputGroup from "./components/InputGroup";
import React, { useMemo } from "react";
import { useState } from "react";

const Chip: React.FC<{
  label: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ label, selected, onClick }) => {
  const cNames = [
    selected
      ? "bg-blue-500 text-white bg-opacity-80 border-blue-500"
      : "text-gray-600",
    "uppercase font-semibold cursor-pointer mr-4 text-sm py-1 rounded-2xl border-2 px-4",
  ].join(" ");

  return (
    <div onClick={onClick} className={cNames}>
      {label}
    </div>
  );
};

const Register: React.FC = () => {
  const subscriptionPlans = useMemo(
    () => [
      { label: "Gold", value: "gold" },
      { label: "Pro", value: "pro" },
      { label: "Basic", value: "basic" },
    ],
    []
  );
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [subPlan, setSubPlan] = useState(subscriptionPlans[0].value);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <AuthWrapper errors={errors} heading="Register">
      <div className="flex flex-wrap -mx-3 mb-6">
        <InputGroup
          value={fName}
          onChange={setFName}
          type="text"
          placeholder="First Name"
          label="First Name"
        />
        <InputGroup
          value={lName}
          onChange={setLName}
          type="text"
          placeholder="Last Name"
          label="Last Name"
        />
      </div>
      <div className="-mx-3 mb-6">
        <InputGroup
          value={password}
          onChange={setPassword}
          fullWidth
          type="password"
          placeholder="Password"
          label="Password"
        />
      </div>
      <div className="-mx-3 mb-6">
        <InputGroup
          value={confPassword}
          onChange={setConfPassword}
          fullWidth
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
        />
      </div>
      <div>
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Subscription Plan
        </p>
        <div className="flex">
          {subscriptionPlans.map((plan) => (
            <Chip
              onClick={() => setSubPlan(plan.value)}
              key={plan.value}
              label={plan.label}
              selected={plan.value === subPlan}
            />
          ))}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Register;
