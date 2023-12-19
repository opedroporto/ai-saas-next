"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("7e1a7cb3-0eaa-422a-8a85-ea852f02aa14");
    }, []);
    
    return null;
}