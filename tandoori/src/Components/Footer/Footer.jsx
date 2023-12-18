import React from "react";
import "./Footer.css";
import { Icon3 } from "../../Icons";


function Footer() {
  return (
    <div className="flex flex-wrap p-10 bg-black text-xl mt-2 text-white font-comfortaa b-0 inset-x-0  bottom-0 items-center place-content-evenly ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.6786864561283!2d77.49817044860757!3d28.75615326431035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf46c34d6d031%3A0xebe6dc83e9bbbb51!2sTandoori%20Gali!5e0!3m2!1sen!2sin!4v1697042525868!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="lg:w-2/5 sm:3/5 h-96"
        title="tandoori_gali"
      />
      <span className="lg:w-2/5   ">
        <h1 className="">Tandoori gali ❣️</h1>
        <h2>
          Shop No. 1, Delhi-Meerut Road, Muradnagar, Radhey Shyam Vihar Phase 4,
          Ghaziabad, Uttar Pradesh 201206
        </h2>

        <h3 className="footer_phone"> <Icon3 />7060139557, 7017224627</h3>
        <h4>Made by Shreevesh Kumar with 💓</h4>
      </span>
    </div>
  );
}

export default Footer;
