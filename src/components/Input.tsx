interface InputProp {
  placeholder: string;
  ref?: any;
}

export const Input = (props: InputProp) => {
  return (
    <input
      ref={props.ref}
      className="py-2 px-5 border-stone-300 border rounded text-black font-medium"
      type="text"
      placeholder={props.placeholder}
    />
  );
};
