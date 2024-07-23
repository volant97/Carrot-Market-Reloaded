import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">반가워요!</h1>
        <h2 className="text-xl">당근은 당신과 함께하고 싶어요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="text"
          type="text"
          placeholder="닉네임"
          required
          errors={[]}
        />
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
        <FormInput
          name="password check"
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={[]}
        />
        <FormBtn loading={false} text="시작하기" />
      </form>
      <SocialLogin />
    </div>
  );
}
