import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { USER_AVATAR, NETFLIX_LOGO, SUPPORTED_LANGS } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
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
      <div className="absolute px-16  bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
        <img className="w-40 " src={NETFLIX_LOGO} alt="netflix logo" />
        {user && (
          <div
            className="flex"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <select>
              {SUPPORTED_LANGS.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              className="mx-2 py-1.5 px-2 bg-slate-400  text-white"
              onClick={handleGptSearchClick}
            >
              Gpt Search
            </button>
            <img
              className="object-contain"
              src={USER_AVATAR}
              alt="account logo"
            />
            <button className="ml-2 text-white" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
