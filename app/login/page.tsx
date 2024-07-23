import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">기다리고 있었어요.</h1>
        <h2 className="text-xl">당근과 만나기 3초전!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="이메일" required errors={[]} />
        <FormInput
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormBtn loading={false} text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
