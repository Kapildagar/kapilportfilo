import { MdDensityMedium } from "react-icons/md";
import css from "./Navbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  //search bar toggle with search and cross button
//   const [search, setSearch] = useState(false);
//   const openSearchBar = () =>{
//     setSearch(true);
//     console.log(search);
//   };

//   const closeSearchBar = () =>{
//     setSearch(false);
//     console.log(search);
//   }

  //toggle btn
  const [toggle, setToggle] = useState(false);
  const toggled = () =>{
    setToggle(prev => !prev)
    console.log(toggle)
  }

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.nav_left}>
          <h3 className="text-3xl text-[#02C56D]">K<span className="text-white">apil</span></h3>
        </div>

        <div className={`${css.main_menu} ${toggle ? css["main_menu--open"] : {}}`}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/project">PROJECT</Link>
            </li>
            <li>
              <Link to="/skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/services">RESUME</Link>
            </li>
            {/* <li>
              <a to="/news"></a>
            </li> */}
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={css.btns}>
            {/* <span>
              <BsSearchHeart onClick={openSearchBar}></BsSearchHeart>

              <RxCrossCircled
                className={search ? css.show_btn : css.hide_btn}
                onClick={closeSearchBar}
              ></RxCrossCircled>
            </span> */}
            <MdDensityMedium className={css.toggle_btn} onClick={toggled}></MdDensityMedium>
          </div>
        </div>

        {/* <div className={search ? css.search_show : css.search_hide}>
          <input placeholder="Search here. . ."></input>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
