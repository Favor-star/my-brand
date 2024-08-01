interface InputProps {
  placeholder: string;
  type?: string;
}
const Input = ({ placeholder, type ='text' }: InputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="border border-blackCustom p-3 focus-within:outline-none placeholder:text-blackCustom placeholder:text-opacity-60 border-opacity-50 rounded-lg  w-full"
      />
    </div>
  );
};
export default Input;
