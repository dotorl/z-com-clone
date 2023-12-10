"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

const LoginPage = () => {
  // server에서 리다이렉트
  // redirect("/i/flow/login");

  // client에서 리다이렉트
  const router = useRouter();
  router.replace("/i/flow/login");

  // 여기선 login에서 i/flow/login으로 리다이렉트 시켜주기 때문에 children은 login 이 되기에 메인이랑 동일한 코드를 넣어줌으로 써 동일하게 보이게 처리

  return <Main />;
};

/**
 * 기본적으로 서버컴포넌트이기 때문에 use client를 사용하지않으면  redirect는 서버에서 리다이렉트 해주는 함수가 된다
 *  서버에서 리다리렉트는 intercepting이 정상적으도 작동하지않아서,
 * 클라이언트에서 리다이렉트 시켜줘야 함
 * 추후에 pages.tsx는 서버컴포넌트인 것이 좋아서 나중에 다시 바꾸지만 현재는 위에 "use client"  선언 하고 변경 ( use Client에서는 redirect가 작동하지 않음 )
 *
 */
// <Link href="/login" className={styles.login}>
{
  /* <Link href="/i/flow/login" className={styles.login}> */
}

export default LoginPage;
