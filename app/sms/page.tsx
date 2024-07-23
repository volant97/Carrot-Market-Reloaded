import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">전화번호로 시작할 수 있어요</h1>
        <h2 className="text-xl">번호 좀 물어봐도 될까요?</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="sms num"
          type="number"
          placeholder="전화번호"
          required
          errors={[]}
        />
        <FormInput
          name="authentication num"
          type="number"
          placeholder="인증번호"
          required
          errors={[]}
        />
        <FormBtn loading={false} text="인증완료" />
      </form>
    </div>
  );
}
