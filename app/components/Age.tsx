"use client";
import {useEffect, useState} from "react";

export default function Age() {
  const [age, setAge] = useState(15);

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    setAge(year - 2009);
  }, []);

  return <span className="age">{age} Year old</span>
}