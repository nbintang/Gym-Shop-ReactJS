import React from "react";
import { useEffect,useState } from "react";
import ShopCard from "./ShopCard";
import Skeleton from "./Skeleton";

export default function LoadingSkeleton(){
  const [loading, setLoading] = useState(true);

useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return <>
  {loading ? <Skeleton/> : <ShopCard/>}
  </>
}