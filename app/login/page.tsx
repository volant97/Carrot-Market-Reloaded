import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function page() {
  const formActionHandler = async (data: FormData) => {
    "use server";
    await new Promise((r) => setTimeout(r, 3000));
    console.log("서버에서 작동중");
    console.log(data.get("email"), data.get("password"));
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">기다리고 있었어요.</h1>
        <h2 className="text-xl">당근과 만나기 3초전!</h2>
      </div>
      <form action={formActionHandler} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormBtn text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
