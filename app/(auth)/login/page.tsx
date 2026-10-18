"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <Button variant="destructive" onClick={() => router.push("/dashboard")}>
      Log in
    </Button>
  );
};

export default Login;
