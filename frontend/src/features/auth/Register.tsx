import AuthWrapper from "./components/Wrapper";
import InputGroup from "./components/InputGroup";
import { useMemo } from "react";
import { useState } from "react";

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
  const [subPlan, setSubPlan] = useState("");

  return (
    <AuthWrapper heading="Register">
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
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="subscription-plan"
          >
            Subscription Plan
          </label>
          <div className="relative">
            <select
              value={subPlan}
              onChange={({ target }) => setSubPlan(target.value)}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="subscription-plan"
            >
              {subscriptionPlans.map((plan) => {
                return (
                  <option key={plan.value} value={plan.value}>
                    {plan.label}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Register;
