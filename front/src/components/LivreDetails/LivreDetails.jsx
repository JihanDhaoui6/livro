import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,

  AiOutlineShoppingCart,
} from "react-icons/ai";
import axios from "axios";
import { server } from "../../server";

const LivreDetails = ({ data }) => {

  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setClick(count - 1);
    }
  };
  const handleMessageSubmit = async() => {
    const groupTitle = user
  await axios.post(`${server}/conversation/create-new-conversation`,{
    groupTitle, userId, sellerId
  })
  };

  return (
    <div className="bg-white">
      {data ? (
        <>
          <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
            <div className="w-full py-5 ">
              <div className="block w-full 800px:flex ">
                <div className="w-full 800px:w-[50%]">
                  <img
                    src={data.image_Url[select].url}
                    alt=""
                    className="w-[80%]"
                  />
                  <div className="w-full flex">
                    <div
                      className={`${
                        select === 0 ? "border" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[0].url}
                        className="h-[200px]"
                        onClick={() => setSelect(0)} alt=""
                      />
                    </div>
                    <div
                      className={`${
                        select === 1 ? "border" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[1].url}
                        className="h-[200px]"
                        onClick={() => setSelect(1)}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full 800px:w-[50%] pt-5 ">
                  <h1 className={`${styles.livreTitle}`}>{data.name}</h1>
                  <p>{data.description}</p>
                  <div className="flex pt-3">
                    <h4 className={`${styles.livreDiscountPrice}`}>
                      {data.discount_price} DT
                    </h4>

                    <h3 className={`${styles.price}`}>
                      {data.price ? data.price + "DT" : null}
                    </h3>
                  </div>
                  <div className="flex items-center mt-12 justify-between pr-3">
                    <div>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                        {count}
                      </span>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Remove from Wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer"
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="add to wishliste"
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`${styles.button} !mt-6 !rounded h-11 flex items-center`}
                  >
                    <span className="text-white flex items-center ">
                      Add to cart <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center pt-8">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2 "
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="pr-8">
                      <h3 className={`${styles.shop_name} pb-1`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">
                        ({data.shop.ratings}) Ratings
                      </h5>
                    </div>
                    <div
                      className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                      onClick={handleMessageSubmit}
                    >
                      <span className="text-white flex items-center">
                        Send Message <AiOutlineMessage className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LivreDetailsInfo data={data} />
            <br />
            <br />
          </div>
        </>
      ) : null}
    </div>
  );
};

const LivreDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded  ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 font-[600] cursor-pointer 800px:text-[20px] "
            }
            onClick={() => setActive(1)}
          >
            BOOK Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 font-[600] cursor-pointer 800px:text-[20px] "
            }
            onClick={() => setActive(2)}
          >
            BOOK Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 font-[600] cursor-pointer 800px:text-[20px] "
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Ceci est le deuxième opus d’une aventure commencée en 2022 et nommée
            Solaris (recueil de poèmes paru en décembre 2022) avec cette fois-ci
            une tonalité différente … l’écriture devenue naissance et sujet
            (Solaris est autant un manuscrit qu'un être qui se dégage de moi
            pour vivre sa vie) se prolonge ici pour évoquer à travers un jeu
            d’enfants tous les possibles liés à la séparation. Ce livre devient
            donc une quête désespérée à faire revivre un enfant disparu et la
            traduction poétique de ma première pensée après sa disparition : le
            ramener à la vie, le faire "revivre". (Un des poèmes de Solaris, est
            d'ailleurs entremêlé à ces nouveaux textes.) A ce jeu qui se déroule
            en quatre parties, vient s'ajouter le mythe d'Orphée qui jalonne le
            livre et le termine ... mais rappelez-vous quand vous aurez fini
            votre lecture d'aller "Droit devant, du début à la fin …" car ce
            sont dans les dernières lignes que vous trouverez mon ultime message
            !
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Quel est ce sentiment inconnu qui m'habite et m'appelle sans cesse
            derrière les blessures de mon âme ? Il a suffi d'un baiser pour
            tomber ! Je l’ai disséqué à travers des proses amoureuses, des
            proses en détresse, des proses en mal-être, des proses toxiques, des
            proses aventureuses jusqu’à y découvrir les plaies derrière cette
            requête incessante de vouloir être aimée. Jusqu’à ce que l'amour me
            répare, jusqu’à ce que l'amour vous répare.
          </p>

          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Quel est ce sentiment inconnu qui m'habite et m'appelle sans cesse
            derrière les blessures de mon âme ? Il a suffi d'un baiser pour
            tomber ! Je l’ai disséqué à travers des proses amoureuses, des
            proses en détresse, des proses en mal-être, des proses toxiques, des
            proses aventureuses jusqu’à y découvrir les plaies derrière cette
            requête incessante de vouloir être aimée. Jusqu’à ce que l'amour me
            répare, jusqu’à ce que l'amour vous répare.
          </p>
        </>
      ) : null}

      {active === 2 ? <p className="text-center">NO Reviews yet !!!</p> : null}

      {active === 3 && (
        <div className="w-full block  800px:flex p-5 ">
          <div className="w-full 800px:w-[50%] ">
            <div className="flex items-center ">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full "
                alt=""
              />
              <div className=" pl-3 ">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h5>
              </div>
             
            </div>
            <p className="pt-2 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                alias quos voluptatem excepturi rem, placeat animi explicabo,
                illo nihil delectus molestias debitis a impedit voluptas. Quae
                quibusdam iusto obcaecati illo?
              </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className="text-left">
                  <h5 className="font-[600] ">
                      Joined on: <span className="font-[500]">30 March,2024</span>
                  </h5>
                  <h5 className="font-[600] pt-3">
                      Total Books: <span className="font-[500]">5</span>
                  </h5>
                  <h5 className="font-[600] pt-3">
                      Total Reviews: <span className="font-[500]">2</span>
                  </h5>
                  <Link to="/">
                    <div className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}>
                        <h4 className="text-white">
                           uih
                        </h4>
                    </div>
                  </Link>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivreDetails;
