// src/routes/OnePagerHost.tsx
import { useParams, Navigate } from "react-router-dom";
import { getOnePager } from "@/onepagers/registry";

export default function OnePagerHost() {
  const { slug } = useParams();
  const entry = slug ? getOnePager(slug) : null;
  if (!entry) return <Navigate to="/404" replace />;

  const { Component } = entry;
  return <Component />; // render your original app as-is
}
