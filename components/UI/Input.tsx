interface CommonProps {}

type InputProps = React.HTMLProps<HTMLInputElement> & { isTextarea?: false };
type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  isTextarea: true;
};

type Props = (InputProps | TextAreaProps) & CommonProps;

export const Input: React.FC<Props> = (props) => {
  const commonClasses = `bg-gray-200 focus:outline-none focus:shadow-outline focus:bg-white border border-transparent rounded-lg py-2 px-4 block w-full appearance-none leading-normal placeholder-gray-700 ${props.className}`;

  if (props.isTextarea) {
    const { isTextarea, ...rest } = props;

    return <textarea {...rest} className={`${commonClasses}`} />;
  }

  return <input {...props} className={commonClasses} />;
};
