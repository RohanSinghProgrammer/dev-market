"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  text,
  loadingText,
}: {
  text: string;
  loadingText: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? loadingText : text}
    </Button>
  );
};

export default SubmitButton;
