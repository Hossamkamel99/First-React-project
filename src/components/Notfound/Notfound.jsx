import React from "react";
import Notfoundimg from "../../assets/images/404.jpg";
import { Helmet } from "react-helmet";

export default function Notfound() {
    return (
        <>
            <Helmet>
                <title>notFound</title>
            </Helmet>
            <div className=" container text-center my-5 mx-auto">
                <img src={Notfoundimg} alt="not found" className="w-100" />
            </div>
        </>
    );
}
