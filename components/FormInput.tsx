interface Props {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors = [],
  name,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {/* action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다. */}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-transparent rounded-md w-full h-10 border-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 focus:outline-none placeholder:text-neutral-400 transition duration-300"
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
