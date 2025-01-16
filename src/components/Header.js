import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { USER_AVATAR, NETFLIX_LOGO, SUPPORTED_LANGS } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { selectedLang } from "../utils/configSlice";

const Header = () => {
  // const [isDropdownVisible, setisDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setisDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setisDropdownVisible(false);
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(selectedLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      <div className="absolute px-16  bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row justify-between items-center">
        <img
          className="w-40 mx-auto md:mx-0"
          src={NETFLIX_LOGO}
          alt="netflix logo"
        />
        {user && (
          <div className="flex ">
            {showGptSearch && (
              <select
                className="m-2 p-2 content-center bg-gray-700 text-white rounded-sm "
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGS.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="m-2 text-nowrap px-2 py-2 bg-slate-400  text-white rounded-md "
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="hidden md:block object-contain"
              src={USER_AVATAR}
              alt="account logo"
            />
            <button
              className="ml-2 text-white text-nowrap"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
