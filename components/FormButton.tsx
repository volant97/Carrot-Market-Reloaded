interface Props {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: Props) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-wait"
    >
      {loading ? "로딩중..." : text}
    </button>
  );
}
