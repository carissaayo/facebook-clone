import { getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";


const Login = ({providers}) => {
  return (
    <div className="grid place-items-center">
      <Image
        src="/facebook.png"
        alt="facebook"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1 onClick={signIn}>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/https://facebook-clone-2-pi.vercel.app/",
              })
            }
          >
            Login with {provider.name}
          </button>
        ))}
        {/* Login with Facebook */}
      </h1>
    </div>
  );
}

export default Login;
export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};