// app/components/Payment/CheckOutForm.tsx
"use client";
import React, { FC } from "react";

type Props = {
  setOpen: (open: boolean) => void;
  data: any;
  user: any;
  refetch: () => void;
};

const CheckOutForm: FC<Props> = ({ setOpen, data, user, refetch }) => {
  return (
    <div className="w-full">
      <p className="text-black dark:text-white">Checkout form goes here.</p>
    </div>
  );
};

export default CheckOutForm;
